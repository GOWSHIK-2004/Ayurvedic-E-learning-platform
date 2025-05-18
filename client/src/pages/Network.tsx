import { Link } from "wouter";

export default function Network() {
  return (
    <div className="min-h-[calc(100vh-16rem)] bg-background">
      <div className="relative bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ayurvedic Practitioner Network
            </h1>
            <p className="text-xl mb-8">
              Connect with qualified Ayurvedic practitioners, researchers, and enthusiasts from around the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/login">
                <a className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
                  Join the Network
                </a>
              </Link>
              <Link href="/practitioners">
                <a className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium">
                  Find Practitioners
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-heading text-primary mb-4">
            Why Join Our Network?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Become part of a community dedicated to preserving and advancing Ayurvedic knowledge and practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">Connect</h3>
            <p className="text-gray-600">
              Network with like-minded practitioners and enthusiasts from across the globe. Share knowledge and build relationships.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">Collaborate</h3>
            <p className="text-gray-600">
              Find opportunities for research, events, and projects with other professionals in the Ayurvedic community.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold font-heading mb-2">Gain Visibility</h3>
            <p className="text-gray-600">
              Showcase your expertise and services to a dedicated audience interested in Ayurvedic health and wellness.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/login">
            <a className="bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-md inline-block">
              Create Your Account
            </a>
          </Link>
          <p className="mt-4 text-gray-600">Already have an account? <Link href="/login"><a className="text-primary hover:text-primary/80">Sign in</a></Link></p>
        </div>
      </div>
    </div>
  );
}
