
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Award, Clock, Filter } from 'lucide-react';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Ayesha Khan',
      specialty: 'Cardiology',
      subspecialty: 'Interventional Cardiology',
      bio: 'Leading cardiac surgeon with 15+ years of experience in minimally invasive procedures and heart disease prevention.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face=true',
      rating: 4.9,
      reviewCount: 234,
      experience: '15+ years',
      education: 'Harvard Medical School',
      location: 'New York, NY',
      languages: ['English', 'Urdu', 'Hindi'],
      availability: 'Available Today',
      verified: true
    },
    {
      id: 2,
      name: 'Dr. Rajesh Patel',
      specialty: 'Dermatology',
      subspecialty: 'Cosmetic Dermatology',
      bio: 'Board-certified dermatologist specializing in advanced skin treatments, cosmetic procedures, and skin cancer detection.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&face=true',
      rating: 4.8,
      reviewCount: 189,
      experience: '12+ years',
      education: 'Johns Hopkins University',
      location: 'Los Angeles, CA',
      languages: ['English', 'Hindi', 'Gujarati'],
      availability: 'Available Tomorrow',
      verified: true
    },
    {
      id: 3,
      name: 'Dr. Sarah Ahmed',
      specialty: 'Neurology',
      subspecialty: 'Movement Disorders',
      bio: 'Expert neurologist with subspecialty training in movement disorders, epilepsy, and neurological rehabilitation.',
      image: 'https://images.unsplash.com/photo-1594824388853-e0e3b8e9c9a1?w=400&h=400&fit=crop&face=true',
      rating: 4.9,
      reviewCount: 298,
      experience: '18+ years',
      education: 'Mayo Clinic',
      location: 'Chicago, IL',
      languages: ['English', 'Arabic'],
      availability: 'Available Today',
      verified: true
    },
    {
      id: 4,
      name: 'Dr. Michael Chen',
      specialty: 'Orthopedics',
      subspecialty: 'Sports Medicine',
      bio: 'Orthopedic surgeon focused on sports medicine, joint replacement, and arthroscopic procedures for optimal recovery.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&face=true',
      rating: 4.7,
      reviewCount: 156,
      experience: '14+ years',
      education: 'Stanford Medical School',
      location: 'San Francisco, CA',
      languages: ['English', 'Mandarin'],
      availability: 'Available Today',
      verified: true
    },
    {
      id: 5,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrics',
      subspecialty: 'Pediatric Endocrinology',
      bio: 'Compassionate pediatrician specializing in childhood diabetes, growth disorders, and adolescent health.',
      image: 'https://images.unsplash.com/photo-1594824388853-e0e3b8e9c9a2?w=400&h=400&fit=crop&face=true',
      rating: 4.9,
      reviewCount: 312,
      experience: '11+ years',
      education: 'Columbia University',
      location: 'Miami, FL',
      languages: ['English', 'Spanish'],
      availability: 'Available Tomorrow',
      verified: true
    },
    {
      id: 6,
      name: 'Dr. James Wilson',
      specialty: 'Psychiatry',
      subspecialty: 'Adult Psychiatry',
      bio: 'Board-certified psychiatrist specializing in anxiety, depression, and cognitive behavioral therapy.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16e?w=400&h=400&fit=crop&face=true',
      rating: 4.8,
      reviewCount: 203,
      experience: '16+ years',
      education: 'Yale Medical School',
      location: 'Boston, MA',
      languages: ['English'],
      availability: 'Available Today',
      verified: true
    }
  ];

  const specialties = ['All', 'Cardiology', 'Dermatology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Psychiatry'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.subspecialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <Badge className="bg-wellness-teal text-white mb-4 px-6 py-3 rounded-full">
              Our Medical Team
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-wellness-charcoal to-wellness-teal bg-clip-text text-transparent">
              Find Your Perfect Healthcare Provider
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse our extensive network of board-certified specialists and find the right doctor for your healthcare needs
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by name, specialty, or condition..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-lg rounded-full border-gray-300 focus:border-wellness-teal"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="px-6 py-3 rounded-full border border-gray-300 focus:border-wellness-teal focus:outline-none bg-white"
                >
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="section-container">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredDoctors.length} {filteredDoctors.length === 1 ? 'doctor' : 'doctors'}
              {selectedSpecialty !== 'All' && ` in ${selectedSpecialty}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-3xl p-8 professional-shadow hover:premium-glow transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img
                      src={doctor.image}
                      alt={`${doctor.name} portrait`}
                      className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-white shadow-xl"
                    />
                    {doctor.verified && (
                      <div className="absolute -top-2 -right-2">
                        <Badge className="bg-wellness-teal text-white shadow-lg">
                          <Award className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-wellness-charcoal mb-2">{doctor.name}</h3>
                  <Badge variant="secondary" className="mb-2 text-wellness-teal bg-teal-50 border-teal-200">
                    {doctor.specialty}
                  </Badge>
                  <p className="text-sm text-gray-600 font-medium">{doctor.subspecialty}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span className="text-gray-500 ml-1">({doctor.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">{doctor.education}</p>
                      <p className="text-gray-500">{doctor.location}</p>
                    </div>
                  </div>

                  <div className="text-sm">
                    <p className="text-gray-600 mb-2">Languages: {doctor.languages.join(', ')}</p>
                    <Badge className={`${doctor.availability.includes('Today') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {doctor.availability}
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{doctor.bio}</p>

                <div className="space-y-3">
                  <Button asChild className="w-full bg-wellness-teal hover:bg-wellness-teal/90 text-white rounded-full">
                    <Link to="/patient-intake">
                      Book Appointment
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-wellness-teal text-wellness-teal hover:bg-wellness-teal hover:text-white rounded-full">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
