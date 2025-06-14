
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react'; // Removed Heart, using Stethoscope
import { Button } from '@/components/ui/button';
import { SiteLogo } from './SiteLogo'; // Assuming SiteLogo will be created

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50); // Increased scroll threshold
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Specialists', path: '/doctors' }, // Renamed for clarity
    { name: 'Contact', path: '/contact' },
    // { name: 'Doctor Portal', path: '/doctor' }, // Can be re-added if needed
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out
        ${scrolled
          ? 'bg-background/85 backdrop-blur-xl shadow-md border-b border-border/70'
          : 'bg-transparent border-b border-transparent py-2' // Transparent when at top
        }
      `}
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          <SiteLogo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                tabIndex={0}
                className={cn(
                  `relative px-4 py-2.5 text-[15px] font-medium rounded-lg group transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
                  isActive(item.path)
                    ? 'text-primary font-semibold' // Simpler active state
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/10'
                )}
              >
                <span className="relative z-10">{item.name}</span>
                 {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full transition-all duration-300"></span>
                )}
              </Link>
            ))}
            <Button
              asChild
              size="default" // Using new default button size
              className="ml-4" // Adjusted margin
            >
              <Link to="/patient-intake">
                <Stethoscope className="mr-2 w-5 h-5" /> {/* Icon size consistent with button defaults */}
                Book Appointment
              </Link>
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-accent focus-visible:ring-ring"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            `lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-background shadow-xl rounded-b-lg border-x border-b border-border/70`,
            isOpen ? 'max-h-[500px] opacity-100 py-3' : 'max-h-0 opacity-0 pointer-events-none select-none'
          )}
        >
          <div className={`px-5 pt-3 pb-5 space-y-2.5`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  `block px-4 py-3.5 text-base font-medium rounded-lg transition-all duration-200
                  outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
                  isActive(item.path)
                    ? 'brand-gradient-bg text-primary-foreground shadow-sm'
                    : 'text-foreground hover:bg-accent hover:text-primary'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              size="lg"
              className="w-full mt-5"
            >
              <Link to="/patient-intake" onClick={() => setIsOpen(false)}>
                <Stethoscope className="mr-2 w-5 h-5" />
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

