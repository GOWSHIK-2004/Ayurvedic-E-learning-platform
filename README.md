# Vedic Genie

Vedic Genie is a comprehensive Ayurvedic web application featuring an alphabetical catalog of Ayurvedic books (GenieLab), an AI assistant powered by Google's Gemini API (Ayur Bot), and a community forum for student-doctor interactions.

## Features

- **GenieLab**: Browse Ayurvedic books alphabetically with themed UI
- **Ayur Bot**: AI assistant using Google Gemini API to answer questions about Ayurveda and analyze PDF documents
- **Forum**: Community platform for student-doctor interactions similar to Quora/Reddit
- **Authentication**: User registration and login functionality

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Google Gemini API key (for Ayur Bot functionality)

## Installation and Setup

Follow these step-by-step instructions to set up and run the Vedic Genie application locally:

### 1. Clone or Download the Repository

If you downloaded the project as a ZIP file, extract it to your desired location.

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd vedic-genie
npm install
```

### 3. Database Setup

This application requires a PostgreSQL database. You need to:

1. Install PostgreSQL on your system if you haven't already
2. Create a new PostgreSQL database for the application
3. Create a `.env` file in the root directory with your database connection details:

```
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

Replace `username`, `password`, and `database_name` with your PostgreSQL credentials.

### 4. Push Database Schema

The application uses Drizzle ORM for database management. Run the following command to create the database tables:

```bash
npx drizzle-kit push
```

### 5. Set Up Google Gemini API Key (Required for Ayur Bot)

1. Get a Google Gemini API key from the [Google AI Studio](https://makersuite.google.com/)
2. Add your API key to the `.env` file:

```
VITE_GOOGLE_API_KEY=your_google_gemini_api_key
```

### 6. Start the Application

Run the development server with:

```bash
npm run dev
```

This command starts both the Express backend and Vite frontend server. The application will be available at `http://localhost:5000`.

## Application Structure

- `client/`: React frontend application
  - `src/components/`: UI components
  - `src/pages/`: Application pages
  - `src/hooks/`: Custom React hooks
  - `src/lib/`: Utility functions
- `server/`: Express backend application
  - `routes.ts`: API endpoints
  - `storage.ts`: Data storage interfaces
  - `db.ts`: Database connection
- `shared/`: Shared code between frontend and backend
  - `schema.ts`: Database schema definitions

## Usage

1. **Register/Login**: Create an account to access personalized features
2. **GenieLab**: Browse and search for Ayurvedic books by category, language, or alphabetically
3. **Ayur Bot**: Ask questions about Ayurveda or upload PDFs for analysis
4. **Forum**: Participate in discussions, ask questions, or provide answers

## Troubleshooting

- **Database Connection Issues**: Make sure your PostgreSQL service is running and credentials are correct
- **Ayur Bot Not Responding**: Verify your Google Gemini API key is correct and has sufficient quota
- **Registration Errors**: Check your database connection and ensure all tables are properly created

## License

This project is for educational purposes only.