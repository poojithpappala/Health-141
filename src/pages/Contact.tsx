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
  ShieldCheck,
  Sparkles,
  LifeBuoy
} from 'lucide-react';
import { openTidioChat } from '@/utils/tidioUtils';
import EmergencyContactDialog from '@/components/EmergencyContactDialog';

const Contact = () => {
  const [emergencyDialogOpen, setEmergencyDialogOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Main Clinic',
      details: ['123 Wellness Way', 'Health District', 'New York, NY 10001'],
    },
    {
      icon: Phone,
      title: 'Dedicated Support',
      details: ['Emergency: (555) 911-HELP', 'Appointments: (555) 123-CARE'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['care@wellnessportal.com', 'support@wellnessportal.com'],
    },
    {
      icon: Clock,
      title: 'Clinic Hours',
      details: ['Mon - Fri: 7 AM - 9 PM', 'Sat: 9 AM - 7 PM', 'Sun: 10 AM - 5 PM'],
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Schedule Appointment',
      description: 'Book your visit with our top-tier specialists.',
      link: '/patient-intake',
      buttonText: 'Book Now',
      action: null
    },
    {
      icon: MessageSquare,
      title: 'Live Chat Support',
      description: 'Connect with our care team instantly for assistance.',
      link: '#',
      buttonText: 'Start Chat',
      action: openTidioChat
    },
    {
      icon: LifeBuoy,
      title: 'Emergency Assistance',
      description: 'Immediate contact for urgent medical situations.',
      link: '#',
      buttonText: 'Get Help',
      action: () => setEmergencyDialogOpen(true)
    }
  ];

  const handleQuickAction = (action: any, link: string) => {
    if (action) {
      action();
    }
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 animate-page-entry">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden bg-gradient-to-br from-background to-secondary/30">
        <div className="absolute inset-0 hero-pattern opacity-5" />
        <div className="section-container relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-6 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 mr-2 text-premium-accent" />
              Your Health, Our Priority
            </Badge>
            <h1 className="heading-primary mb-6">
              Get in Touch With Us
            </h1>
            <p className="subheading mb-10 max-w-3xl mx-auto">
              We're here to provide exceptional support for all your healthcare needs. Reach out through your preferred channel.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24">
            {quickActions.map((actionItem, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 p-0">
                <CardHeader className="items-center pt-8 pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 ease-out bg-primary/10 text-primary group-hover:scale-110`}>
                    <actionItem.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl">{actionItem.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-muted-foreground mb-6 text-base">{actionItem.description}</p>
                  {actionItem.link === '#' ? (
                    <Button 
                      onClick={() => handleQuickAction(actionItem.action, actionItem.link)}
                      variant={index === 2 ? "destructive" : "default"}
                      size="lg"
                      className="w-full"
                    >
                      {actionItem.buttonText}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  ) : (
                    <Button asChild variant="default" size="lg" className="w-full">
                      <Link to={actionItem.link}>
                        {actionItem.buttonText}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="content-section bg-background">
        <div className="section-container">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="heading-secondary mb-4">
              Detailed Contact Information
            </h2>
            <p className="subheading max-w-2xl mx-auto">
              Find all the ways you can connect with our dedicated team and facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 ease-out p-0">
                <CardHeader className="items-center pt-8 pb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 ease-out bg-primary/10 text-primary group-hover:scale-110`}>
                      <info.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <div className="space-y-1.5">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground font-medium text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="content-section bg-secondary/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-section-entry">
              <h2 className="heading-secondary mb-6">
                Visit Our State-of-the-Art Clinic
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our modern medical facility is designed for your comfort and equipped with advanced technology, conveniently located for easy access.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  { icon: MapPin, text: "123 Wellness Way, Health District, NY 10001" },
                  { icon: Clock, text: "Open 7 days a week with extended hours" },
                  { icon: ShieldCheck, text: "Valet Parking & Accessible Facilities" }
                ].map(item => (
                  <div key={item.text} className="flex items-start">
                    <item.icon className="w-6 h-6 text-primary mr-4 mt-1 shrink-0" />
                    <span className="text-foreground/80 font-medium text-base">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button variant="premium" asChild size="lg" className="text-base px-8 py-3">
                <Link to="/patient-intake">
                  Schedule Your Visit
                  <ArrowRight className="ml-2.5 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl animate-section-entry" style={{animationDelay: '0.2s'}}>
              {/* Placeholder for a map iframe or static map image */}
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwb2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80" 
                alt="Clinic Location Map Placeholder" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center p-8 bg-background/80 backdrop-blur-md rounded-lg shadow-lg">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-foreground mb-1">Wellness Portal Clinic</h3>
                  <p className="text-sm text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section brand-gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10" />
        <div className="section-container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
            Ready to Prioritize Your Wellbeing?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed text-balance">
            Take the first step towards exceptional healthcare. Book an appointment or explore our comprehensive services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Button 
              variant="premium"
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-slate-50 shadow-lg hover:shadow-xl !text-premium-accent-foreground"
            >
              <Link to="/patient-intake">
                Book Appointment
                <ArrowRight className="ml-2.5 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              size="lg" 
              className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              <Link to="/services">
                Explore Services
                <Sparkles className="ml-2.5 w-5 h-5" />
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
