import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Stethoscope, 
  Brain, 
  Bone, 
  Eye,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Award,
  Sparkles,
  Video,
  MessageSquare
} from 'lucide-react';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SpecialistCard from '@/components/SpecialistCard';

const Index = () => {
  const features = [
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'Virtual consultations with board-certified physicians from anywhere'
    },
    {
      icon: Clock,
      title: 'Same-Day Appointments',
      description: 'Urgent care availability with minimal wait times'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Your medical data is secure and protected'
    },
    {
      icon: Award,
      title: 'Top-Rated Care',
      description: '98% patient satisfaction rate with 5-star reviews'
    }
  ];

  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart and cardiovascular care',
      specialists: '15+ Specialists',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care and treatment',
      specialists: '12+ Specialists',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced bone and joint treatments',
      specialists: '18+ Specialists',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care and vision services',
      specialists: '8+ Specialists',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Patients Served', icon: Users },
    { number: '500+', label: 'Medical Specialists', icon: Stethoscope },
    { number: '98%', label: 'Satisfaction Rate', icon: Star },
    { number: '24/7', label: 'Emergency Care', icon: Phone }
  ];

  const specialists = [
    {
      name: 'Dr. Sarah Chen',
      specialty: 'Cardiology',
      experience: '15+ years',
      bio: 'Leading cardiovascular specialist with expertise in interventional cardiology and heart failure management. Board-certified with extensive experience in complex cardiac procedures.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      patients: '2,500+',
      verified: true
    },
    {
      name: 'Dr. Michael Rodriguez',
      specialty: 'Neurology',
      experience: '12+ years',
      bio: 'Renowned neurologist specializing in stroke care, epilepsy treatment, and neurodegenerative diseases. Published researcher with 50+ peer-reviewed publications.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      rating: 4.8,
      patients: '1,800+',
      verified: true
    },
    {
      name: 'Dr. Emily Watson',
      specialty: 'Pediatrics',
      experience: '10+ years',
      bio: 'Compassionate pediatrician dedicated to comprehensive child healthcare. Specializes in developmental pediatrics and adolescent medicine with a focus on preventive care.',
      image: 'https://images.unsplash.com/photo-1594824475574-87b2b1b75516?w=400&h=400&fit=crop&crop=face',
      rating: 4.9,
      patients: '3,200+',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/40 to-teal-50/60" />
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-wellness-teal/10 text-wellness-teal border-wellness-teal/20 mb-8 px-8 py-3 rounded-full text-lg font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              Premium Healthcare Experience
            </Badge>
            
            <h1 className="heading-primary mb-8 leading-tight">
              World-Class Healthcare 
              <span className="block bg-gradient-to-r from-wellness-teal to-teal-400 bg-clip-text text-transparent">
                At Your Fingertips
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the future of healthcare with our award-winning platform. Connect with top specialists, 
              access cutting-edge treatments, and receive personalized care that puts your health first.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-wellness-teal to-teal-500 hover:from-wellness-teal/90 hover:to-teal-500/90 text-white font-semibold btn-hover premium-shadow text-lg" /* Adjusted classes */
              >
                <Link to="/patient-intake">
                  <Calendar className="mr-3 w-5 h-5" /> {/* Adjusted icon size for text-lg */}
                  Book Your Appointment
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="font-semibold btn-hover premium-shadow text-lg border-wellness-teal text-wellness-teal hover:text-wellness-teal hover:bg-wellness-teal/10" /* Adjusted classes */
              >
                <Link to="/services">
                  <MessageSquare className="mr-3 w-5 h-5" /> {/* Adjusted icon size for text-lg */}
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 teal-gradient rounded-2xl flex items-center justify-center" style={{animationDelay: `${index * 0.2}s`}}> {/* Removed floating-animation */}
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-wellness-charcoal mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section bg-gradient-to-b from-white to-slate-50/50">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-6">
              Why Choose WellnessPortal?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"> {/* Changed from text-premium */}
              We've revolutionized healthcare delivery with innovative technology and compassionate care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-premium p-8 text-center group">
                <div className="w-20 h-20 mx-auto mb-6 teal-gradient rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-wellness-charcoal mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-6">
              Our Medical Specialties
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"> {/* Changed from text-premium */}
              Comprehensive healthcare services delivered by world-renowned specialists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="card-premium p-8 group hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-wellness-charcoal mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-wellness-teal font-semibold">{service.specialists}</span>
                  <ArrowRight className="w-5 h-5 text-wellness-teal group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-wellness-teal to-teal-500 hover:from-wellness-teal/90 hover:to-teal-500/90 text-white font-semibold btn-hover premium-shadow text-lg" /* Consistent button styling */
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" /> {/* Adjusted margin for text-lg */}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="content-section bg-gradient-to-b from-slate-50/50 to-white">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-6">
              Meet Our Expert Specialists
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"> {/* Changed from text-premium */}
              Board-certified physicians with decades of experience and thousands of successful treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {specialists.map((specialist, index) => (
              <SpecialistCard key={index} specialist={specialist} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="font-semibold btn-hover premium-shadow text-lg border-wellness-teal text-wellness-teal hover:text-wellness-teal hover:bg-wellness-teal/10" /* Consistent button styling */
              variant="outline"
            >
              <Link to="/doctors">
                View All Specialists
                <ArrowRight className="ml-2 w-5 h-5" /> {/* Adjusted margin */}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-6">
              Patient Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"> {/* Changed from text-premium */}
              Hear from thousands of patients who have transformed their health with our care
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section teal-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="section-container relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-teal-100 mb-12 max-w-3xl mx-auto leading-relaxed"> {/* Adjusted text size to text-xl from text-2xl for better balance */}
            Join thousands of patients who have experienced world-class healthcare. 
            Your journey to better health starts with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-wellness-teal hover:bg-slate-50 font-bold text-lg btn-hover premium-shadow" /* Adjusted classes */
            >
              <Link to="/patient-intake">
                <Calendar className="mr-3 w-5 h-5" /> {/* Adjusted icon size */}
                Schedule Your Consultation
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-wellness-teal font-bold text-lg btn-hover bg-transparent backdrop-blur-sm hover:backdrop-blur-none" /* Adjusted classes, added subtle backdrop */
            >
              <Link to="/contact">
                <Phone className="mr-3 w-5 h-5" /> {/* Adjusted icon size */}
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
