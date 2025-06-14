
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const VALID_CREDENTIALS = {
  email: 'doctor@example.com',
  password: 'Wellness123'
};

const DoctorPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const { toast } = useToast();

  const appointments = [
    {
      date: '2024-06-15',
      time: '10:00 AM',
      patient: 'Asha',
      concern: 'Chest pain and shortness of breath'
    },
    {
      date: '2024-06-15',
      time: '2:30 PM',
      patient: 'Rahim',
      concern: 'Skin rash on arms'
    },
    {
      date: '2024-06-16',
      time: '9:00 AM',
      patient: 'Priya',
      concern: 'Headaches and dizziness'
    }
  ];

  const stats = {
    totalBooked: 12,
    pending: 3,
    completed: 9
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLocked) return;

    const isValidEmail = loginData.email === VALID_CREDENTIALS.email;
    const isValidPassword = loginData.password === VALID_CREDENTIALS.password;

    if (isValidEmail && isValidPassword) {
      setIsAuthenticated(true);
      setLoginError('');
      setAttemptCount(0);
      toast({
        title: "Login Successful",
        description: "Welcome to the doctor portal.",
      });
    } else {
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
      
      if (newAttemptCount >= 3) {
        setIsLocked(true);
        setLoginError('Too many attempts—please refresh page.');
      } else {
        setLoginError('Incorrect email or password');
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginData({ email: '', password: '' });
    setLoginError('');
    setAttemptCount(0);
    setIsLocked(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-wellness-charcoal">
                Doctor Sign In
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                    disabled={isLocked}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    disabled={isLocked}
                    required
                  />
                </div>

                {loginError && (
                  <Alert variant="destructive">
                    <AlertDescription>{loginError}</AlertDescription>
                  </Alert>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-wellness-teal hover:bg-teal-700 btn-hover"
                  disabled={isLocked}
                  aria-label="Sign in"
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Demo Credentials:</strong><br />
                  Email: doctor@example.com<br />
                  Password: Wellness123
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-wellness-charcoal">
            Doctor Dashboard
          </h1>
          <Button 
            onClick={handleLogout}
            variant="outline"
            role="button"
          >
            Logout
          </Button>
        </div>

        {/* Warning Banner */}
        <Alert className="mb-8 border-yellow-200 bg-yellow-50">
          <AlertDescription className="text-yellow-800">
            ⚠️ Note: This is a portfolio demo. No real patient data is stored.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Appointments */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-wellness-charcoal">
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment, index) => (
                    <div 
                      key={index}
                      className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-wellness-charcoal">
                            {appointment.patient}
                          </h3>
                          <p className="text-wellness-teal font-medium">
                            {appointment.date} at {appointment.time}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        <strong>Concern:</strong> {appointment.concern}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-wellness-charcoal">
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Total Booked</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {stats.totalBooked}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium">Pending</span>
                    <span className="text-2xl font-bold text-yellow-600">
                      {stats.pending}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Completed</span>
                    <span className="text-2xl font-bold text-green-600">
                      {stats.completed}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPortal;
