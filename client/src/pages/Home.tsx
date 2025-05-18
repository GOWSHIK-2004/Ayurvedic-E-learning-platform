import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-16rem)]">
      <div className="relative bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Welcome to AyurConnect Network
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">Practitioner Network</h3>
            <p className="text-gray-600 mb-4">
              Connect with qualified Ayurvedic practitioners, researchers, and enthusiasts globally.
            </p>
            <Link href="/network">
              <a className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                Explore Network
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">GenieLab</h3>
            <p className="text-gray-600 mb-4">
              Access our comprehensive library of Ayurvedic texts, books, and manuscripts from A to Z.
            </p>
            <Link href="/genielab">
              <a className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center">
                Browse Collection
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">Resources</h3>
            <p className="text-gray-600 mb-4">
              Discover articles, recipes, courses, and events focused on Ayurvedic wisdom and practices.
            </p>
            <Link href="/resources">
              <a className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                Explore Resources
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
  );
}
