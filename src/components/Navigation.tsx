
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Stethoscope, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
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
      className={`fixed top-0 w-full z-[80] transition-all duration-500
        ${scrolled
          ? 'bg-white/90 backdrop-blur-2xl shadow-[0_8px_36px_0_rgba(0,122,117,0.12),0_1.5px_0_0_rgba(0,122,117,0.04)] border-b border-teal-50/80'
          : 'bg-white/70 backdrop-blur-xl shadow border-b border-transparent'
        }
        glass-premium`}
      style={{ WebkitBackdropFilter: 'blur(21px)', backdropFilter: 'blur(21px)' }}
    >
      <div className="section-container">
        <div className="flex justify-between items-center h-28">
          {/* Logo Area */}
          <Link to="/" className="flex items-center space-x-3 group select-none">
            <div className="relative w-[60px] h-[60px] bg-gradient-to-br from-wellness-teal to-teal-400 rounded-2xl flex items-center justify-center luxury-glow transition-all duration-200">
              <Heart className="w-8 h-8 text-white drop-shadow-xl icon-premium" />
              <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 floating-animation" />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gradient-to-tr from-yellow-400/80 to-teal-400/90 rounded-full blur-[5px] opacity-85" />
            </div>
            <span className="text-gradient font-extrabold text-4xl tracking-tight drop-shadow-[0_3px_12px_rgba(0,122,117,0.11)] pt-1">
              WellnessPortal
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                tabIndex={0}
                className={
                  `relative px-5 py-2 text-base font-semibold rounded-xl group transition-all duration-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wellness-teal/60
                  after:premium-divider`
                  +
                  (isActive(item.path)
                    ? ' text-white bg-gradient-to-r from-teal-500 to-wellness-teal shadow-lg premium-shadow'
                    : ' text-wellness-charcoal/90 hover:bg-gradient-to-r hover:from-teal-100 hover:to-white hover:text-wellness-teal/90 hover:premium-shadow'
                  )
                }
                style={{
                  minWidth: 118,
                  textAlign: 'center',
                  fontWeight: 600,
                  letterSpacing: '-.04em'
                }}
              >
                <span className="relative z-10">{item.name}</span>
                {!isActive(item.path) && (
                  <span className="absolute inset-0 transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100 origin-left bg-gradient-to-r from-wellness-teal/5 via-teal-400/7 to-white/0 pointer-events-none" />
                )}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-teal-400 via-wellness-teal to-teal-600 hover:from-teal-600 hover:via-wellness-teal hover:to-teal-400
                 text-white font-semibold px-7 h-12 rounded-2xl btn-hover premium-shadow border-0 focus-visible:ring-2 focus-visible:ring-teal-400 tracking-tight text-lg"
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
              className="w-14 h-14 rounded-2xl hover:bg-slate-100/80 focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-400
            ${isOpen ? 'max-h-[430px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none select-none'}
          `}
        >
          <div className={`border-t bg-gradient-to-br from-white/98 to-slate-100/92 backdrop-blur-2xl rounded-b-3xl shadow-2xl border-x border-b border-teal-100/35 transition-all duration-400 ${isOpen ? 'animate-fade-in' : ''}`}>
            <div className="px-7 pt-7 pb-9 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    block px-7 py-4 text-lg font-semibold rounded-xl transition-all duration-300
                    outline-none focus-visible:ring-2 focus-visible:ring-teal-400
                    ${isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-teal-500 to-wellness-teal shadow-lg premium-shadow'
                      : 'text-wellness-charcoal/90 hover:bg-gradient-to-r hover:from-teal-100 hover:to-white hover:text-wellness-teal/90 hover:premium-shadow'
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
                  text-white font-semibold py-4 rounded-2xl btn-hover shadow-xl mt-5 border-0 transition-all duration-300 text-lg"
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
