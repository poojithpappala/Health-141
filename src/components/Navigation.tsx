
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
    setIsOpen(false);
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-200/80 shadow-[0_4px_32px_0_rgba(0,122,117,0.08),0_1.5px_0_0_rgba(0,122,117,0.04)]'
          : 'bg-white/70 backdrop-blur-lg border-b border-slate-100/30 shadow-[0_1.5px_0_0_rgba(0,122,117,0.03)]'
        }`
      }
      style={{
        WebkitBackdropFilter: 'blur(15px)',
        backdropFilter: 'blur(15px)'
      }}
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-24">
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3 text-2xl font-extrabold group select-none">
            <div className="relative w-12 h-12 bg-gradient-to-br from-wellness-teal to-teal-400 rounded-2xl flex items-center justify-center shadow-xl ring-2 ring-white/70 pulse-glow hover:scale-105 transition-transform duration-200">
              <Heart className="w-7 h-7 text-white drop-shadow-lg" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 floating-animation" />
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-tr from-yellow-400/80 to-teal-400/80 rounded-full blur-[4px] opacity-80"></span>
            </div>
            <span className="text-gradient text-3xl font-extrabold tracking-tight drop-shadow-[0_3px_12px_rgba(0,122,117,0.08)]">
              WellnessPortal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  relative px-5 py-2 text-base font-semibold rounded-xl transition-all duration-300 
                  group overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-wellness-teal/60
                  ${isActive(item.path)
                    ? 'text-white bg-gradient-to-r from-teal-500 to-wellness-teal shadow-lg'
                    : 'text-wellness-charcoal hover:bg-gradient-to-r hover:from-teal-100 hover:to-white hover:text-wellness-teal'
                  }
                `}
              >
                <span className="relative z-10">{item.name}</span>
                {!isActive(item.path) && (
                  <span className="
                    absolute inset-0 transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 origin-left 
                    bg-gradient-to-r from-wellness-teal/5 via-teal-400/10 to-white/0 pointer-events-none
                  " />
                )}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-teal-400 via-wellness-teal to-teal-600 hover:from-teal-600 hover:via-wellness-teal hover:to-teal-400
                 text-white font-semibold px-6 py-2 rounded-xl btn-hover shadow-xl transition-all duration-300 border-0 focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <Link to="/patient-intake" className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5" />
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
              className="w-12 h-12 rounded-xl hover:bg-slate-100/70 focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-400
            ${isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none select-none'}
          `}
        >
          <div className={`border-t bg-gradient-to-br from-white/95 to-slate-50/90 backdrop-blur-2xl rounded-b-3xl shadow-2xl border-x border-b border-teal-100/40
            transition-all duration-400 ${isOpen ? 'animate-fade-in' : ''}`}>
            <div className="px-6 pt-6 pb-8 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    block px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300
                    outline-none focus-visible:ring-2 focus-visible:ring-teal-400
                    ${isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-teal-500 to-wellness-teal shadow-lg'
                      : 'text-wellness-charcoal hover:bg-gradient-to-r hover:from-teal-100 hover:to-white hover:text-wellness-teal'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-teal-400 via-wellness-teal to-teal-600 hover:from-teal-600 hover:via-wellness-teal hover:to-teal-400
                  text-white font-semibold py-4 rounded-xl btn-hover shadow-xl mt-4 border-0 transition-all duration-300"
              >
                <Link to="/patient-intake" className="flex items-center gap-2 justify-center" onClick={() => setIsOpen(false)}>
                  <Stethoscope className="w-5 h-5" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
