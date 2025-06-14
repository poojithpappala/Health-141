
import TestimonialCarousel from '@/components/TestimonialCarousel';

const TestimonialsSection = () => {
  return (
    <section className="content-section animate-section-entry bg-primary/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Patient Success Stories
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Discover how we've empowered individuals to achieve optimal health and improved quality of life.
          </p>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;
