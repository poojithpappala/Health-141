
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Stethoscope, 
  Baby, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Shield,
  Video,
  Sparkles,
  Activity,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive cardiovascular care with the latest diagnostic tools and minimally invasive treatments for optimal heart health.',
      features: ['Advanced EKG & Stress Testing', 'Cardiac Catheterization', 'Preventive Heart Disease Programs', 'Arrhythmia Management'],
      color: 'from-red-500 to-pink-500',
      patients: '15,000+',
      rating: '4.9'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert neurological care for complex brain and nervous system disorders using cutting-edge technology and personalized treatment plans.',
      features: ['Comprehensive Stroke Care', 'Advanced Epilepsy Treatment', 'Movement Disorder Specialists', 'Memory & Cognitive Health'],
      color: 'from-purple-500 to-indigo-500',
      patients: '12,000+',
      rating: '4.8'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced orthopedic care featuring minimally invasive surgical techniques and comprehensive rehabilitation programs.',
      features: ['Robotic Joint Replacement', 'Sports Medicine Excellence', 'Advanced Fracture Care', 'Comprehensive Physical Therapy'],
      color: 'from-blue-500 to-cyan-500',
      patients: '20,000+',
      rating: '4.9'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete vision care from routine eye exams to advanced surgical procedures using the latest laser technology.',
      features: ['Advanced Cataract Surgery', 'Glaucoma Treatment Center', 'Retinal Specialist Care', 'LASIK & Vision Correction'],
      color: 'from-green-500 to-teal-500',
      patients: '8,000+',
      rating: '4.9'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Comprehensive primary care and adult medicine with focus on prevention, wellness, and chronic disease management.',
      features: ['Comprehensive Annual Physicals', 'Chronic Disease Management', 'Preventive Care Programs', 'Advanced Health Screenings'],
      color: 'from-wellness-teal to-teal-500',
      patients: '25,000+',
      rating: '4.8'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for children from infancy through adolescence in a warm, child-friendly environment.',
      features: ['Well-Child Comprehensive Visits', 'Complete Immunization Programs', 'Growth & Development Monitoring', 'Pediatric Behavioral Health'],
      color: 'from-yellow-500 to-orange-500',
      patients: '18,000+',
      rating: '4.9'
    }
  ];

  const features = [
    {
      icon: Video,
      title: 'Advanced Telemedicine',
      description: 'High-definition virtual consultations with board-certified specialists from anywhere in the world'
    },
    {
      icon: Clock,
      title: 'Same-Day Access',
      description: 'Urgent care appointments available within hours, not days or weeks'
    },
    {
      icon: Shield,
      title: 'Premium Security',
      description: 'Military-grade encryption protecting your most sensitive health information'
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Continuous health tracking with AI-powered insights and personalized recommendations'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="hero-section hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/60 to-blue-50/80" />
        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-wellness-teal/10 text-wellness-teal border-wellness-teal/20 mb-8 px-8 py-3 rounded-full text-lg font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              World-Class Medical Services
            </Badge>
            <h1 className="heading-primary mb-8 leading-tight">
              Comprehensive Healthcare Services
              <span className="block bg-gradient-to-r from-wellness-teal to-teal-400 bg-clip-text text-transparent">
                Delivered with Excellence
              </span>
            </h1>
            <p className="text-premium mb-12 max-w-4xl mx-auto">
              From preventive care to specialized treatments, we offer a complete spectrum of medical services 
              designed to keep you healthy, thriving, and living your best life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="card-premium p-8 text-center group">
                <div className="w-16 h-16 teal-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-wellness-charcoal mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="content-section">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="card-premium p-10 hover:scale-105 transition-all duration-500 group">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-wellness-charcoal mb-6">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">{service.description}</p>
                
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-wellness-teal mr-4 flex-shrink-0" />
                      <span className="text-slate-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-8 p-4 bg-slate-50 rounded-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-wellness-teal">{service.patients}</div>
                    <div className="text-sm text-slate-600">Patients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-wellness-teal">{service.rating}/5</div>
                    <div className="text-sm text-slate-600">Patient Rating</div>
                  </div>
                </div>

                <Button asChild className="w-full btn-primary text-lg py-4">
                  <Link to="/patient-intake">
                    Book Consultation
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section teal-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="section-container relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Experience Premium Healthcare?
          </h2>
          <p className="text-2xl text-teal-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our team of world-class specialists is ready to provide you with personalized, 
            compassionate care that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-wellness-teal hover:bg-slate-50 font-bold text-xl px-12 py-6 btn-hover premium-shadow">
              <Link to="/patient-intake">
                Schedule Your Appointment
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-3 border-white text-white hover:bg-white hover:text-wellness-teal font-bold text-xl px-12 py-6 btn-hover bg-white/10 backdrop-blur-sm">
              <Link to="/doctors">
                Find Your Specialist
                <Zap className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
