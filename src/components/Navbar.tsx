
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Leaf, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-eco-green animate-pulse-gentle" />
            <Link to="/" className="font-bold text-xl flex items-center">
              <span className="hidden sm:inline mr-1">Langata</span>
              <span className="text-gradient">LRIP</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-eco-green transition-colors">Home</Link>
            <Link to="/map" className="font-medium hover:text-eco-green transition-colors">Impact Map</Link>
            <Link to="/dashboard" className="font-medium hover:text-eco-green transition-colors">Dashboard</Link>
            <Link to="/marketplace" className="font-medium hover:text-eco-green transition-colors">Marketplace</Link>
            <Link to="/community" className="font-medium hover:text-eco-green transition-colors">Community</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button variant="default" size="sm" className="bg-eco-green hover:bg-eco-green-dark">
              Sign Up
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-eco-green hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link to="/" className="block font-medium hover:text-eco-green transition-colors py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/map" className="block font-medium hover:text-eco-green transition-colors py-2" onClick={toggleMenu}>Impact Map</Link>
            <Link to="/dashboard" className="block font-medium hover:text-eco-green transition-colors py-2" onClick={toggleMenu}>Dashboard</Link>
            <Link to="/marketplace" className="block font-medium hover:text-eco-green transition-colors py-2" onClick={toggleMenu}>Marketplace</Link>
            <Link to="/community" className="block font-medium hover:text-eco-green transition-colors py-2" onClick={toggleMenu}>Community</Link>
            
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" onClick={toggleMenu}>Login</Button>
              <Button variant="default" className="bg-eco-green hover:bg-eco-green-dark" onClick={toggleMenu}>Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
