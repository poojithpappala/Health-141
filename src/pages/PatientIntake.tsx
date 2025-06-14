import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, CalendarIcon } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface FormData {
  fullName: string;
  dateOfBirth: Date | undefined;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  preferredPronouns: string;
  medicalHistory: string;
  concern: string;
  referralSource: string;
}

interface FormErrors {
  [key: string]: string;
}

const PatientIntake = () => {
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    dateOfBirth: undefined,
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    preferredPronouns: '',
    medicalHistory: '',
    concern: '',
    referralSource: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateField = (name: string, value: any): string => {
    switch (name) {
      case 'fullName':
        return value.trim() ? '' : 'Full name is required';
      case 'dateOfBirth':
        if (!value) return 'Date of birth is required';
        const dob = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
          // age--; // This logic is part of age calculation, not direct validation here
        }
        if (dob > today) return 'Date of birth cannot be in the future';
        if (age > 150) return 'Please enter a valid date of birth';
        return '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : 'Please enter a valid email address';
      case 'phone':
      case 'emergencyContactPhone':
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        const fieldName = name === 'phone' ? 'Phone number' : 'Emergency contact phone';
        return phoneRegex.test(value) ? '' : `Please enter a valid ${fieldName.toLowerCase()}`;
      case 'addressLine1':
        return value.trim() ? '' : 'Address Line 1 is required';
      case 'city':
        return value.trim() ? '' : 'City is required';
      case 'state':
        return value.trim() ? '' : 'State is required';
      case 'zipCode':
        const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
        return zipRegex.test(value) ? '' : 'Please enter a valid ZIP code';
      case 'emergencyContactName':
        return value.trim() ? '' : 'Emergency contact name is required';
      case 'concern':
        return value.trim() ? '' : 'Please describe your main concern';
      // Optional fields - no error if empty, but could add validation if they have a value
      case 'addressLine2':
      case 'preferredPronouns':
      case 'medicalHistory':
      case 'referralSource':
        return ''; // No validation for empty optional fields
      default:
        return '';
    }
  };

  const handleInputChange = (name: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData(prev => ({ ...prev, dateOfBirth: date }));
    if (errors.dateOfBirth) {
      const error = validateField('dateOfBirth', date);
      setErrors(prev => ({ ...prev, dateOfBirth: error }));
    }
  };

  const handleBlur = (name: string, value: string | Date | undefined) => {
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      // Skip validation for initially empty optional fields if they are still empty
      if (['addressLine2', 'preferredPronouns', 'medicalHistory', 'referralSource'].includes(key) && !value) {
        return;
      }
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
    } else {
      toast({
        title: "Validation Error",
        description: "Please review the form and correct any errors.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 animate-page-fade-in">
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md glass-premium">
          <DialogHeader>
            <DialogTitle className="text-2xl text-wellness-charcoal">Welcome to Your Consultation</DialogTitle>
            <DialogDescription className="text-slate-600">
              Please tell us about yourself so we can match you with the right specialist.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button 
              onClick={() => setShowModal(false)}
              aria-label="Close onboarding"
              className="bg-wellness-teal hover:bg-teal-700 text-white btn-hover"
            >
              Get Started
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="max-w-2xl mx-auto">
        {!isSubmitted ? (
          <Card className="card-premium animate-section-fade">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl text-center text-wellness-charcoal">
                Patient Intake Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <section>
                  <h3 className="text-xl font-semibold text-wellness-charcoal mb-4 border-b pb-2">Personal Information</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="text-slate-700 font-medium">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        onBlur={(e) => handleBlur('fullName', e.target.value)}
                        className={`mt-1 ${errors.fullName ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                        required
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="dateOfBirth" className="text-slate-700 font-medium">Date of Birth *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            id="dateOfBirth"
                            className={cn(
                              "w-full justify-start text-left font-normal mt-1",
                              !formData.dateOfBirth && "text-muted-foreground",
                              errors.dateOfBirth ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.dateOfBirth}
                            onSelect={handleDateChange}
                            onDayBlur={() => handleBlur('dateOfBirth', formData.dateOfBirth)} // Trigger validation on blur from calendar
                            disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                            initialFocus
                            className="p-3"
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                    </div>
                     <div>
                        <Label htmlFor="preferredPronouns" className="text-slate-700 font-medium">Preferred Pronouns</Label>
                        <Input
                          id="preferredPronouns"
                          type="text"
                          value={formData.preferredPronouns}
                          onChange={(e) => handleInputChange('preferredPronouns', e.target.value)}
                          onBlur={(e) => handleBlur('preferredPronouns', e.target.value)}
                          className="mt-1 border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal"
                          placeholder="e.g., she/her, he/him, they/them"
                        />
                        {errors.preferredPronouns && <p className="text-red-500 text-xs mt-1">{errors.preferredPronouns}</p>}
                      </div>
                  </div>
                </section>

                {/* Contact Information Section */}
                <section>
                  <h3 className="text-xl font-semibold text-wellness-charcoal mb-4 border-b pb-2">Contact Information</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onBlur={(e) => handleBlur('email', e.target.value)}
                        className={`mt-1 ${errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                        required
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-medium">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onBlur={(e) => handleBlur('phone', e.target.value)}
                        className={`mt-1 ${errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                        required
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <Label htmlFor="addressLine1" className="text-slate-700 font-medium">Address Line 1 *</Label>
                      <Input
                        id="addressLine1"
                        type="text"
                        value={formData.addressLine1}
                        onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                        onBlur={(e) => handleBlur('addressLine1', e.target.value)}
                        className={`mt-1 ${errors.addressLine1 ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                        required
                      />
                      {errors.addressLine1 && <p className="text-red-500 text-xs mt-1">{errors.addressLine1}</p>}
                    </div>
                    <div>
                      <Label htmlFor="addressLine2" className="text-slate-700 font-medium">Address Line 2</Label>
                      <Input
                        id="addressLine2"
                        type="text"
                        value={formData.addressLine2}
                        onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                        onBlur={(e) => handleBlur('addressLine2', e.target.value)}
                        className="mt-1 border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal"
                      />
                      {/* Optional field, so error display might not be needed unless specific validation exists */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-slate-700 font-medium">City *</Label>
                          <Input
                            id="city"
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            onBlur={(e) => handleBlur('city', e.target.value)}
                            className={`mt-1 ${errors.city ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                            required
                          />
                          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                        </div>
                        <div>
                          <Label htmlFor="state" className="text-slate-700 font-medium">State *</Label>
                          <Input
                            id="state"
                            type="text"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            onBlur={(e) => handleBlur('state', e.target.value)}
                            className={`mt-1 ${errors.state ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                            required
                          />
                          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                        </div>
                        <div>
                          <Label htmlFor="zipCode" className="text-slate-700 font-medium">ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            type="text"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            onBlur={(e) => handleBlur('zipCode', e.target.value)}
                            className={`mt-1 ${errors.zipCode ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                            required
                          />
                          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                        </div>
                    </div>
                  </div>
                </section>
                
                {/* Emergency Contact Section */}
                <section>
                  <h3 className="text-xl font-semibold text-wellness-charcoal mb-4 border-b pb-2">Emergency Contact</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="emergencyContactName" className="text-slate-700 font-medium">Full Name *</Label>
                      <Input
                        id="emergencyContactName"
                        type="text"
                        value={formData.emergencyContactName}
                        onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                        onBlur={(e) => handleBlur('emergencyContactName', e.target.value)}
                        className={`mt-1 ${errors.emergencyContactName ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                        required
                      />
                      {errors.emergencyContactName && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="emergencyContactPhone" className="text-slate-700 font-medium">Phone *</Label>
                      <Input
                        id="emergencyContactPhone"
                        type="tel"
                        value={formData.emergencyContactPhone}
                        onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                        onBlur={(e) => handleBlur('emergencyContactPhone', e.target.value)}
                        className={`mt-1 ${errors.emergencyContactPhone ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                        required
                      />
                      {errors.emergencyContactPhone && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactPhone}</p>}
                    </div>
                  </div>
                </section>

                {/* Medical Information Section */}
                <section>
                  <h3 className="text-xl font-semibold text-wellness-charcoal mb-4 border-b pb-2">Medical Information</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="concern" className="text-slate-700 font-medium">Describe Your Main Concern *</Label>
                      <Textarea
                        id="concern"
                        value={formData.concern}
                        onChange={(e) => handleInputChange('concern', e.target.value)}
                        onBlur={(e) => handleBlur('concern', e.target.value)}
                        className={`mt-1 ${errors.concern ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal'}`}
                        rows={4}
                        placeholder="Please describe your symptoms or health concerns..."
                        required
                      />
                      {errors.concern && <p className="text-red-500 text-xs mt-1">{errors.concern}</p>}
                    </div>
                    <div>
                      <Label htmlFor="medicalHistory" className="text-slate-700 font-medium">Brief Medical History</Label>
                      <Textarea
                        id="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                        onBlur={(e) => handleBlur('medicalHistory', e.target.value)}
                        className="mt-1 border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal"
                        rows={3}
                        placeholder="e.g., allergies, chronic conditions, current medications"
                      />
                      {errors.medicalHistory && <p className="text-red-500 text-xs mt-1">{errors.medicalHistory}</p>}
                    </div>
                  </div>
                </section>

                {/* Referral Source Section */}
                <section>
                  <h3 className="text-xl font-semibold text-wellness-charcoal mb-4 border-b pb-2">Additional Information</h3>
                   <div>
                      <Label htmlFor="referralSource" className="text-slate-700 font-medium">How did you hear about us?</Label>
                      <Input
                        id="referralSource"
                        type="text"
                        value={formData.referralSource}
                        onChange={(e) => handleInputChange('referralSource', e.target.value)}
                        onBlur={(e) => handleBlur('referralSource', e.target.value)}
                        className="mt-1 border-gray-300 focus:border-wellness-teal focus:ring-wellness-teal"
                        placeholder="e.g., friend, online search, doctor referral"
                      />
                      {errors.referralSource && <p className="text-red-500 text-xs mt-1">{errors.referralSource}</p>}
                    </div>
                </section>

                <Button 
                  type="submit" 
                  className="w-full bg-wellness-teal hover:bg-teal-700 text-white btn-hover py-3 text-base font-semibold"
                  aria-label="Submit patient info"
                >
                  Submit & Continue
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8 animate-section-fade">
            <Card className="card-premium border-teal-500/30">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-16 h-16 text-wellness-teal mx-auto mb-4 icon-premium" />
                <h2 className="text-3xl font-semibold text-wellness-charcoal mb-2">
                  Thanks, {formData.fullName}!
                </h2>
                <p className="text-slate-600 text-lg">
                  You're one step away. Please select your preferred appointment time below.
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-wellness-charcoal">Schedule Your Appointment</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <div className="calendly-widget-container rounded-lg overflow-hidden">
                  <iframe
                    src="https://calendly.com/poojith132photography/doctor-consultation-clone"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Schedule Appointment"
                    className="min-h-[600px]"
                    onError={() => {
                      toast({
                        title: "Calendar Error",
                        description: "Calendar unavailable—please refresh or try again later.",
                        variant: "destructive"
                      });
                    }}
                  />
                </div>
                <p className="text-xs text-slate-500 text-center mt-4">
                  If you don't see the calendar, please refresh the page or try again in a few moments.
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
