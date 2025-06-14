
import { Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react'; // A more medical-themed icon

const SiteLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2.5 group select-none" aria-label="WellnessPortal Home">
      <div className="relative w-10 h-10 brand-gradient-bg rounded-lg flex items-center justify-center soft-shadow group-hover:opacity-90 transition-all duration-200">
        <HeartPulse className="w-5 h-5 text-primary-foreground icon-shadow" />
      </div>
      <span className="font-bold text-2xl tracking-tight text-gradient-primary pt-0.5">
        WellnessPortal
      </span>
    </Link>
  );
};

export { SiteLogo };
