
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SpecialistCard from '@/components/SpecialistCard';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const specialistsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
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

    const elements = [heroRef.current, specialistsRef.current, featuresRef.current, ctaRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const specialists = [
    {
      name: 'Ayesha Khan',
      specialty: 'Cardiologist',
      bio: 'Leading cardiac surgeon with 15+ years of experience in minimally invasive procedures and heart disease prevention.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face=true',
      rating: 4.9,
      experience: '15+ years',
      verified: true
    },
    {
      name: 'Rajesh Patel',
      specialty: 'Dermatologist',
      bio: 'Board-certified dermatologist specializing in advanced skin treatments, cosmetic procedures, and skin cancer detection.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&face=true',
      rating: 4.8,
      experience: '12+ years',
      verified: true
    },
    {
      name: 'Sarah Ahmed',
      specialty: 'Neurologist',
      bio: 'Expert neurologist with subspecialty training in movement disorders, epilepsy, and neurological rehabilitation.',
      image: 'https://images.unsplash.com/photo-1594824388853-e0e3b8e9c9a1?w=400&h=400&fit=crop&face=true',
      rating: 4.9,
      experience: '18+ years',
      verified: true
    },
    {
      name: 'Michael Chen',
      specialty: 'Orthopedist',
      bio: 'Orthopedic surgeon focused on sports medicine, joint replacement, and arthroscopic procedures for optimal recovery.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&face=true',
      rating: 4.7,
      experience: '14+ years',
      verified: true
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Your health information is protected with bank-level security'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your healthcare needs'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Tailored treatment plans designed specifically for you'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Access to top specialists across multiple medical fields'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 animate-on-scroll overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30"></div>
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-6">
                <Badge className="bg-wellness-teal text-white px-4 py-2 text-sm font-medium">
                  Trusted by 10,000+ Patients
                </Badge>
                <h1 className="heading-primary">
                  Premium Healthcare at Your Fingertips
                </h1>
                <p className="text-premium">
                  Connect with board-certified specialists, schedule appointments seamlessly, and experience healthcare that puts you first. Your wellness journey starts here.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-wellness-teal mr-2" />
                    Same-day appointments
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-wellness-teal mr-2" />
                    Video consultations
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-wellness-teal mr-2" />
                    Secure medical records
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-wellness-teal hover:bg-wellness-teal/90 btn-hover text-lg px-8 py-4 rounded-full"
                >
                  <Link to="/patient-intake">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-wellness-teal text-wellness-teal hover:bg-wellness-teal hover:text-white btn-hover text-lg px-8 py-4 rounded-full"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Image & Testimonials */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                  alt="Patient consulting doctor"
                  className="w-full h-96 object-cover rounded-3xl professional-shadow"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 professional-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-wellness-teal rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-wellness-charcoal">4.9/5 Rating</p>
                      <p className="text-sm text-gray-600">From 2,500+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-teal-50/30 animate-on-scroll"
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-premium max-w-3xl mx-auto">
              Experience healthcare reimagined with cutting-edge technology and compassionate care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-wellness-teal to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 premium-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-wellness-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section 
        ref={specialistsRef}
        className="py-24 px-4 sm:px-6 lg:px-8 animate-on-scroll"
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-wellness-teal mb-4">
              Meet Our Experts
            </Badge>
            <h2 
              className="heading-secondary mb-6"
              aria-label="Our Specialists"
            >
              World-Class Medical Specialists
            </h2>
            <p className="text-premium max-w-3xl mx-auto">
              Our board-certified physicians bring decades of experience and the latest medical advances to provide you with exceptional care
            </p>
          </div>
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
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wellness-teal via-teal-600 to-wellness-teal animate-on-scroll relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-wellness-teal/90 to-teal-600/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="section-container relative text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Join thousands of patients who trust us with their health. Start your journey to better wellness today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-wellness-teal hover:bg-gray-100 btn-hover text-xl px-10 py-4 rounded-full shadow-2xl"
              aria-label="Book Appointment"
            >
              <Link to="/patient-intake">
                Book Your Appointment
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
            <p className="text-teal-100 text-sm">
              ✓ No hidden fees ✓ Easy scheduling ✓ Instant confirmation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
