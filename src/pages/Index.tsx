
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Users, Clock, ArrowRight, CheckCircle, Star, Award, Calendar, Phone, Mail } from 'lucide-react';
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
      name: 'Dr. Ayesha Khan',
      specialty: 'Cardiologist',
      bio: 'Leading cardiac surgeon with 15+ years of experience in minimally invasive procedures and heart disease prevention.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face=true',
      rating: 4.9,
      experience: '15+ years',
      verified: true,
      education: 'Harvard Medical School',
      location: 'New York, NY'
    },
    {
      name: 'Dr. Rajesh Patel',
      specialty: 'Dermatologist',
      bio: 'Board-certified dermatologist specializing in advanced skin treatments, cosmetic procedures, and skin cancer detection.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&face=true',
      rating: 4.8,
      experience: '12+ years',
      verified: true,
      education: 'Johns Hopkins University',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Dr. Sarah Ahmed',
      specialty: 'Neurologist',
      bio: 'Expert neurologist with subspecialty training in movement disorders, epilepsy, and neurological rehabilitation.',
      image: 'https://images.unsplash.com/photo-1594824388853-e0e3b8e9c9a1?w=400&h=400&fit=crop&face=true',
      rating: 4.9,
      experience: '18+ years',
      verified: true,
      education: 'Mayo Clinic',
      location: 'Chicago, IL'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Orthopedist',
      bio: 'Orthopedic surgeon focused on sports medicine, joint replacement, and arthroscopic procedures for optimal recovery.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&face=true',
      rating: 4.7,
      experience: '14+ years',
      verified: true,
      education: 'Stanford Medical School',
      location: 'San Francisco, CA'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Your health information is protected with bank-level security and encryption'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your healthcare needs and emergencies'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Tailored treatment plans designed specifically for your unique health profile'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Access to top specialists across multiple medical fields and subspecialties'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Patients' },
    { number: '500+', label: 'Expert Doctors' },
    { number: '50+', label: 'Specialties' },
    { number: '4.9/5', label: 'Patient Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 animate-on-scroll overflow-hidden min-h-[90vh] flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30"></div>
        <div className="section-container relative w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-6">
                <Badge className="bg-wellness-teal text-white px-6 py-3 text-sm font-medium rounded-full">
                  ⭐ Trusted by 10,000+ Patients Worldwide
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-wellness-charcoal via-wellness-teal to-teal-600 bg-clip-text text-transparent leading-tight">
                  Premium Healthcare at Your Fingertips
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Connect with board-certified specialists, schedule appointments seamlessly, and experience healthcare that puts you first. Your wellness journey starts here.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-wellness-teal flex-shrink-0" />
                    <span>Same-day appointments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-wellness-teal flex-shrink-0" />
                    <span>Video consultations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-wellness-teal flex-shrink-0" />
                    <span>Secure medical records</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-wellness-teal flex-shrink-0" />
                    <span>Insurance accepted</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-wellness-teal hover:bg-wellness-teal/90 btn-hover text-lg px-8 py-6 rounded-full shadow-xl"
                >
                  <Link to="/patient-intake">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-wellness-teal text-wellness-teal hover:bg-wellness-teal hover:text-white btn-hover text-lg px-8 py-6 rounded-full"
                >
                  <Link to="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-wellness-teal">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=500&fit=crop"
                  alt="Modern medical consultation room"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl professional-shadow"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 professional-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-wellness-teal to-teal-400 rounded-full flex items-center justify-center">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-wellness-charcoal text-lg">4.9/5 Rating</p>
                      <p className="text-sm text-gray-600">From 2,500+ reviews</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-teal-500 to-wellness-teal rounded-2xl p-4 text-white professional-shadow">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs">Available</div>
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
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-teal-50/30 animate-on-scroll"
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-wellness-teal mb-4 px-4 py-2 rounded-full">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
              Experience Healthcare Reimagined
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced technology meets compassionate care to deliver an exceptional healthcare experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group animate-on-scroll bg-white rounded-3xl p-8 professional-shadow hover:premium-glow transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-wellness-teal to-teal-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
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
        className="py-24 px-4 sm:px-6 lg:px-8 animate-on-scroll bg-white"
      >
        <div className="section-container">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-wellness-teal mb-4 px-4 py-2 rounded-full">
              Meet Our Experts
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
              World-Class Medical Specialists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our board-certified physicians bring decades of experience and the latest medical advances to provide you with exceptional care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((specialist, index) => (
              <div
                key={index}
                className="group animate-on-scroll bg-gradient-to-br from-white to-slate-50/50 rounded-3xl p-8 professional-shadow hover:premium-glow transition-all duration-500 border-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <img
                      src={specialist.image}
                      alt={`${specialist.name} portrait`}
                      className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-wellness-teal rounded-full p-2 shadow-lg">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                    {specialist.verified && (
                      <div className="absolute -top-2 -left-2">
                        <Badge className="bg-wellness-teal text-white shadow-lg">
                          <Award className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-wellness-charcoal mb-2 group-hover:text-wellness-teal transition-colors">
                    {specialist.name}
                  </h3>
                  
                  <Badge variant="secondary" className="mb-3 text-wellness-teal bg-teal-50 border-teal-200">
                    {specialist.specialty}
                  </Badge>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {specialist.bio}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center justify-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{specialist.rating}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{specialist.experience}</span>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">{specialist.education}</p>
                      <p>{specialist.location}</p>
                    </div>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-wellness-teal hover:bg-wellness-teal/90 text-white rounded-full"
                  >
                    <Link to="/patient-intake">
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-2 border-wellness-teal text-wellness-teal hover:bg-wellness-teal hover:text-white text-lg px-8 py-4 rounded-full"
            >
              <Link to="/doctors">
                View All Specialists
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section 
        ref={ctaRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wellness-teal via-teal-600 to-wellness-teal animate-on-scroll relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-wellness-teal/90 to-teal-600/90"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="section-container relative text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Join thousands of patients who trust us with their health. Start your journey to better wellness today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-wellness-teal hover:bg-gray-100 btn-hover text-xl px-10 py-6 rounded-full shadow-2xl"
            >
              <Link to="/patient-intake">
                Book Your Appointment
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
            <div className="flex items-center space-x-6 text-teal-100 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Easy scheduling</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>Instant confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
