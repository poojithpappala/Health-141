
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    rating: 5,
    text: "I felt truly heard and cared for by Dr. Khan. Highly recommend!",
    author: "Asha"
  },
  {
    rating: 4,
    text: "Quick booking and professional advice—exactly what I needed.",
    author: "Rahim"
  },
  {
    rating: 5,
    text: "The online portal made scheduling so easy and stress-free.",
    author: "Priya"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

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
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="relative">
      <Card className="shadow-lg border-none">
        <CardContent className="p-8">
          <div className="flex justify-center mb-4">
            {renderStars(testimonials[currentIndex].rating)}
          </div>
          <blockquote className="text-lg text-center text-wellness-charcoal mb-4">
            "{testimonials[currentIndex].text}"
          </blockquote>
          <p className="text-center text-wellness-teal font-medium">
            — {testimonials[currentIndex].author}
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-wellness-teal' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
