
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Globe, Mail, MapPin, Recycle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-eco-green" />
              <span className="font-bold text-xl">LRIP</span>
            </div>
            <p className="text-muted-foreground">
              Empowering communities through regenerative innovation and sustainable practices.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">
                <Recycle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/map" className="text-muted-foreground hover:text-eco-green transition-colors">Impact Map</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-eco-green transition-colors">Eco Dashboard</Link></li>
              <li><Link to="/marketplace" className="text-muted-foreground hover:text-eco-green transition-colors">Marketplace</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-eco-green transition-colors">Community Hub</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Partnerships</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-eco-green transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Langata Regenerative Innovation Platform. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-eco-green transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
