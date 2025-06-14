import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  fullName: string;
  age: string;
  email: string;
  phone: string;
  concern: string;
}

interface FormErrors {
  [key: string]: string;
}

const PatientIntake = () => {
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    concern: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        return value.trim() ? '' : 'Full name is required';
      case 'age':
        const age = parseInt(value);
        return value && !isNaN(age) && age > 0 && age < 150 ? '' : 'Please enter a valid age';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : 'Please enter a valid email address';
      case 'phone':
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        return phoneRegex.test(value) ? '' : 'Please enter a valid phone number';
      case 'concern':
        return value.trim() ? '' : 'Please describe your main concern';
      default:
        return '';
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (name: string, value: string) => {
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      toast({
        title: "Information Submitted",
        description: `Thank you, ${formData.fullName}! Please select an appointment time below.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Onboarding Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Welcome to Your Consultation</DialogTitle>
            <DialogDescription>
              Please tell us about yourself so we can match you with the right specialist.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button 
              onClick={() => setShowModal(false)}
              aria-label="Close onboarding"
            >
              Get Started
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="max-w-2xl mx-auto">
        {!isSubmitted ? (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-wellness-charcoal">
                Patient Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    onBlur={(e) => handleBlur('fullName', e.target.value)}
                    className={errors.fullName ? 'border-red-500' : ''}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    onBlur={(e) => handleBlur('age', e.target.value)}
                    className={errors.age ? 'border-red-500' : ''}
                    required
                  />
                  {errors.age && (
                    <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={(e) => handleBlur('email', e.target.value)}
                    className={errors.email ? 'border-red-500' : ''}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onBlur={(e) => handleBlur('phone', e.target.value)}
                    className={errors.phone ? 'border-red-500' : ''}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="concern">Describe Your Main Concern *</Label>
                  <Textarea
                    id="concern"
                    value={formData.concern}
                    onChange={(e) => handleInputChange('concern', e.target.value)}
                    onBlur={(e) => handleBlur('concern', e.target.value)}
                    className={errors.concern ? 'border-red-500' : ''}
                    rows={4}
                    placeholder="Please describe your symptoms or health concerns..."
                    required
                  />
                  {errors.concern && (
                    <p className="text-red-500 text-sm mt-1">{errors.concern}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-wellness-teal hover:bg-teal-700 btn-hover"
                  aria-label="Submit patient info"
                >
                  Submit & Continue
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Success Banner */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Thanks, {formData.fullName}! You're one step away...
                </h2>
                <p className="text-green-700">
                  Please select your preferred appointment time below.
                </p>
              </CardContent>
            </Card>

            {/* Calendly Widget */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="calendly-widget-container">
                  <iframe
                    src="https://calendly.com/poojith132photography/doctor-consultation-clone"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Schedule Appointment"
                    onError={() => {
                      toast({
                        title: "Calendar Error",
                        description: "Calendar unavailable—please refresh or try again later.",
                        variant: "destructive"
                      });
                    }}
                  />
                </div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  If you don't see the calendar, refresh or try again.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientIntake;
