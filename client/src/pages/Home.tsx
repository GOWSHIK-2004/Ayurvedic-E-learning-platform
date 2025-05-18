import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-16rem)]">
      <div className="relative bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Welcome to Vedic Genie
            </h1>
            <p className="text-xl mb-8">
              Connecting Ayurvedic practitioners, students and enthusiasts worldwide. 
              Explore ancient wisdom in modern practice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/genielab">
                <a className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
                  Explore GenieLab
                </a>
              </Link>
              <Link href="/network">
                <a className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium">
                  Join Network
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/3 h-full bg-opacity-20 pointer-events-none hidden md:block">
          <svg className="absolute bottom-0 right-0 h-full w-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentColor" opacity="0.1">
            <polygon points="0,0 100,0 100,100" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading text-primary mb-4">
            Discover AyurConnect Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our platform designed to empower the global Ayurvedic community with knowledge, 
            connections, and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:col-span-1 lg:col-span-1">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">GenieLab</h3>
            <p className="text-gray-600 mb-4">
              Browse our comprehensive library of Ayurvedic texts, books, and manuscripts from A to Z.
            </p>
            <Link href="/genielab">
              <a className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center">
                Browse Books
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">Ayur Bot</h3>
            <p className="text-gray-600 mb-4">
              Upload Ayurvedic texts, ask questions about specific books, and get intelligent answers powered by Gemini AI.
            </p>
            <Link href="/ayurbot">
              <a className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                Ask Questions
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:col-span-2 lg:col-span-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">Forum</h3>
            <p className="text-gray-600 mb-4">
              Interact with real Ayurvedic doctors and students. Ask questions, share knowledge, and clarify your doubts.
            </p>
            <Link href="/forum">
              <a className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Join Discussions
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:col-span-1 lg:col-span-3">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold font-heading mb-2">Network & Resources</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link href="/network">
                    <a className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                      <span>Practitioner Network</span>
                      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link href="/resources">
                    <a className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                      <span>Ayurvedic Resources</span>
                      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
