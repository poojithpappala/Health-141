
import { Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';

const SiteLogo = ({ className }: { className?: string }) => {
  return (
    <Link 
      to="/" 
      className={cn(
        "flex items-center space-x-3 group select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md p-1 -m-1",
        className
      )} 
      aria-label="WellnessPortal Home"
    >
      <div className="relative w-10 h-10 brand-gradient-bg rounded-lg flex items-center justify-center shadow-soft group-hover:shadow-md transition-all duration-300 ease-out transform group-hover:scale-105">
        <HeartPulse className="w-5 h-5 text-primary-foreground icon-shadow" />
      </div>
      <span className="font-bold text-2xl tracking-tight text-gradient-primary pt-0.5 group-hover:opacity-90 transition-opacity">
        WellnessPortal
      </span>
    </Link>
  );
};

export { SiteLogo };
