import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ayurvedicBooks } from "@/data/books";
import { Book, Upload, Bot, Search, Send, Loader2 } from "lucide-react";

// Initialize Google Generative AI using the provided API key
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

export default function AyurBot() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  const [query, setQuery] = useState("");
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);
  const [selectedBook, setSelectedBook] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [conversations, setConversations] = useState<{ role: string; content: string }[]>([]);
  const conversationEndRef = useRef<HTMLDivElement>(null);

  // Function to handle file upload
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        setUploadedFile(file);
        toast({
          title: "File uploaded",
          description: `${file.name} has been uploaded successfully.`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file.",
          variant: "destructive",
        });
      }
    }
  };

  // Function to trigger file input
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Check if API key is available
    if (!GOOGLE_API_KEY) {
      toast({
        title: "API Key Missing",
        description: "Google Gemini API key is not configured. Please contact the administrator.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Add user query to conversation
      const userMessage = { role: "user", content: query };
      setConversations(prev => [...prev, userMessage]);
      setIsLoadingResponse(true);

      // Build context based on active tab
      let context = "You are an Ayurvedic knowledge assistant named Ayur Bot. Answer questions about Ayurvedic medicine, herbs, treatments, and principles.";
      
      if (activeTab === "book" && selectedBook) {
        const book = ayurvedicBooks.find(b => b.id.toString() === selectedBook);
        if (book) {
          context += ` The user is asking about the book "${book.title}" by ${book.author} (${book.year}). The book is about: ${book.description}`;
        }
      } else if (activeTab === "upload" && uploadedFile) {
        context += ` The user has uploaded a document titled "${uploadedFile.name}". Please note that in this demo version, we're simulating document processing.`;
      }

      // Call Google's Generative AI
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      
      // Prepare the prompt with the context and user query
      const prompt = context + "\n\nUser query: " + query;
      
      // Generate content
      const result = await model.generateContent(prompt);
      const response = result.response.text();

      // Add AI response to conversation
      const aiMessage = { role: "assistant", content: response };
      setConversations(prev => [...prev, aiMessage]);
      setQuery("");
    } catch (error: any) {
      console.error("Error generating content:", error);
      
      // More specific error message based on the error
      let errorMessage = "Failed to get a response. Please try again later.";
      
      if (error.message?.includes("API key")) {
        errorMessage = "Invalid API key or authentication issue. Please contact the administrator.";
      } else if (error.message?.includes("network")) {
        errorMessage = "Network error. Please check your internet connection.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoadingResponse(false);
    }
  };

  // Scroll to bottom of conversation
  const scrollToBottom = () => {
    conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll on new messages
  React.useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  return (
    <div className="min-h-[calc(100vh-16rem)] bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-heading text-primary mb-4">Ayur Bot</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your personal Ayurvedic knowledge assistant. Ask questions about Ayurvedic medicine, explore books, and get insights from your own documents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">Ask Ayur Bot</CardTitle>
                <CardDescription>
                  Choose how you want to interact with Ayur Bot
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="general" className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <span>General</span>
                    </TabsTrigger>
                    <TabsTrigger value="book" className="flex items-center gap-2">
                      <Book className="h-4 w-4" />
                      <span>Books</span>
                    </TabsTrigger>
                    <TabsTrigger value="upload" className="flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      <span>Upload</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="general">
                    <p className="text-sm text-gray-600 mb-4">
                      Ask any question about Ayurvedic principles, herbs, treatments, or practices.
                    </p>
                    <div className="flex items-center gap-4">
                      <Bot className="h-10 w-10 text-primary" />
                      <div>
                        <h3 className="font-medium">General Mode</h3>
                        <p className="text-xs text-gray-500">Access comprehensive Ayurvedic knowledge</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="book">
                    <p className="text-sm text-gray-600 mb-4">
                      Select a book from our collection and ask specific questions about its content.
                    </p>
                    <Select value={selectedBook} onValueChange={setSelectedBook}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a book" />
                      </SelectTrigger>
                      <SelectContent>
                        {ayurvedicBooks.map(book => (
                          <SelectItem key={book.id} value={book.id.toString()}>
                            {book.title} - {book.author}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TabsContent>
                  
                  <TabsContent value="upload">
                    <p className="text-sm text-gray-600 mb-4">
                      Upload an Ayurvedic text or document and ask questions about its content.
                    </p>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50" onClick={handleUploadClick}>
                      <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                      {uploadedFile ? (
                        <div className="py-2">
                          <p className="text-primary font-medium">{uploadedFile.name}</p>
                          <p className="text-xs text-gray-500">{Math.round(uploadedFile.size / 1024)} KB</p>
                          <Button variant="outline" size="sm" className="mt-2" onClick={(e) => {
                            e.stopPropagation();
                            setUploadedFile(null);
                          }}>
                            Change file
                          </Button>
                        </div>
                      ) : (
                        <div className="py-8">
                          <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500 mt-1">PDF (max. 10MB)</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-gray-500">
                  Powered by Google Generative AI. Responses are generated by AI and may not always be accurate.
                </p>
              </CardFooter>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-heading text-primary">Conversation</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto">
                <div className="space-y-4 h-[400px] overflow-y-auto p-2">
                  {conversations.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400">
                      <Search className="h-12 w-12 mb-2" />
                      <p className="text-center">
                        No conversations yet. Start by asking a question.
                      </p>
                    </div>
                  ) : (
                    conversations.map((msg, index) => (
                      <div 
                        key={index} 
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`rounded-lg px-4 py-2 max-w-[80%] ${
                            msg.role === 'user' 
                              ? 'bg-primary text-white' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))
                  )}
                  <div ref={conversationEndRef} />
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <form onSubmit={handleSubmit} className="w-full flex gap-2">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask a question about Ayurveda..."
                    className="flex-grow"
                    disabled={isLoadingResponse}
                  />
                  <Button 
                    type="submit" 
                    disabled={!query.trim() || isLoadingResponse}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isLoadingResponse ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    <span className="ml-2">Send</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}