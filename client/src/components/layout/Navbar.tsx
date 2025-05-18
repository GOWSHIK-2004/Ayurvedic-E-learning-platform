import { useLocation } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { queryClient } from "@/lib/queryClient";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };
  
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      // Clear user data from cache
      queryClient.invalidateQueries({ queryKey: ["/api/me"] });
      
      // Redirect to home page
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const NavLink = ({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) => (
    <a
      href={href}
      className={cn(
        "border-transparent text-darkText hover:text-primary border-b-2 hover:border-primary inline-flex items-center px-1 pt-1 text-sm font-medium",
        active && "border-primary text-primary border-b-2"
      )}
    >
      {children}
    </a>
  );

  const MobileNavLink = ({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) => (
    <a
      href={href}
      className={cn(
        "text-darkText block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50 hover:text-primary",
        active && "bg-primary/10 text-primary block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-primary"
      )}
    >
      {children}
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-primary font-heading text-xl font-bold">
                Vedic Genie
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/" active={isActive("/")}>Home</NavLink>
              <NavLink href="/genielab" active={isActive("/genielab")}>GenieLab</NavLink>
              <NavLink href="/ayurbot" active={isActive("/ayurbot")}>Ayur Bot</NavLink>
              <NavLink href="/forum" active={isActive("/forum")}>Forum</NavLink>
              <NavLink href="/network" active={isActive("/network")}>Network</NavLink>
              <NavLink href="/resources" active={isActive("/resources")}>Resources</NavLink>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isAuthenticated && user ? (
              <div className="flex items-center">
                <span className="text-darkText mr-2">{user?.username || 'User'}</span>
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <button 
                  onClick={handleLogout}
                  className="ml-4 text-primary border border-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <a href="/login" className="text-primary border border-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                  Login
                </a>
                <a href="/register" className="ml-3 bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                  Register
                </a>
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              type="button" 
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-darkText hover:text-primary hover:bg-gray-100 focus:outline-none" 
              aria-controls="mobile-menu" 
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("sm:hidden", !mobileMenuOpen && "hidden")} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <MobileNavLink href="/" active={isActive("/")}>Home</MobileNavLink>
          <MobileNavLink href="/genielab" active={isActive("/genielab")}>GenieLab</MobileNavLink>
          <MobileNavLink href="/ayurbot" active={isActive("/ayurbot")}>Ayur Bot</MobileNavLink>
          <MobileNavLink href="/forum" active={isActive("/forum")}>Forum</MobileNavLink>
          <MobileNavLink href="/network" active={isActive("/network")}>Network</MobileNavLink>
          <MobileNavLink href="/resources" active={isActive("/resources")}>Resources</MobileNavLink>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            {isAuthenticated && user ? (
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <span className="text-darkText mr-2">{user?.username || 'User'}</span>
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="block text-center mx-4 my-2 px-4 py-2 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <a href="/login" className="block text-center mx-4 my-2 px-4 py-2 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white">
                  Login
                </a>
                <a href="/register" className="block text-center mx-4 my-2 px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90">
                  Register
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
