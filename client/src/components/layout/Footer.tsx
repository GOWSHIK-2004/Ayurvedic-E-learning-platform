import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-darkText text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">AyurConnect</h3>
            <p className="text-white/80 mb-4">Connecting practitioners, students, and enthusiasts of Ayurvedic medicine worldwide.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-white/80 hover:text-white">Home</a></Link></li>
              <li><Link href="/about"><a className="text-white/80 hover:text-white">About Us</a></Link></li>
              <li><Link href="/network"><a className="text-white/80 hover:text-white">Practitioner Network</a></Link></li>
              <li><Link href="/genielab"><a className="text-white/80 hover:text-white">GenieLab</a></Link></li>
              <li><Link href="/resources"><a className="text-white/80 hover:text-white">Resources</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/articles"><a className="text-white/80 hover:text-white">Articles</a></Link></li>
              <li><Link href="/recipes"><a className="text-white/80 hover:text-white">Ayurvedic Recipes</a></Link></li>
              <li><Link href="/courses"><a className="text-white/80 hover:text-white">Online Courses</a></Link></li>
              <li><Link href="/events"><a className="text-white/80 hover:text-white">Events</a></Link></li>
              <li><Link href="/faq"><a className="text-white/80 hover:text-white">FAQ</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@ayurconnect.com" className="text-white/80 hover:text-white">info@ayurconnect.com</a>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/80">123 Wellness Street, Ayurveda City</span>
              </li>
            </ul>
            <form className="mt-4">
              <label className="block text-sm mb-2">Subscribe to our newsletter</label>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-md w-full text-darkText focus:outline-none" />
                <button type="submit" className="bg-primary px-3 py-2 rounded-r-md hover:bg-primary/90">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">&copy; {new Date().getFullYear()} AyurConnect Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
