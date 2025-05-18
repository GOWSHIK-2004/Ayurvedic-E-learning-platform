import { 
  books, 
  users, 
  forumCategories,
  forumTopics,
  forumReplies,
  documents,
  chatSessions,
  chatMessages,
  type User, 
  type InsertUser, 
  type Book, 
  type InsertBook,
  type ForumCategory,
  type InsertForumCategory,
  type ForumTopic,
  type InsertForumTopic,
  type ForumReply,
  type InsertForumReply,
  type Document,
  type InsertDocument,
  type ChatSession,
  type InsertChatSession,
  type ChatMessage,
  type InsertChatMessage
} from "@shared/schema";
import { db } from "./db";
import { eq, like, or, desc } from "drizzle-orm";
import { ayurvedicBooks } from "../client/src/data/books";

// Modify the interface with any CRUD methods you might need
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Book methods
  getAllBooks(): Promise<Book[]>;
  getBookById(id: number): Promise<Book | undefined>;
  searchBooks(query: string): Promise<Book[]>;
  
  // Forum methods
  getAllForumCategories(): Promise<ForumCategory[]>;
  getForumCategoryById(id: number): Promise<ForumCategory | undefined>;
  createForumCategory(category: InsertForumCategory): Promise<ForumCategory>;
  
  getForumTopicsByCategory(categoryId: number): Promise<ForumTopic[]>;
  getForumTopicById(id: number): Promise<ForumTopic | undefined>;
  createForumTopic(topic: InsertForumTopic): Promise<ForumTopic>;
  
  getForumRepliesByTopic(topicId: number): Promise<ForumReply[]>;
  createForumReply(reply: InsertForumReply): Promise<ForumReply>;
  
  // Document methods
  getUserDocuments(userId: number): Promise<Document[]>;
  getDocumentById(id: number): Promise<Document | undefined>;
  createDocument(document: InsertDocument): Promise<Document>;
  
  // Chat methods
  getUserChatSessions(userId: number): Promise<ChatSession[]>;
  getChatSessionById(id: number): Promise<ChatSession | undefined>;
  createChatSession(session: InsertChatSession): Promise<ChatSession>;
  
  getChatMessagesBySession(sessionId: number): Promise<ChatMessage[]>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
}

export class PostgresStorage implements IStorage {
  
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Book methods
  async getAllBooks(): Promise<Book[]> {
    const result = await db.select().from(books);
    if (result.length === 0) {
      // If no books in database, seed data and try again
      await this.seedInitialBooks();
      return db.select().from(books);
    }
    return result;
  }

  async getBookById(id: number): Promise<Book | undefined> {
    const result = await db.select().from(books).where(eq(books.id, id));
    return result[0];
  }

  async searchBooks(query: string): Promise<Book[]> {
    const lowerQuery = query.toLowerCase();
    const result = await db.select().from(books).where(
      or(
        like(books.title, `%${lowerQuery}%`),
        like(books.author, `%${lowerQuery}%`),
        like(books.description, `%${lowerQuery}%`)
      )
    );
    return result;
  }

  async seedInitialBooks() {
    // Convert client-side books to database format
    const booksToInsert = ayurvedicBooks.map(book => ({
      title: book.title,
      author: book.author,
      year: book.year,
      description: book.description,
      language: book.language,
      category: book.category,
      imageUrl: book.imageUrl,
      popularity: book.popularity
    }));
    
    await db.insert(books).values(booksToInsert);
  }

  // Forum methods
  async getAllForumCategories(): Promise<ForumCategory[]> {
    return db.select().from(forumCategories);
  }

  async getForumCategoryById(id: number): Promise<ForumCategory | undefined> {
    const result = await db.select().from(forumCategories).where(eq(forumCategories.id, id));
    return result[0];
  }

  async createForumCategory(category: InsertForumCategory): Promise<ForumCategory> {
    const result = await db.insert(forumCategories).values(category).returning();
    return result[0];
  }

  async getForumTopicsByCategory(categoryId: number): Promise<ForumTopic[]> {
    return db.select()
      .from(forumTopics)
      .where(eq(forumTopics.categoryId, categoryId))
      .orderBy(desc(forumTopics.createdAt));
  }

  async getForumTopicById(id: number): Promise<ForumTopic | undefined> {
    const result = await db.select().from(forumTopics).where(eq(forumTopics.id, id));
    return result[0];
  }

  async createForumTopic(topic: InsertForumTopic): Promise<ForumTopic> {
    const result = await db.insert(forumTopics).values(topic).returning();
    return result[0];
  }

  async getForumRepliesByTopic(topicId: number): Promise<ForumReply[]> {
    return db.select()
      .from(forumReplies)
      .where(eq(forumReplies.topicId, topicId))
      .orderBy(desc(forumReplies.createdAt));
  }

  async createForumReply(reply: InsertForumReply): Promise<ForumReply> {
    const result = await db.insert(forumReplies).values(reply).returning();
    return result[0];
  }

  // Document methods
  async getUserDocuments(userId: number): Promise<Document[]> {
    return db.select()
      .from(documents)
      .where(eq(documents.userId, userId))
      .orderBy(desc(documents.createdAt));
  }

  async getDocumentById(id: number): Promise<Document | undefined> {
    const result = await db.select().from(documents).where(eq(documents.id, id));
    return result[0];
  }

  async createDocument(document: InsertDocument): Promise<Document> {
    const result = await db.insert(documents).values(document).returning();
    return result[0];
  }

  // Chat methods
  async getUserChatSessions(userId: number): Promise<ChatSession[]> {
    return db.select()
      .from(chatSessions)
      .where(eq(chatSessions.userId, userId))
      .orderBy(desc(chatSessions.createdAt));
  }

  async getChatSessionById(id: number): Promise<ChatSession | undefined> {
    const result = await db.select().from(chatSessions).where(eq(chatSessions.id, id));
    return result[0];
  }

  async createChatSession(session: InsertChatSession): Promise<ChatSession> {
    const result = await db.insert(chatSessions).values(session).returning();
    return result[0];
  }

  async getChatMessagesBySession(sessionId: number): Promise<ChatMessage[]> {
    return db.select()
      .from(chatMessages)
      .where(eq(chatMessages.sessionId, sessionId))
      .orderBy(desc(chatMessages.createdAt));
  }

  async createChatMessage(message: InsertChatMessage): Promise<ChatMessage> {
    const result = await db.insert(chatMessages).values(message).returning();
    return result[0];
  }
}

// For fallback in case of database connection issues
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private books: Map<number, Book>;
  private currentUserId: number;
  private currentBookId: number;

  constructor() {
    this.users = new Map();
    this.books = new Map();
    this.currentUserId = 1;
    this.currentBookId = 1;
    
    // Add some initial users for testing
    this.createUser({ 
      username: "test", 
      password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8" // password: password
    }); 
    
    // Load initial books
    this.loadInitialBooks();
  }

  private loadInitialBooks() {
    const now = new Date();

    ayurvedicBooks.forEach(book => {
      const id = this.currentBookId++;
      const newBook = { 
        ...book, 
        id,
        createdAt: now
      };
      this.books.set(id, newBook as Book);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date();
    const user = { 
      ...insertUser, 
      id,
      email: null,
      fullName: null,
      bio: null,
      avatar: null,
      role: "user",
      createdAt: now
    };
    this.users.set(id, user as User);
    return user as User;
  }

  // Book methods
  async getAllBooks(): Promise<Book[]> {
    return Array.from(this.books.values());
  }

  async getBookById(id: number): Promise<Book | undefined> {
    return this.books.get(id);
  }

  async searchBooks(query: string): Promise<Book[]> {
    query = query.toLowerCase();
    return Array.from(this.books.values()).filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query)
    );
  }

  // Forum methods - Minimal implementations for in-memory fallback
  async getAllForumCategories(): Promise<ForumCategory[]> {
    return [];
  }

  async getForumCategoryById(): Promise<ForumCategory | undefined> {
    return undefined;
  }

  async createForumCategory(category: InsertForumCategory): Promise<ForumCategory> {
    return { ...category, id: 1, createdAt: new Date() } as ForumCategory;
  }

  async getForumTopicsByCategory(): Promise<ForumTopic[]> {
    return [];
  }

  async getForumTopicById(): Promise<ForumTopic | undefined> {
    return undefined;
  }

  async createForumTopic(topic: InsertForumTopic): Promise<ForumTopic> {
    return { ...topic, id: 1, createdAt: new Date(), updatedAt: new Date() } as ForumTopic;
  }

  async getForumRepliesByTopic(): Promise<ForumReply[]> {
    return [];
  }

  async createForumReply(reply: InsertForumReply): Promise<ForumReply> {
    return { ...reply, id: 1, createdAt: new Date(), updatedAt: new Date() } as ForumReply;
  }

  // Document methods - Minimal implementations for in-memory fallback
  async getUserDocuments(): Promise<Document[]> {
    return [];
  }

  async getDocumentById(): Promise<Document | undefined> {
    return undefined;
  }

  async createDocument(document: InsertDocument): Promise<Document> {
    return { ...document, id: 1, createdAt: new Date() } as Document;
  }

  // Chat methods - Minimal implementations for in-memory fallback
  async getUserChatSessions(): Promise<ChatSession[]> {
    return [];
  }

  async getChatSessionById(): Promise<ChatSession | undefined> {
    return undefined;
  }

  async createChatSession(session: InsertChatSession): Promise<ChatSession> {
    return { ...session, id: 1, createdAt: new Date() } as ChatSession;
  }

  async getChatMessagesBySession(): Promise<ChatMessage[]> {
    return [];
  }

  async createChatMessage(message: InsertChatMessage): Promise<ChatMessage> {
    return { ...message, id: 1, createdAt: new Date() } as ChatMessage;
  }
}

// Use PostgreSQL storage by default, with fallback to memory storage
let storage: IStorage;

try {
  storage = new PostgresStorage();
  console.log("Using PostgreSQL storage");
} catch (error) {
  console.error("Failed to initialize PostgreSQL storage, falling back to memory storage", error);
  storage = new MemStorage();
}

export { storage };
