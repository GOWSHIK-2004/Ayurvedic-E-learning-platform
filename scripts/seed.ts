import { db } from '../server/db';
import { books, forumCategories, users } from '../shared/schema';
import { ayurvedicBooks } from '../client/src/data/books';
import * as crypto from 'crypto';

// Hash function for passwords
function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

async function seed() {
  console.log('Starting database seed...');
  
  try {
    // Seed initial admin user
    const adminUser = await db.insert(users).values({
      username: 'admin',
      password: hashPassword('password'),
      email: 'admin@vedicgenie.com',
      fullName: 'Admin User',
      bio: 'System administrator',
      role: 'admin'
    }).returning();
    
    console.log(`Created admin user: ${adminUser[0].username}`);
    
    // Seed test user
    const testUser = await db.insert(users).values({
      username: 'test',
      password: hashPassword('password'),
      email: 'test@vedicgenie.com',
      fullName: 'Test User',
      bio: 'Test account for demonstration',
      role: 'user'
    }).returning();
    
    console.log(`Created test user: ${testUser[0].username}`);
    
    // Seed books
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
    console.log(`Inserted ${booksToInsert.length} books`);
    
    // Seed forum categories
    const categories = [
      {
        name: 'Principles & Philosophy',
        description: 'Discussions on fundamental Ayurvedic principles and philosophy',
        color: 'bg-blue-100 text-blue-800' 
      },
      {
        name: 'Herbs & Remedies',
        description: 'Information about Ayurvedic herbs, preparations, and natural remedies',
        color: 'bg-green-100 text-green-800'
      },
      {
        name: 'Clinical Practice',
        description: 'For practitioners to discuss clinical applications and case studies',
        color: 'bg-orange-100 text-orange-800'
      },
      {
        name: 'Diet & Nutrition',
        description: 'Discussions about Ayurvedic dietary principles and nutritional practices',
        color: 'bg-emerald-100 text-emerald-800'
      },
      {
        name: 'Research & Studies',
        description: 'Share and discuss recent research and scientific studies',
        color: 'bg-purple-100 text-purple-800'
      },
      {
        name: 'Student Corner',
        description: 'Space for students to ask questions and learn from practitioners',
        color: 'bg-pink-100 text-pink-800'
      }
    ];
    
    await db.insert(forumCategories).values(categories);
    console.log(`Inserted ${categories.length} forum categories`);
    
    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();