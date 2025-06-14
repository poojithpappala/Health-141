import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  MessageSquare,
  Calendar,
  Stethoscope,
  Shield,
  Sparkles
} from 'lucide-react';
import { openTidioChat } from '@/utils/tidioUtils';
import EmergencyContactDialog from '@/components/EmergencyContactDialog';

const Contact = () => {
  const [emergencyDialogOpen, setEmergencyDialogOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Premium Location',
      details: ['123 Healthcare Blvd', 'Medical District', 'New York, NY 10001'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      details: ['Emergency: (555) 911-HELP', 'Appointments: (555) 123-CARE', 'Concierge: (555) 456-7890'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Digital Contact',
      details: ['care@wellnessportal.com', 'appointments@wellnessportal.com', 'support@wellnessportal.com'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      details: ['Monday - Friday: 6:00 AM - 10:00 PM', 'Saturday: 8:00 AM - 8:00 PM', 'Sunday: 9:00 AM - 6:00 PM'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Schedule Premium Care',
      description: 'Book your appointment with our world-class specialists',
      link: '/patient-intake',
      color: 'bg-wellness-teal',
      action: null
    },
    {
      icon: MessageSquare,
      title: 'Live Concierge Chat',
      description: '24/7 premium support with dedicated care coordinators',
      link: '#',
      color: 'bg-blue-600',
      action: openTidioChat
    },
    {
      icon: Stethoscope,
      title: 'Emergency Care',
      description: 'Immediate medical attention when you need it most',
      link: '#',
      color: 'bg-red-600',
      action: () => setEmergencyDialogOpen(true)
    }
  ];

  const handleQuickAction = (action: any, link: string) => {
    if (action) {
      action();
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="hero-section hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/60 to-blue-50/80" />
        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-wellness-teal/10 text-wellness-teal border-wellness-teal/20 mb-8 px-8 py-3 rounded-full text-lg font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              Premium Healthcare Access
            </Badge>
            <h1 className="heading-primary mb-8 leading-tight">
              Connect with Our
              <span className="block bg-gradient-to-r from-wellness-teal to-teal-400 bg-clip-text text-transparent">
                Healthcare Excellence Team
              </span>
            </h1>
            <p className="text-premium mb-12 max-w-4xl mx-auto">
              Experience personalized, white-glove service with our dedicated healthcare team. 
              We're here to provide exceptional support for all your medical needs.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {quickActions.map((action, index) => (
              <div key={index} className="card-premium p-10 text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 ${action.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-wellness-charcoal mb-4">{action.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">{action.description}</p>
                {action.link === '#' ? (
                  <Button 
                    onClick={() => handleQuickAction(action.action, action.link)}
                    className="w-full btn-primary text-lg py-4"
                  >
                    Get Started
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                ) : (
                  <Button asChild className="w-full btn-primary text-lg py-4">
                    <Link to={action.link}>
                      Get Started
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="content-section">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-premium max-w-3xl mx-auto">
              Choose your preferred method of communication for personalized healthcare support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-premium p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-wellness-charcoal mb-4">{info.title}</h3>
                <div className="space-y-3">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-600 font-medium">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="content-section bg-gradient-to-b from-slate-50/50 to-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="heading-secondary mb-8">
                Visit Our Medical Center
              </h2>
              <p className="text-premium mb-8 leading-relaxed">
                Our state-of-the-art medical facility is strategically located in the heart of the medical district, 
                featuring cutting-edge technology and luxurious patient amenities.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-wellness-teal mr-4" />
                  <span className="text-slate-700 font-medium text-lg">123 Healthcare Blvd, Medical District, NY 10001</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-wellness-teal mr-4" />
                  <span className="text-slate-700 font-medium text-lg">Extended hours, 7 days a week</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-wellness-teal mr-4" />
                  <span className="text-slate-700 font-medium text-lg">Valet parking & concierge services</span>
                </div>
              </div>
              <Button asChild size="lg" className="btn-primary text-xl px-10 py-5">
                <Link to="/patient-intake">
                  Schedule Your Visit
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] platinum-gradient rounded-3xl flex items-center justify-center premium-shadow">
                <div className="text-center">
                  <MapPin className="w-20 h-20 text-wellness-teal mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-wellness-charcoal mb-4">Premium Location</h3>
                  <p className="text-slate-600 text-lg">Interactive map with detailed directions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section teal-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="section-container relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Begin Your Healthcare Journey?
          </h2>
          <p className="text-2xl text-teal-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't wait to invest in your health. Take the first step towards premium healthcare today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-wellness-teal hover:bg-slate-50 font-bold text-xl px-12 py-6 btn-hover premium-shadow">
              <Link to="/patient-intake">
                Book Premium Appointment
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-3 border-white text-white hover:bg-white hover:text-wellness-teal font-bold text-xl px-12 py-6 btn-hover bg-white/10 backdrop-blur-sm">
              <Link to="/services">
                Explore Premium Services
                <Sparkles className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <EmergencyContactDialog 
        open={emergencyDialogOpen} 
        onOpenChange={setEmergencyDialogOpen} 
      />
    </div>
  );
};

export default Contact;
