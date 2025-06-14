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
    const error = validateField('dateOfBirth', date); // Validate immediately on change
    setErrors(prev => ({ ...prev, dateOfBirth: error }));
  };

  const handleBlur = (name: string, value: string | Date | undefined) => {
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (['addressLine2', 'preferredPronouns', 'medicalHistory', 'referralSource'].includes(key) && !value) {
        return;
      }
      const error = validateField(key, value as string | Date | undefined); // Explicit cast
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      toast({
        title: "Information Submitted",
        description: `Thank you, ${formData.fullName}! Please select an appointment time below.`,
        className: "bg-primary text-primary-foreground", // Premium toast
      });
    } else {
      toast({
        title: "Validation Error",
        description: "Please review the form and correct any errors.",
        variant: "destructive",
      });
    }
  };

  // Common input classes for consistency
  const inputBaseClass = "mt-1.5 block w-full rounded-lg border-border bg-background px-4 py-2.5 text-base text-foreground placeholder-muted-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:bg-muted";
  const inputErrorClass = "border-destructive ring-1 ring-destructive focus:border-destructive focus:ring-destructive";

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 animate-page-entry bg-gradient-to-br from-background to-primary/5">
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-lg glass-effect rounded-xl"> {/* Updated styling */}
          <DialogHeader>
            <DialogTitle className="text-2xl text-foreground">Begin Your Consultation</DialogTitle>
            <DialogDescription className="text-foreground/80 mt-1">
              Share some details to help us connect you with the ideal specialist for your needs.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-6">
            <Button 
              onClick={() => setShowModal(false)}
              aria-label="Get Started"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="max-w-3xl mx-auto"> {/* Increased max-width for better layout */}
        {!isSubmitted ? (
          <Card className="card-premium animate-section-entry p-6 sm:p-8 md:p-10"> {/* Using card-premium from index.css */}
            <CardHeader className="pb-6 text-center">
              <CardTitle className="text-3xl md:text-4xl text-foreground">
                Patient Intake
              </CardTitle>
              <p className="text-foreground/70 mt-2 text-lg">Please provide your information below.</p>
            </CardHeader>
            <CardContent className="pt-2">
              <form onSubmit={handleSubmit} className="space-y-10"> {/* Increased spacing */}
                
                {/* Personal Information Section */}
                <section>
                  <h3 className="text-xl font-semibold text-foreground mb-5 border-b border-border pb-3">Personal Information</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="block text-sm font-medium text-foreground/90 mb-1">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        onBlur={(e) => handleBlur('fullName', e.target.value)}
                        className={cn(inputBaseClass, errors.fullName && inputErrorClass)}
                        required
                        placeholder="e.g., Jane Doe"
                      />
                      {errors.fullName && <p className="text-destructive text-xs mt-1.5">{errors.fullName}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="dateOfBirth" className="block text-sm font-medium text-foreground/90 mb-1">Date of Birth *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              id="dateOfBirth"
                              className={cn(
                                inputBaseClass,
                                "w-full justify-start text-left font-normal",
                                !formData.dateOfBirth && "text-muted-foreground",
                                errors.dateOfBirth && inputErrorClass
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 text-foreground/70" />
                              {formData.dateOfBirth ? format(formData.dateOfBirth, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 glass-effect rounded-lg mt-1" align="start">
                            <Calendar
                              mode="single"
                              selected={formData.dateOfBirth}
                              onSelect={handleDateChange}
                              disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                              initialFocus
                              className="p-2 bg-transparent" // Calendar styling
                            />
                          </PopoverContent>
                        </Popover>
                        {errors.dateOfBirth && <p className="text-destructive text-xs mt-1.5">{errors.dateOfBirth}</p>}
                      </div>
                       <div>
                        <Label htmlFor="preferredPronouns" className="block text-sm font-medium text-foreground/90 mb-1">Preferred Pronouns</Label>
                        <Input
                          id="preferredPronouns"
                          type="text"
                          value={formData.preferredPronouns}
                          onChange={(e) => handleInputChange('preferredPronouns', e.target.value)}
                          className={cn(inputBaseClass, errors.preferredPronouns && inputErrorClass)}
                          placeholder="e.g., she/her, they/them"
                        />
                        {errors.preferredPronouns && <p className="text-destructive text-xs mt-1.5">{errors.preferredPronouns}</p>}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Information Section */}
                <section>
                  <h3 className="text-xl font-semibold text-foreground mb-5 border-b border-border pb-3">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-1">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          onBlur={(e) => handleBlur('email', e.target.value)}
                          className={cn(inputBaseClass, errors.email && inputErrorClass)}
                          required
                          placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="block text-sm font-medium text-foreground/90 mb-1">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onBlur={(e) => handleBlur('phone', e.target.value)}
                           className={cn(inputBaseClass, errors.phone && inputErrorClass)}
                          required
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && <p className="text-destructive text-xs mt-1.5">{errors.phone}</p>}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="addressLine1" className="block text-sm font-medium text-foreground/90 mb-1">Address Line 1 *</Label>
                      <Input
                        id="addressLine1"
                        type="text"
                        value={formData.addressLine1}
                        onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                        onBlur={(e) => handleBlur('addressLine1', e.target.value)}
                        className={cn(inputBaseClass, errors.addressLine1 && inputErrorClass)}
                        required
                        placeholder="123 Main Street"
                      />
                      {errors.addressLine1 && <p className="text-destructive text-xs mt-1.5">{errors.addressLine1}</p>}
                    </div>
                    <div>
                      <Label htmlFor="addressLine2" className="block text-sm font-medium text-foreground/90 mb-1">Address Line 2 <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                      <Input
                        id="addressLine2"
                        type="text"
                        value={formData.addressLine2}
                        onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                        className={cn(inputBaseClass)}
                        placeholder="Apartment, suite, etc."
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <Label htmlFor="city" className="block text-sm font-medium text-foreground/90 mb-1">City *</Label>
                          <Input id="city" type="text" value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} onBlur={(e) => handleBlur('city', e.target.value)} className={cn(inputBaseClass, errors.city && inputErrorClass)} required />
                          {errors.city && <p className="text-destructive text-xs mt-1.5">{errors.city}</p>}
                        </div>
                        <div>
                          <Label htmlFor="state" className="block text-sm font-medium text-foreground/90 mb-1">State / Province *</Label>
                          <Input id="state" type="text" value={formData.state} onChange={(e) => handleInputChange('state', e.target.value)} onBlur={(e) => handleBlur('state', e.target.value)} className={cn(inputBaseClass, errors.state && inputErrorClass)} required />
                          {errors.state && <p className="text-destructive text-xs mt-1.5">{errors.state}</p>}
                        </div>
                        <div>
                          <Label htmlFor="zipCode" className="block text-sm font-medium text-foreground/90 mb-1">ZIP / Postal Code *</Label>
                          <Input id="zipCode" type="text" value={formData.zipCode} onChange={(e) => handleInputChange('zipCode', e.target.value)} onBlur={(e) => handleBlur('zipCode', e.target.value)} className={cn(inputBaseClass, errors.zipCode && inputErrorClass)} required />
                          {errors.zipCode && <p className="text-destructive text-xs mt-1.5">{errors.zipCode}</p>}
                        </div>
                    </div>
                  </div>
                </section>
                
                {/* Emergency Contact Section */}
                <section>
                  <h3 className="text-xl font-semibold text-foreground mb-5 border-b border-border pb-3">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="emergencyContactName" className="block text-sm font-medium text-foreground/90 mb-1">Full Name *</Label>
                      <Input id="emergencyContactName" type="text" value={formData.emergencyContactName} onChange={(e) => handleInputChange('emergencyContactName', e.target.value)} onBlur={(e) => handleBlur('emergencyContactName', e.target.value)} className={cn(inputBaseClass, errors.emergencyContactName && inputErrorClass)} required />
                      {errors.emergencyContactName && <p className="text-destructive text-xs mt-1.5">{errors.emergencyContactName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-foreground/90 mb-1">Phone Number *</Label>
                      <Input id="emergencyContactPhone" type="tel" value={formData.emergencyContactPhone} onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)} onBlur={(e) => handleBlur('emergencyContactPhone', e.target.value)} className={cn(inputBaseClass, errors.emergencyContactPhone && inputErrorClass)} required />
                      {errors.emergencyContactPhone && <p className="text-destructive text-xs mt-1.5">{errors.emergencyContactPhone}</p>}
                    </div>
                  </div>
                </section>

                {/* Medical Information Section */}
                <section>
                  <h3 className="text-xl font-semibold text-foreground mb-5 border-b border-border pb-3">Medical Information</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="concern" className="block text-sm font-medium text-foreground/90 mb-1">Primary Health Concern *</Label>
                      <Textarea
                        id="concern"
                        value={formData.concern}
                        onChange={(e) => handleInputChange('concern', e.target.value)}
                        onBlur={(e) => handleBlur('concern', e.target.value)}
                        className={cn(inputBaseClass, "min-h-[120px]", errors.concern && inputErrorClass)}
                        rows={4}
                        placeholder="Please describe your main symptoms or health concerns..."
                        required
                      />
                      {errors.concern && <p className="text-destructive text-xs mt-1.5">{errors.concern}</p>}
                    </div>
                    <div>
                      <Label htmlFor="medicalHistory" className="block text-sm font-medium text-foreground/90 mb-1">Brief Medical History <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                      <Textarea
                        id="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                        className={cn(inputBaseClass, "min-h-[100px]")}
                        rows={3}
                        placeholder="e.g., allergies, chronic conditions, current medications"
                      />
                    </div>
                  </div>
                </section>

                {/* Referral Source Section */}
                <section>
                  <h3 className="text-xl font-semibold text-foreground mb-5 border-b border-border pb-3">Additional Information</h3>
                   <div>
                      <Label htmlFor="referralSource" className="block text-sm font-medium text-foreground/90 mb-1">How did you hear about us? <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                      <Input
                        id="referralSource"
                        type="text"
                        value={formData.referralSource}
                        onChange={(e) => handleInputChange('referralSource', e.target.value)}
                        className={cn(inputBaseClass)}
                        placeholder="e.g., friend, online, doctor referral"
                      />
                    </div>
                </section>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full py-3.5 text-base font-semibold mt-6" // Larger button
                  aria-label="Submit patient information and continue"
                >
                  Submit & Continue
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8 animate-section-entry">
            <Card className="card-premium border-primary/30 p-8 md:p-12"> {/* Using card-premium */}
              <CardContent className="p-0 text-center">
                <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6 icon-shadow" />
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                  Thank You, {formData.fullName}!
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Your information has been securely submitted. You're one step away from your consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium p-0 overflow-hidden"> {/* Using card-premium */}
              <CardHeader className="p-6 md:p-8 bg-muted/30 border-b border-border">
                <CardTitle className="text-2xl md:text-3xl text-foreground">Schedule Your Appointment</CardTitle>
                <p className="text-foreground/70 mt-1">Please select a convenient time for your consultation.</p>
              </CardHeader>
              <CardContent className="p-1 md:p-2"> {/* Minimal padding for iframe container */}
                <div className="calendly-widget-container rounded-lg overflow-hidden min-h-[650px] md:min-h-[700px]">
                  <iframe
                    src="https://calendly.com/poojith132photography/doctor-consultation-clone" // Replace with your actual Calendly link
                    width="100%"
                    height="100%" // Use 100% height for responsiveness within container
                    frameBorder="0"
                    title="Schedule Appointment"
                    className="absolute top-0 left-0 w-full h-full" // Position iframe to fill container
                    onError={() => {
                      toast({
                        title: "Calendar Error",
                        description: "The scheduling calendar could not be loaded. Please refresh or try again later.",
                        variant: "destructive"
                      });
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4 px-2">
                  If the calendar doesn't load, please refresh the page or ensure your browser allows third-party cookies for Calendly.
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
