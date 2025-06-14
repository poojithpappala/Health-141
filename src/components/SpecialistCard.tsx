
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Clock } from 'lucide-react';

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
    <Card className={`group premium-shadow hover:premium-hover transition-all duration-500 bg-gradient-to-br from-white to-slate-50/30 border-0 overflow-hidden rounded-2xl ${className}`} style={style}> {/* Updated radius and bg */}
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            {specialist.verified && (
              <Badge className="bg-wellness-gold text-premium-accent-foreground shadow-lg border-0"> {/* Use new gold accent */}
                <Award className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          <div className="p-8 text-center">
            <div className="relative inline-block mb-6">
              <img
                src={specialist.image}
                alt={`Dr. ${specialist.name} portrait`}
                className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute -bottom-2 -right-2 bg-[hsl(var(--primary))] rounded-full p-2 shadow-lg"> {/* Use new primary */}
                <Star className="w-4 h-4 text-white fill-current" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-wellness-charcoal mb-2 group-hover:text-[hsl(var(--primary))] transition-colors"> {/* Use new primary for hover */}
              Dr. {specialist.name}
            </h3>
            
            <Badge variant="secondary" className="mb-3 text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 border-[hsl(var(--primary))]/20"> {/* Use new primary */}
              {specialist.specialty}
            </Badge>
            
            <p className="text-slate-700 leading-relaxed mb-4 text-sm"> {/* Darker gray for better readability */}
              {specialist.bio}
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-slate-600"> {/* Darker gray */}
              {specialist.rating && (
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" /> {/* Brighter yellow */}
                  <span>{specialist.rating}</span>
                </div>
              )}
              {specialist.experience && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{specialist.experience}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpecialistCard;
