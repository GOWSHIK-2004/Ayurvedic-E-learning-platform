import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon, neonConfig } from '@neondatabase/serverless';
import * as schema from '../shared/schema';

// Configure Neon connection
neonConfig.fetchConnectionCache = true;

// Create connection
const sql = neon(process.env.DATABASE_URL!);

// Create the Drizzle ORM client
export const db = drizzle(sql);

// Export schema for use in migrations and other utilities
export { schema };