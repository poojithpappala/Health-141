
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every decision we make puts our patients first, ensuring compassionate and personalized healthcare experiences.'
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: 'Our commitment to the highest medical standards drives continuous improvement in patient outcomes.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We believe in teamwork between patients, families, and healthcare providers for optimal results.'
    },
    {
      icon: Globe,
      title: 'Accessible Healthcare',
      description: 'Making quality healthcare accessible to everyone, regardless of location or circumstances.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Medical Specialties' },
    { number: '500+', label: 'Expert Physicians' },
    { number: '10,000+', label: 'Patients Served' },
    { number: '15+', label: 'Years of Excellence' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-wellness-teal text-white mb-6 px-6 py-3 rounded-full">
              About Our Mission
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
              Transforming Healthcare Through Innovation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              For over 15 years, we've been dedicated to revolutionizing healthcare delivery by combining cutting-edge technology with compassionate care. Our mission is to make quality healthcare accessible, convenient, and personalized for everyone.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-wellness-teal mb-2">{achievement.number}</div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded in 2009 by a team of visionary healthcare professionals, our platform was born from a simple yet powerful idea: healthcare should be accessible, efficient, and centered around the patient's needs.
                </p>
                <p>
                  We recognized that traditional healthcare systems often created barriers between patients and the care they needed. Long wait times, complex scheduling, and fragmented communication were preventing people from receiving timely, quality care.
                </p>
                <p>
                  Today, we're proud to have built a comprehensive healthcare ecosystem that connects patients with top specialists, streamlines appointments, and provides personalized care plans. Our platform serves thousands of patients across the nation, maintaining the highest standards of medical excellence and patient satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop"
                alt="Healthcare team collaboration"
                className="w-full h-96 object-cover rounded-3xl professional-shadow"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 professional-shadow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-wellness-teal">2009</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-teal-50/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the way we deliver healthcare
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center professional-shadow hover:premium-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-wellness-teal to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-wellness-charcoal mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-wellness-teal to-teal-600">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Healthcare Revolution
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Experience the future of healthcare today. Connect with our specialists and start your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-wellness-teal hover:bg-gray-100 text-lg px-8 py-4 rounded-full">
              <Link to="/patient-intake">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-wellness-teal text-lg px-8 py-4 rounded-full bg-transparent">
              <Link to="/doctors">
                Meet Our Specialists
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
