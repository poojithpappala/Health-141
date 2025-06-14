
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope, ChevronDown } from 'lucide-react'; // Added ChevronDown
import { Button } from '@/components/ui/button';
import { SiteLogo } from './SiteLogo';
import { cn } from '@/lib/utils';
// Assuming a dropdown component exists or will be created. For now, basic structure.
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const closeMenu = () => {
      window.scrollTo(0, 0);
      setIsOpen(false);
    }
    closeMenu(); // Initial call
    // No, this should not be in router.listen, it should be on location.pathname change
  }, [location.pathname]);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20); // Reduced scroll threshold
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      // Example for a dropdown menu, implement with actual Dropdown components if needed
      // subItems: [ 
      //   { name: 'All Services', path: '/services' },
      //   { name: 'Premium Consultation', path: '/services/premium-consultation' },
      //   { name: 'Wellness Programs', path: '/services/wellness-programs' },
      // ]
    },
    { name: 'Specialists', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));


  return (
    <nav
      className={cn(
        `fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out`,
        scrolled || isOpen 
          ? 'bg-background/90 backdrop-blur-lg shadow-lg border-b border-border/50' 
          : 'bg-transparent border-b border-transparent py-3' // Increased py for non-scrolled state
      )}
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-[72px]"> {/* Consistent height */}
          <SiteLogo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => (
              // Basic item rendering, replace with Dropdown for items with subItems
              <Link
                key={item.name}
                to={item.path}
                tabIndex={0}
                className={cn(
                  `relative px-3.5 py-2.5 text-[15px] font-medium rounded-lg group transition-all duration-200 ease-out
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`,
                  isActive(item.path)
                    ? 'text-primary font-semibold'
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                )}
              >
                <span className="relative z-10 flex items-center">
                  {item.name}
                  {/* {item.subItems && <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100" />} */}
                </span>
                 {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-3/4"></span>
                )}
              </Link>
            ))}
            <Button
              variant="premium"
              asChild
              size="default"
              className="ml-5" // Increased margin
            >
              <Link to="/patient-intake">
                <Stethoscope className="mr-2 w-5 h-5" />
                Book Now
              </Link>
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-accent focus-visible:ring-ring rounded-full" // rounded-full for icon button
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            `lg:hidden overflow-y-auto transition-all duration-300 ease-in-out bg-background shadow-xl rounded-b-xl border-x border-b border-border/50`, // rounded-b-xl
            isOpen ? 'max-h-[calc(100vh-72px)] opacity-100 py-4' : 'max-h-0 opacity-0 pointer-events-none'
          )}
        >
          <div className={`px-5 pt-2 pb-5 space-y-2`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  `block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`,
                  isActive(item.path)
                    ? 'brand-gradient-bg text-primary-foreground shadow-sm'
                    : 'text-foreground hover:bg-accent hover:text-primary'
                )}
                onClick={() => setIsOpen(false)} // Close on click
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="premium"
              asChild
              size="lg"
              className="w-full mt-6" // Increased margin
            >
              <Link to="/patient-intake" onClick={() => setIsOpen(false)}>
                <Stethoscope className="mr-2 w-5 h-5" />
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
