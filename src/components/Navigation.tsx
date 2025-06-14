
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Stethoscope, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
    { name: 'Doctor Portal', path: '/doctor' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/60 premium-shadow' 
        : 'bg-white/90 backdrop-blur-md border-b border-slate-100/40'
    }`}>
      <div className="section-container">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-4 text-2xl font-bold text-wellness-teal group">
            <div className="relative w-12 h-12 teal-gradient rounded-2xl flex items-center justify-center floating-animation">
              <Heart className="w-7 h-7 text-white" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400" />
            </div>
            <span className="text-gradient text-3xl font-extrabold tracking-tight">
              WellnessPortal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-5 py-3 text-base font-semibold rounded-2xl transition-all duration-300 group ${
                  isActive(item.path)
                    ? 'text-white bg-wellness-teal premium-shadow'
                    : 'text-wellness-charcoal hover:text-wellness-teal hover:bg-slate-50'
                }`}
              >
                {item.name}
                {!isActive(item.path) && (
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-wellness-teal/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </Link>
            ))}
            <Button
              asChild
              className="bg-wellness-teal hover:bg-wellness-teal/90 text-white font-semibold px-8 py-3 rounded-2xl btn-hover premium-shadow border-0"
            >
              <Link to="/patient-intake">
                <Stethoscope className="w-5 h-5 mr-2" />
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
              className="w-12 h-12 rounded-2xl hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur-xl rounded-b-3xl premium-shadow border-x border-b border-slate-200/60">
            <div className="px-6 pt-6 pb-8 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-6 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-white bg-wellness-teal premium-shadow'
                      : 'text-wellness-charcoal hover:text-wellness-teal hover:bg-slate-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-wellness-teal hover:bg-wellness-teal/90 text-white font-semibold py-4 rounded-2xl btn-hover premium-shadow mt-6"
              >
                <Link to="/patient-intake" onClick={() => setIsOpen(false)}>
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Book Appointment
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
