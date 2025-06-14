
import { 
  HeartPulse, 
  ShieldCheck, 
  Clock, 
  Users, 
  Stethoscope, 
  Brain, 
  Bone, 
  Eye,
  Star,
  PhoneCall, 
  Award,
  Video
} from 'lucide-react';

import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import ServicesSection from '@/components/landing/ServicesSection';
import SpecialistsSection from '@/components/landing/SpecialistsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CtaSection from '@/components/landing/CtaSection';

const Index = () => {
  const features = [
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'Connect with board-certified physicians virtually, from anywhere.'
    },
    {
      icon: Clock,
      title: 'Prompt Appointments',
      description: 'Access urgent care with minimal wait times and flexible scheduling.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Private',
      description: 'Your medical data is protected with advanced encryption & security.'
    },
    {
      icon: Award,
      title: 'Top-Rated Professionals',
      description: 'Exceptional patient care delivered by highly-rated specialists.'
    }
  ];

  const services = [
    {
      icon: HeartPulse,
      title: 'Cardiology',
      description: 'Advanced heart & vascular care.',
      specialists: '15+ Experts',
      color: 'bg-gradient-to-br from-red-500 to-pink-600'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological treatments.',
      specialists: '12+ Experts',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Comprehensive joint & bone care.',
      specialists: '18+ Experts',
      color: 'bg-gradient-to-br from-blue-500 to-sky-600'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Total eye care & vision services.',
      specialists: '8+ Experts',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    { number: '50k+', label: 'Patients Treated', icon: Users },
    { number: '500+', label: 'Medical Experts', icon: Stethoscope },
    { number: '4.9/5', label: 'Average Rating', icon: Star },
    { number: '24/7', label: 'Support Online', icon: PhoneCall }
  ];

  const specialists = [
    {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      specialty: 'Cardiology',
      experience: '15+ years',
      bio: 'Leading cardiovascular specialist focusing on interventional cardiology and heart failure. Board-certified, extensive experience.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      verified: true
    },
    {
      id: 'michael-rodriguez',
      name: 'Michael Rodriguez',
      specialty: 'Neurology',
      experience: '12+ years',
      bio: 'Renowned neurologist specializing in stroke care, epilepsy, and neurodegenerative diseases. Widely published researcher.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      verified: true
    },
    {
      id: 'emily-watson',
      name: 'Emily Watson',
      specialty: 'Pediatrics',
      experience: '10+ years',
      bio: 'Compassionate pediatrician dedicated to child healthcare, specializing in developmental pediatrics and adolescent medicine.',
      image: 'https://images.unsplash.com/photo-1594824475574-87b2b1b75516?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen animate-page-entry">
      <HeroSection stats={stats} />
      <FeaturesSection features={features} />
      <hr className="premium-divider" />
      <ServicesSection services={services} />
      <hr className="premium-divider" />
      <SpecialistsSection specialists={specialists} />
      <hr className="premium-divider" />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Index;
