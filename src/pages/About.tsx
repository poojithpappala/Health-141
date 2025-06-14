
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Globe, ArrowRight, Sparkles, Target, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every decision prioritizes patient wellbeing, ensuring compassionate and personalized healthcare experiences that honor individual needs and preferences.'
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: 'Unwavering commitment to the highest medical standards, continuous education, and evidence-based practices that deliver superior patient outcomes.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Fostering seamless teamwork between patients, families, and multidisciplinary healthcare teams for comprehensive, coordinated care.'
    },
    {
      icon: Globe,
      title: 'Accessible Innovation',
      description: 'Leveraging cutting-edge technology to make world-class healthcare accessible to everyone, regardless of location or circumstances.'
    }
  ];

  const achievements = [
    { number: '75+', label: 'Medical Specialties' },
    { number: '1,200+', label: 'Expert Physicians' },
    { number: '50,000+', label: 'Lives Transformed' },
    { number: '20+', label: 'Years of Excellence' }
  ];

  const milestones = [
    {
      year: '2004',
      title: 'Foundation',
      description: 'Founded with a vision to revolutionize healthcare accessibility'
    },
    {
      year: '2010',
      title: 'Digital Innovation',
      description: 'Launched first telemedicine platform for remote consultations'
    },
    {
      year: '2018',
      title: 'National Expansion',
      description: 'Expanded services to 50+ cities across the nation'
    },
    {
      year: '2024',
      title: 'Future Forward',
      description: 'Leading AI-powered personalized medicine initiatives'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="hero-section hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/60 to-teal-50/80" />
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-wellness-teal/10 text-wellness-teal border-wellness-teal/20 mb-8 px-8 py-3 rounded-full text-lg font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              Our Story & Mission
            </Badge>
            <h1 className="heading-primary mb-8 leading-tight">
              Pioneering the Future of 
              <span className="block bg-gradient-to-r from-wellness-teal to-teal-400 bg-clip-text text-transparent">
                Healthcare Excellence
              </span>
            </h1>
            <p className="text-premium mb-12 max-w-4xl mx-auto">
              For over two decades, we've been at the forefront of healthcare innovation, combining cutting-edge 
              technology with compassionate care to transform lives and set new standards in medical excellence.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-wellness-teal mb-3">{achievement.number}</div>
                  <div className="text-slate-600 font-semibold text-lg">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="heading-secondary mb-8">
                Our Journey of Innovation
              </h2>
              <div className="space-y-8 text-slate-600 leading-relaxed">
                <p className="text-xl">
                  Born from a revolutionary vision in 2004, WellnessPortal emerged when a team of visionary 
                  healthcare professionals recognized that traditional medical systems were failing patients 
                  through unnecessary complexity and barriers to care.
                </p>
                <p className="text-lg">
                  We saw patients struggling with fragmented care, endless wait times, and communication 
                  gaps that prevented them from receiving the timely, quality treatment they deserved. 
                  This sparked our mission to completely reimagine healthcare delivery.
                </p>
                <p className="text-lg">
                  Today, we proudly operate one of the world's most comprehensive healthcare ecosystems, 
                  serving patients across multiple continents while maintaining our founding commitment 
                  to accessibility, innovation, and exceptional patient outcomes.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <CheckCircle className="w-6 h-6 text-wellness-teal flex-shrink-0" />
                  <span className="font-semibold text-wellness-charcoal">99.2% Patient Satisfaction Rate</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=700&h=600&fit=crop"
                alt="Modern healthcare facility with advanced technology"
                className="w-full h-[600px] object-cover rounded-3xl premium-shadow"
              />
              <div className="absolute -bottom-8 -left-8 card-premium p-8 max-w-xs">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wellness-teal mb-2">2004</div>
                  <div className="text-slate-600 font-medium">Transforming Healthcare Since</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="content-section bg-gradient-to-b from-slate-50/50 to-white">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-6">
              Milestones in Excellence
            </h2>
            <p className="text-premium max-w-3xl mx-auto">
              Key moments that shaped our journey toward revolutionizing healthcare
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-wellness-teal to-teal-400 rounded-full" />
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="card-premium p-8">
                      <div className="text-3xl font-bold text-wellness-teal mb-3">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-wellness-charcoal mb-4">{milestone.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-wellness-teal rounded-full border-4 border-white premium-shadow flex-shrink-0 z-10" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="text-center mb-20">
            <h2 className="heading-secondary mb-6">
              Our Core Values
            </h2>
            <p className="text-premium max-w-3xl mx-auto">
              The principles that guide every decision and shape how we deliver exceptional healthcare
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-premium p-10 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 teal-gradient rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-wellness-charcoal mb-6">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
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
            Join Our Healthcare Revolution
          </h2>
          <p className="text-2xl text-teal-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of healthcare today. Connect with our world-class specialists 
            and start your personalized wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-wellness-teal hover:bg-slate-50 font-bold text-xl px-12 py-6 btn-hover premium-shadow">
              <Link to="/patient-intake">
                Start Your Journey
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-3 border-white text-white hover:bg-white hover:text-wellness-teal font-bold text-xl px-12 py-6 btn-hover bg-white/10 backdrop-blur-sm">
              <Link to="/doctors">
                Meet Our Specialists
                <Users className="ml-3 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
