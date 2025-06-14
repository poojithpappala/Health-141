
import { Card, CardContent } from '@/components/ui/card'; // Base Card will now have refined styles
import { Badge } from '@/components/ui/badge';
import { Star, Award, Clock, UserCheck } from 'lucide-react'; // Added UserCheck for verified

interface Specialist {
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
        `group relative overflow-hidden transition-all duration-300 ease-in-out 
         hover:shadow-xl hover:-translate-y-1 bg-card`, // Using Card's base bg, enhanced hover
        className
      )} 
      style={style}
    >
      {specialist.verified && (
        <Badge 
          variant="default" // Use default button variant for badge styling
          className="absolute top-4 right-4 z-10 bg-[hsl(var(--premium-accent))] text-premium-accent-foreground border-0 shadow-md px-3 py-1.5 text-xs"
        >
          <UserCheck className="w-3.5 h-3.5 mr-1.5" />
          Verified Pro
        </Badge>
      )}
      <CardContent className="p-0"> {/* Remove CardContent default padding if image is flush */}
        <div className="relative">
          <img
            src={specialist.image}
            alt={`Dr. ${specialist.name}`}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 ease-out" // Full width image
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div> {/* Gradient overlay for text */}
          
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
             <h3 className="text-xl font-bold mb-1 group-hover:text-[hsl(var(--premium-accent))] transition-colors duration-300">
              Dr. {specialist.name}
            </h3>
            <Badge 
              variant="secondary" 
              className="mb-3 bg-white/20 text-white backdrop-blur-sm border-none text-xs"
            >
              {specialist.specialty}
            </Badge>
          </div>
        </div>
        
        <div className="p-6"> {/* Content padding now here */}
          <p className="text-foreground/80 leading-relaxed mb-5 text-sm line-clamp-3">
            {specialist.bio}
          </p>
          
          <div className="flex items-center justify-between text-sm text-foreground/70">
            {specialist.rating && (
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1.5" />
                <span className="font-medium">{specialist.rating}</span>
              </div>
            )}
            {specialist.experience && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                <span>{specialist.experience}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpecialistCard;

