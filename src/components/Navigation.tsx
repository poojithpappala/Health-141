import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false); // Close mobile menu on navigation
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 w-full z-[80] transition-all duration-300
        ${scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-md border-b border-slate-200/60'
          : 'bg-white/60 backdrop-blur-md border-b border-transparent'
        }
      `}
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3 group select-none">
            <div className="relative w-12 h-12 bg-gradient-to-br from-wellness-teal to-teal-400 rounded-lg flex items-center justify-center shadow-sm transition-all duration-200 group-hover:shadow-md">
              <Heart className="w-6 h-6 text-white drop-shadow-sm icon-premium" />
            </div>
            <span className="text-gradient font-bold text-2xl tracking-tight drop-shadow-[0_2px_8px_rgba(0,122,117,0.1)] pt-0.5">
              WellnessPortal
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                tabIndex={0}
                className={
                  `relative px-3.5 py-2 text-[15px] font-medium rounded-lg group transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wellness-teal/60 focus-visible:ring-offset-2`
                  +
                  (isActive(item.path)
                    ? ' text-white bg-gradient-to-r from-wellness-teal to-teal-500 shadow-sm'
                    : ' text-slate-700 hover:bg-teal-50/70 hover:text-wellness-teal'
                  )
                }
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="ml-2 bg-gradient-to-r from-teal-500 via-wellness-teal to-teal-600 hover:from-teal-600 hover:via-wellness-teal hover:to-teal-500
                 text-white font-semibold px-4 h-9 rounded-lg btn-hover premium-shadow border-0 focus-visible:ring-2 focus-visible:ring-teal-400/80 tracking-normal text-[14px]"
            >
              <Link to="/patient-intake" className="flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4" />
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
              className="w-12 h-12 rounded-lg hover:bg-slate-100/80 focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none select-none'}
          `}
        >
          <div className={`border-t bg-white/95 backdrop-blur-xl rounded-b-xl shadow-xl border-x border-b border-slate-200/70 transition-all duration-300 ${isOpen ? 'animate-fade-in' : ''}`}>
            <div className="px-5 pt-5 pb-7 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    block px-5 py-3 text-base font-medium rounded-lg transition-all duration-200
                    outline-none focus-visible:ring-2 focus-visible:ring-teal-400/80 focus-visible:ring-offset-2`
                    +
                    (isActive(item.path)
                      ? 'text-white bg-wellness-teal shadow-sm'
                      : 'text-slate-700 hover:bg-teal-50/70 hover:text-wellness-teal'
                    )
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
              <Button
                asChild
                size="lg"
                className="w-full mt-4 bg-gradient-to-r from-teal-500 via-wellness-teal to-teal-600 hover:from-teal-600 hover:via-wellness-teal hover:to-teal-500
                  text-white font-semibold py-3 rounded-lg btn-hover shadow-lg border-0 transition-all duration-300 text-base"
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
