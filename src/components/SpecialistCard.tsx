
import { Card, CardContent } from '@/components/ui/card';

interface Specialist {
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

interface SpecialistCardProps {
  specialist: Specialist;
  className?: string;
  style?: React.CSSProperties;
}

const SpecialistCard = ({ specialist, className = '', style }: SpecialistCardProps) => {
  return (
    <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`} style={style}>
      <CardContent className="p-6 text-center">
        <img
          src={specialist.image}
          alt={`Dr. ${specialist.name} portrait`}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          loading="lazy"
        />
        <h3 className="text-xl font-semibold text-wellness-charcoal mb-2">
          {specialist.name}
        </h3>
        <p className="text-wellness-teal font-medium mb-3">
          {specialist.specialty}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          {specialist.bio}
        </p>
      </CardContent>
    </Card>
  );
};

export default SpecialistCard;
