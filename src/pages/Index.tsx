
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Heart, Users, Clock, ArrowRight, CheckCircle, Star, Award, Calendar, Phone, MapPin, Stethoscope } from 'lucide-react';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const specialistsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [heroRef.current, featuresRef.current, specialistsRef.current, ctaRef.current];
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
      bio: 'Board-certified dermatologist specializing in advanced skin treatments and cosmetic procedures.',
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
      bio: 'Expert neurologist with subspecialty training in movement disorders and epilepsy treatment.',
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
      bio: 'Orthopedic surgeon focused on sports medicine and joint replacement procedures.',
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Exceptional care and professional service. The online booking system made everything so convenient.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b900?w=60&h=60&fit=crop&face=true'
    },
    {
      name: 'Michael Brown',
      text: 'Dr. Khan saved my life. The cardiac procedure was seamless and the recovery was faster than expected.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&face=true'
    },
    {
      name: 'Emily Davis',
      text: 'Amazing experience from start to finish. The staff is incredibly caring and knowledgeable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&face=true'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30"></div>
        <div className="max-w-7xl mx-auto relative w-full">
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
                <Button asChild size="lg" className="bg-wellness-teal hover:bg-wellness-teal/90 text-lg px-8 py-6 rounded-full shadow-xl">
                  <Link to="/patient-intake">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-wellness-teal text-wellness-teal hover:bg-wellness-teal hover:text-white text-lg px-8 py-6 rounded-full">
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
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
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
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-teal-500 to-wellness-teal rounded-2xl p-4 text-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs">Available</div>
                  </div>
                </div>
              </div>
              
              {/* Testimonials */}
              <Card className="bg-white rounded-3xl shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-wellness-charcoal mb-4 text-center">What Our Patients Say</h3>
                  <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <span className="font-medium text-sm text-wellness-charcoal">{testimonial.name}</span>
                            <div className="flex ml-2">
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">{testimonial.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
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
              <Card key={index} className="text-center group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-0">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-wellness-teal to-teal-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-wellness-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section ref={specialistsRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
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
              <Card key={index} className="group bg-gradient-to-br from-white to-slate-50/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 overflow-hidden">
                <CardContent className="p-8">
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
                        <div className="flex items-center justify-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{specialist.location}</span>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-wellness-teal hover:bg-wellness-teal/90 text-white rounded-full">
                      <Link to="/patient-intake">
                        <Stethoscope className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2 border-wellness-teal text-wellness-teal hover:bg-wellness-teal hover:text-white text-lg px-8 py-4 rounded-full">
              <Link to="/doctors">
                View All Specialists
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section ref={ctaRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wellness-teal via-teal-600 to-wellness-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wellness-teal/90 to-teal-600/90"></div>
        <div className="max-w-7xl mx-auto relative text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Join thousands of patients who trust us with their health. Start your journey to better wellness today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-wellness-teal hover:bg-gray-100 text-xl px-10 py-6 rounded-full shadow-2xl">
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
