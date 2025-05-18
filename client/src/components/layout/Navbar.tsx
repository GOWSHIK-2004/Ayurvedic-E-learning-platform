import { Link, useLocation } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a className="text-primary font-heading text-xl font-bold">
                  Vedic Genie
                </a>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <a className={cn(
                  "border-transparent text-darkText hover:text-primary border-b-2 hover:border-primary inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive("/") && "border-primary text-primary border-b-2"
                )}>
                  Home
                </a>
              </Link>
              <Link href="/genielab">
                <a className={cn(
                  "border-transparent text-darkText hover:text-primary border-b-2 hover:border-primary inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive("/genielab") && "border-primary text-primary border-b-2"
                )}>
                  GenieLab
                </a>
              </Link>
              <Link href="/ayurbot">
                <a className={cn(
                  "border-transparent text-darkText hover:text-primary border-b-2 hover:border-primary inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive("/ayurbot") && "border-primary text-primary border-b-2"
                )}>
                  Ayur Bot
                </a>
              </Link>
              <Link href="/forum">
                <a className={cn(
                  "border-transparent text-darkText hover:text-primary border-b-2 hover:border-primary inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive("/forum") && "border-primary text-primary border-b-2"
                )}>
                  Forum
                </a>
              </Link>
              <Link href="/network">
                <a className={cn(
                  "border-transparent text-darkText hover:text-primary border-b-2 hover:border-primary inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive("/network") && "border-primary text-primary border-b-2"
                )}>
                  Network
                </a>
              </Link>
              <Link href="/resources">
                <a className={cn(
                  "border-transparent text-darkText hover:text-primary border-b-2 hover:border-primary inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive("/resources") && "border-primary text-primary border-b-2"
                )}>
                  Resources
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/login">
              <a className="text-primary border border-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md text-sm font-medium">
                Login
              </a>
            </Link>
            <Link href="/register">
              <a className="ml-3 bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
                Register
              </a>
            </Link>
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
          <Link href="/">
            <a className={cn(
              "text-darkText block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50 hover:text-primary",
              isActive("/") && "bg-primary/10 text-primary block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-primary"
            )}>
              Home
            </a>
          </Link>
          <Link href="/genielab">
            <a className={cn(
              "text-darkText block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50 hover:text-primary",
              isActive("/genielab") && "bg-primary/10 text-primary block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-primary"
            )}>
              GenieLab
            </a>
          </Link>
          <Link href="/ayurbot">
            <a className={cn(
              "text-darkText block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50 hover:text-primary",
              isActive("/ayurbot") && "bg-primary/10 text-primary block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-primary"
            )}>
              Ayur Bot
            </a>
          </Link>
          <Link href="/forum">
            <a className={cn(
              "text-darkText block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50 hover:text-primary",
              isActive("/forum") && "bg-primary/10 text-primary block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-primary"
            )}>
              Forum
            </a>
          </Link>
          <Link href="/network">
            <a className={cn(
              "text-darkText block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50 hover:text-primary",
              isActive("/network") && "bg-primary/10 text-primary block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-primary"
            )}>
              Network
            </a>
          </Link>
          <Link href="/resources">
            <a className={cn(
              "text-darkText block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50 hover:text-primary",
              isActive("/resources") && "bg-primary/10 text-primary block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-primary"
            )}>
              Resources
            </a>
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Link href="/login">
              <a className="block text-center mx-4 my-2 px-4 py-2 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white">
                Login
              </a>
            </Link>
            <Link href="/register">
              <a className="block text-center mx-4 my-2 px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90">
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
