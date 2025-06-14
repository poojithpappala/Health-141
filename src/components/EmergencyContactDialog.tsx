
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Phone, AlertTriangle } from 'lucide-react';

interface EmergencyContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmergencyContactDialog = ({ open, onOpenChange }: EmergencyContactDialogProps) => {
  const handleCallEmergency = () => {
    window.location.href = 'tel:+15559111435';
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <AlertDialogTitle className="text-center text-2xl font-bold text-red-600">
            Emergency Contact
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-lg">
            For immediate medical emergencies, please call our emergency hotline:
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="text-center py-6">
          <div className="text-3xl font-bold text-red-600 mb-2">
            (555) 911-HELP
          </div>
          <div className="text-sm text-gray-600">
            Available 24/7 for medical emergencies
          </div>
        </div>

        <AlertDialogFooter className="flex flex-col gap-3">
          <AlertDialogAction
            onClick={handleCallEmergency}
            className="w-full bg-red-600 hover:bg-red-700 text-lg py-3"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Emergency Line
          </AlertDialogAction>
          <AlertDialogAction
            onClick={() => onOpenChange(false)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EmergencyContactDialog;
