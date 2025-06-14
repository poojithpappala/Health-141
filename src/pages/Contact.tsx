
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
  Stethoscope
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['123 Healthcare Blvd', 'Medical District', 'New York, NY 10001'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['Emergency: (555) 911-HELP', 'Appointments: (555) 123-CARE', 'General: (555) 456-7890'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@wellnessportal.com', 'appointments@wellnessportal.com', 'support@wellnessportal.com'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 8:00 PM', 'Saturday: 9:00 AM - 5:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Schedule Appointment',
      description: 'Book your appointment with our specialists',
      link: '/patient-intake',
      color: 'bg-wellness-teal'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat Support',
      description: '24/7 customer support available',
      link: '#',
      color: 'bg-blue-600'
    },
    {
      icon: Stethoscope,
      title: 'Emergency Care',
      description: 'Immediate medical attention',
      link: '#',
      color: 'bg-red-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <Badge className="bg-wellness-teal text-white mb-6 px-6 py-3 rounded-full">
              Contact Us
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
              Get in Touch with Our Healthcare Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help you with all your healthcare needs. Reach out to us through any of the channels below, and we'll get back to you promptly.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-wellness-charcoal">{action.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  <Button asChild className="w-full rounded-full">
                    <Link to={action.link}>
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white professional-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-wellness-charcoal">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
                Visit Our Medical Center
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art medical facility is conveniently located in the heart of the medical district, with easy access to public transportation and ample parking for our patients.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-wellness-teal mr-3" />
                  <span className="text-gray-700">123 Healthcare Blvd, Medical District, NY 10001</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-wellness-teal mr-3" />
                  <span className="text-gray-700">Open 7 days a week</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-wellness-teal hover:bg-wellness-teal/90 rounded-full">
                <Link to="/patient-intake">
                  Schedule Your Visit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl flex items-center justify-center professional-shadow">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-wellness-teal mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-wellness-charcoal mb-2">Interactive Map</h3>
                  <p className="text-gray-600">Detailed directions and parking information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wellness-teal to-teal-600">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Healthcare Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Don't wait - take the first step towards better health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-wellness-teal hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
              <Link to="/patient-intake">
                Book Appointment Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-wellness-teal text-lg px-8 py-4 rounded-full">
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
