
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Book Appointment', path: '/patient-intake' },
    { name: 'Doctor Portal', path: '/doctor' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-wellness-teal">
            <div className="w-10 h-10 bg-gradient-to-br from-wellness-teal to-teal-400 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-wellness-teal to-teal-600 bg-clip-text text-transparent">
              WellnessPortal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-white bg-wellness-teal shadow-lg'
                    : 'text-wellness-charcoal hover:text-wellness-teal hover:bg-teal-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-wellness-teal hover:bg-wellness-teal/90 btn-hover rounded-full px-6"
            >
              <Link to="/patient-intake">
                <Stethoscope className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white bg-wellness-teal shadow-lg'
                      : 'text-wellness-charcoal hover:text-wellness-teal hover:bg-teal-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-wellness-teal hover:bg-wellness-teal/90 btn-hover rounded-xl mt-4"
              >
                <Link to="/patient-intake" onClick={() => setIsOpen(false)}>
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
