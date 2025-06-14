
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'; // Using CardTitle, CardDescription
import { Badge } from '@/components/ui/badge';
import { Star, Clock, UserCheck, ArrowRight } from 'lucide-react'; // Added ArrowRight
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; // Added Button

interface Specialist {
  id: string; // Assuming an ID for linking
  name: string;
  specialty: string;
  bio: string;
  image: string;
  rating?: number;
  experience?: string;
  verified?: boolean;
}

interface SpecialistCardProps {
  specialist: Specialist;
  className?: string;
  style?: React.CSSProperties;
}

const SpecialistCard = ({ specialist, className = '', style }: SpecialistCardProps) => {
  return (
    <Card 
      className={cn(
        `group relative flex flex-col overflow-hidden transition-all duration-300 ease-out 
         hover:shadow-xl hover:-translate-y-1.5 bg-card h-full`, // Ensure full height for flex items
        className
      )} 
      style={style}
    >
      <div className="relative">
        {specialist.verified && (
          <Badge 
            variant="default" // Consider a 'premium' or 'accent' variant if defined
            className="absolute top-4 right-4 z-10 bg-premium-accent text-premium-accent-foreground border-0 shadow-md px-3 py-1.5 text-xs font-semibold rounded-full"
          >
            <UserCheck className="w-3.5 h-3.5 mr-1.5" />
            Verified Pro
          </Badge>
        )}
        <div className="aspect-[4/3] overflow-hidden"> {/* Aspect ratio for image consistency */}
          <img
            src={specialist.image}
            alt={`Dr. ${specialist.name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
           <h3 className="text-xl font-bold mb-1 group-hover:text-premium-accent transition-colors duration-300">
            Dr. {specialist.name}
          </h3>
          <Badge 
            variant="secondary" 
            className="mb-2 bg-white/25 text-white backdrop-blur-sm border-none text-xs px-2.5 py-1 rounded-md" // Adjusted styling
          >
            {specialist.specialty}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5 flex-grow flex flex-col"> {/* Use p-5, flex-grow */}
        <CardDescription className="text-foreground/70 leading-relaxed mb-4 text-sm line-clamp-3 flex-grow">
          {specialist.bio}
        </CardDescription>
        
        <div className="flex items-center justify-between text-xs text-foreground/60 mt-auto pt-4 border-t border-border/50">
          {specialist.rating && (
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span className="font-semibold text-foreground/80">{specialist.rating.toFixed(1)}</span>
            </div>
          )}
          {specialist.experience && (
            <div className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 opacity-80" />
              <span>{specialist.experience}</span>
            </div>
          )}
        </div>
        {/* Example: Add a button to view profile - uncomment and adapt as needed */}
        {/* 
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-5 w-full group-hover:bg-primary/5 group-hover:text-primary"
          // asChild - if linking
        >
          View Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
        </Button>
        */}
      </CardContent>
    </Card>
  );
};

export default SpecialistCard;
