
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SpecialistCard from '@/components/SpecialistCard';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const specialistsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [heroRef.current, specialistsRef.current, ctaRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const specialists = [
    {
      name: 'Dr. Ayesha Khan',
      specialty: 'Cardiologist',
      bio: 'Dr. Ayesha Khan — Cardiologist with 10+ years in pediatric surgery.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face=true'
    },
    {
      name: 'Dr. Rajesh Patel',
      specialty: 'Dermatologist',
      bio: 'Dr. Rajesh Patel — Dermatologist specializing in cosmetic and medical treatments.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&face=true'
    },
    {
      name: 'Dr. Sarah Ahmed',
      specialty: 'Neurologist',
      bio: 'Dr. Sarah Ahmed — Neurologist with expertise in brain and nervous system disorders.',
      image: 'https://images.unsplash.com/photo-1594824388853-e0e3b8e9c9a1?w=400&h=400&fit=crop&face=true'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Orthopedist',
      bio: 'Dr. Michael Chen — Orthopedist focused on sports medicine and joint replacement.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&face=true'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="py-20 px-4 sm:px-6 lg:px-8 animate-on-scroll"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Patient consulting doctor"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Right Column - Testimonials */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-wellness-charcoal mb-6">
                  Your Health, Our Priority
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with top specialists and book appointments seamlessly through our modern wellness portal.
                </p>
              </div>
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section 
        ref={specialistsRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 animate-on-scroll"
      >
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl font-bold text-center text-wellness-charcoal mb-12"
            aria-label="Our Specialists"
          >
            Our Specialists
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((specialist, index) => (
              <SpecialistCard 
                key={index} 
                specialist={specialist}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section 
        ref={ctaRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-wellness-teal animate-on-scroll"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Take the first step towards better health today.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-wellness-teal hover:bg-gray-100 btn-hover text-lg px-8 py-3"
            aria-label="Book Appointment"
          >
            <Link to="/patient-intake">
              Book Appointment
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
