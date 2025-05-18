import { useState } from "react";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, UserCircle, Users, PlusCircle, ThumbsUp, MessageCircleMore, Calendar, Eye, BookOpen, Filter, Search } from "lucide-react";

// Mock forum data
const forumCategories = [
  { id: 1, name: "Principles & Philosophy", count: 32, color: "bg-blue-100 text-blue-800" },
  { id: 2, name: "Herbs & Remedies", count: 47, color: "bg-green-100 text-green-800" },
  { id: 3, name: "Clinical Practice", count: 28, color: "bg-orange-100 text-orange-800" },
  { id: 4, name: "Diet & Nutrition", count: 35, color: "bg-emerald-100 text-emerald-800" },
  { id: 5, name: "Research & Studies", count: 23, color: "bg-purple-100 text-purple-800" },
  { id: 6, name: "Student Corner", count: 42, color: "bg-pink-100 text-pink-800" }
];

const forumTopics = [
  {
    id: 1,
    title: "Understanding Tridosha concept in depth",
    author: "Dr. Anand Sharma",
    authorRole: "Ayurvedic Physician",
    category: "Principles & Philosophy",
    replies: 24,
    views: 346,
    lastActive: "2 hours ago",
    isVerified: true
  },
  {
    id: 2,
    title: "Best herbs for Vata imbalance in winter",
    author: "Maya Patel",
    authorRole: "Student",
    category: "Herbs & Remedies",
    replies: 18,
    views: 215,
    lastActive: "6 hours ago",
    isVerified: false
  },
  {
    id: 3,
    title: "Modern applications of Panchakarma therapy",
    author: "Dr. Sarah Johnson",
    authorRole: "Researcher",
    category: "Clinical Practice",
    replies: 31,
    views: 428,
    lastActive: "1 day ago",
    isVerified: true
  },
  {
    id: 4,
    title: "Seasonal food guidelines according to doshas",
    author: "Raj Kumar",
    authorRole: "Nutritionist",
    category: "Diet & Nutrition",
    replies: 27,
    views: 389,
    lastActive: "2 days ago",
    isVerified: true
  },
  {
    id: 5,
    title: "Recent studies on Ashwagandha efficacy",
    author: "Dr. Emily Chen",
    authorRole: "Research Scientist",
    category: "Research & Studies",
    replies: 15,
    views: 267,
    lastActive: "3 days ago",
    isVerified: true
  },
  {
    id: 6,
    title: "Study resources for Ayurvedic diagnosis methods",
    author: "Vikram Singh",
    authorRole: "Student",
    category: "Student Corner",
    replies: 22,
    views: 310,
    lastActive: "5 days ago",
    isVerified: false
  }
];

export default function Forum() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("latest");

  // Filter topics based on search query
  const filteredTopics = searchQuery
    ? forumTopics.filter(
        topic =>
          topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          topic.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          topic.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : forumTopics;

  // Sort topics based on active tab
  const sortedTopics = [...filteredTopics].sort((a, b) => {
    if (activeTab === "latest") {
      return a.lastActive.localeCompare(b.lastActive);
    } else if (activeTab === "popular") {
      return b.views - a.views;
    }
    return 0;
  });

  const handleCreateTopic = () => {
    toast({
      title: "Login Required",
      description: "Please login or register to create a new topic.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-[calc(100vh-16rem)] bg-background">
      <div className="relative bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold font-heading mb-4">
              Ayurvedic Community Forum
            </h1>
            <p className="text-xl mb-6">
              Connect with practitioners, students, and enthusiasts worldwide. Discuss Ayurvedic practices, share knowledge, and get expert advice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100" onClick={handleCreateTopic}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Topic
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Users className="mr-2 h-4 w-4" />
                View Active Users
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/3 h-full bg-opacity-20 pointer-events-none hidden md:block">
          <svg className="absolute bottom-0 right-0 h-full w-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor" opacity="0.1">
            <polygon points="0,0 100,0 100,100" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-heading">Discussion Topics</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="search"
                        placeholder="Search topics..."
                        className="pl-10 pr-4 py-2 w-full md:w-64"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Button variant="ghost" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Tabs defaultValue="latest" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full md:w-60 grid-cols-2">
                    <TabsTrigger value="latest">Latest</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedTopics.length > 0 ? (
                    sortedTopics.map((topic) => (
                      <div key={topic.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={`https://avatars.dicebear.com/api/initials/${topic.author.split(' ').map(n => n[0]).join('')}.svg`} />
                            <AvatarFallback>{topic.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className={getCategoryColor(topic.category)}>
                                {topic.category}
                              </Badge>
                              {topic.isVerified && (
                                <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                  Verified Expert
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-lg font-semibold mb-1 hover:text-primary">
                              <Link href={`/forum/topic/${topic.id}`}>
                                <a>{topic.title}</a>
                              </Link>
                            </h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
                              <div className="flex items-center">
                                <UserCircle className="mr-1 h-4 w-4" />
                                <span>{topic.author}</span>
                                <span className="ml-1 text-xs">({topic.authorRole})</span>
                              </div>
                              <div className="flex items-center">
                                <MessageCircleMore className="mr-1 h-4 w-4" />
                                <span>{topic.replies} replies</span>
                              </div>
                              <div className="flex items-center">
                                <Eye className="mr-1 h-4 w-4" />
                                <span>{topic.views} views</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>{topic.lastActive}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                      <h3 className="text-lg font-medium text-gray-900">No topics found</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Try adjusting your search or filter to find what you're looking for.
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="text-primary hover:text-primary/80 hover:bg-primary/5">
                    Load More Topics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {forumCategories.map((category) => (
                      <div key={category.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                        <span className="font-medium">{category.name}</span>
                        <Badge variant="outline">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4 text-primary">
                    View All Categories
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Active Practitioners</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://avatars.dicebear.com/api/initials/AS.svg" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Dr. Anand Sharma</div>
                        <div className="text-sm text-gray-500">36 topics · 124 replies</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://avatars.dicebear.com/api/initials/SJ.svg" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Dr. Sarah Johnson</div>
                        <div className="text-sm text-gray-500">22 topics · 98 replies</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="https://avatars.dicebear.com/api/initials/RK.svg" />
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Raj Kumar</div>
                        <div className="text-sm text-gray-500">19 topics · 87 replies</div>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 text-primary">
                    View All Practitioners
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Join the Conversation</CardTitle>
                  <CardDescription>
                    Register to participate in discussions and connect with the community.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <span>Ask questions and share knowledge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Connect with practitioners worldwide</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="h-5 w-5 text-primary" />
                      <span>Get expert advice and feedback</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="w-[48%]">
                    <Link href="/login">
                      <a className="w-full h-full flex items-center justify-center">Login</a>
                    </Link>
                  </Button>
                  <Button className="w-[48%] bg-primary hover:bg-primary/90">
                    <Link href="/register">
                      <a className="w-full h-full flex items-center justify-center text-white">Register</a>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get category badge color
function getCategoryColor(category: string) {
  switch (category) {
    case "Principles & Philosophy":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "Herbs & Remedies":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "Clinical Practice":
      return "bg-orange-100 text-orange-800 hover:bg-orange-200";
    case "Diet & Nutrition":
      return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200";
    case "Research & Studies":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200";
    case "Student Corner":
      return "bg-pink-100 text-pink-800 hover:bg-pink-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
}