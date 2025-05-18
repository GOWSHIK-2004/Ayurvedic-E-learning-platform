import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-serverless/migrator';
import * as schema from '../shared/schema';

// Simple script to run migrations
async function main() {
  console.log('Starting database migrations...');
  
  try {
    // Create database client
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql, { schema });
    
    // Run migrations
    await migrate(db, { migrationsFolder: 'drizzle' });
    
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

main();