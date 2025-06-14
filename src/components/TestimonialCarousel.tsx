
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    rating: 5,
    text: "I felt truly heard and cared for by Dr. Khan. The level of attention and expertise exceeded my expectations. Highly recommend!",
    author: "Asha Patel", 
    role: "Marketing Executive",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b129?w=100&h=100&fit=crop&face=true"
  },
  {
    rating: 4,
    text: "Quick booking and professional advice—exactly what I needed. The online platform made everything so convenient and stress-free.",
    author: "Rahim Ahmed",
    role: "Software Engineer", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&face=true"
  },
  {
    rating: 5,
    text: "The online portal made scheduling so easy and stress-free. Dr. Chen's expertise in orthopedics helped me get back to my active lifestyle quickly.",
    author: "Priya Sharma",
    role: "Fitness Instructor",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&face=true"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="relative">
      <Card className="professional-shadow border-0 bg-gradient-to-br from-white to-slate-50/50 overflow-hidden">
        <CardContent className="p-8 relative">
          <div className="absolute top-4 left-4 text-wellness-teal/20">
            <Quote className="w-12 h-12" />
          </div>
          
          <div className="flex justify-center mb-6">
            {renderStars(testimonials[currentIndex].rating)}
          </div>
          
          <blockquote className="text-lg lg:text-xl text-center text-wellness-charcoal mb-6 leading-relaxed font-medium">
            "{testimonials[currentIndex].text}"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].author}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-wellness-teal/20"
              loading="lazy"
            />
            <div className="text-center">
              <p className="font-semibold text-wellness-teal text-lg">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm text-gray-600">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center mt-8 space-x-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full border-2 border-wellness-teal text-wellness-teal hover:bg-wellness-teal hover:text-white transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-wellness-teal w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full border-2 border-wellness-teal text-wellness-teal hover:bg-wellness-teal hover:text-white transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
