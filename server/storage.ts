import { books, users, type User, type InsertUser, type Book, type InsertBook } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllBooks(): Promise<Book[]>;
  getBookById(id: number): Promise<Book | undefined>;
  searchBooks(query: string): Promise<Book[]>;
}

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
    this.createUser({ username: "test", password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8" }); // password: password
    
    // Load initial books
    this.loadInitialBooks();
  }

  private loadInitialBooks() {
    const initialBooks: InsertBook[] = [
      {
        title: "Ashtanga Hridayam",
        author: "Vagbhata",
        year: 600,
        description: "A core text of Ayurveda covering eight branches of medicine, including internal medicine, surgery, and toxicology.",
        language: "Sanskrit",
        category: "Ancient Text",
        imageUrl: "https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        popularity: 96
      },
      {
        title: "Charaka Samhita",
        author: "Charaka",
        year: -300,
        description: "One of the foundational texts of Ayurveda, focusing on internal medicine (Kayachikitsa).",
        language: "Sanskrit",
        category: "Ancient Text",
        imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        popularity: 98
      },
      {
        title: "Sushruta Samhita",
        author: "Sushruta",
        year: -600,
        description: "One of the foundational texts of Ayurveda with a focus on surgery and anatomical knowledge.",
        language: "Sanskrit",
        category: "Ancient Text",
        imageUrl: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        popularity: 97
      }
    ];

    initialBooks.forEach(book => {
      const id = this.currentBookId++;
      const newBook: Book = { ...book, id };
      this.books.set(id, newBook);
    });
  }

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
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

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
}

export const storage = new MemStorage();
