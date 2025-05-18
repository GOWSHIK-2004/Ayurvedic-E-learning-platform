import { Link } from "wouter";

export default function Resources() {
  return (
    <div className="min-h-[calc(100vh-16rem)] bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-primary mb-4">Ayurvedic Resources</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of articles, recipes, courses, and events focused on Ayurvedic wisdom and practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Articles</h3>
              <p className="text-gray-600 mb-4">
                Read informative articles about Ayurvedic principles, practices, and research.
              </p>
              <Link href="/articles">
                <a className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                  Read Articles
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Recipes</h3>
              <p className="text-gray-600 mb-4">
                Discover Ayurvedic recipes for promoting balance and wellness in your daily life.
              </p>
              <Link href="/recipes">
                <a className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center">
                  View Recipes
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">Courses</h3>
              <p className="text-gray-600 mb-4">
                Learn Ayurvedic practices through structured online courses with expert guidance.
              </p>
              <Link href="/courses">
                <a className="text-accent hover:text-accent/80 font-medium inline-flex items-center">
                  Explore Courses
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading text-primary mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're continuously adding new resources to help you on your Ayurvedic journey. Check back regularly for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
