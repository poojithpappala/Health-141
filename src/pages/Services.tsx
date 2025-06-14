
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
  Video
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnostics, treatments, and preventive care for all cardiac conditions.',
      features: ['EKG & Stress Testing', 'Cardiac Catheterization', 'Heart Disease Prevention', 'Arrhythmia Management'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Expert care for neurological disorders, from headaches to complex brain and nervous system conditions.',
      features: ['Stroke Care', 'Epilepsy Treatment', 'Movement Disorders', 'Memory Disorders'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced treatment for bone, joint, and muscle conditions with minimally invasive techniques.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Physical Therapy'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to advanced surgical procedures.',
      features: ['Cataract Surgery', 'Glaucoma Treatment', 'Retinal Care', 'LASIK Surgery'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Primary care and management of adult diseases with focus on prevention and wellness.',
      features: ['Annual Physicals', 'Chronic Disease Management', 'Preventive Care', 'Health Screenings'],
      color: 'from-wellness-teal to-teal-500'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents in a comfortable environment.',
      features: ['Well-Child Visits', 'Immunizations', 'Growth Monitoring', 'Behavioral Health'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const features = [
    {
      icon: Video,
      title: 'Telemedicine',
      description: 'Virtual consultations from the comfort of your home'
    },
    {
      icon: Clock,
      title: 'Same-Day Appointments',
      description: 'Quick access to care when you need it most'
    },
    {
      icon: Shield,
      title: 'Insurance Accepted',
      description: 'We work with most major insurance providers'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <Badge className="bg-wellness-teal text-white mb-6 px-6 py-3 rounded-full">
              Our Services
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
              Comprehensive Healthcare Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From preventive care to specialized treatments, we offer a full spectrum of medical services designed to keep you healthy and thriving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 professional-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-wellness-teal to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-wellness-charcoal mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 professional-shadow hover:premium-glow transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-wellness-charcoal mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-wellness-teal mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-wellness-teal hover:bg-wellness-teal/90 text-white rounded-full">
                  <Link to="/patient-intake">
                    Book Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wellness-teal to-teal-600">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Our team of specialists is ready to provide you with personalized, compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-wellness-teal hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
              <Link to="/patient-intake">
                Schedule Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-wellness-teal text-lg px-8 py-4 rounded-full">
              <Link to="/doctors">
                Find a Specialist
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
