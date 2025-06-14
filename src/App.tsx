import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PatientIntake from "./pages/PatientIntake";
import DoctorPortal from "./pages/DoctorPortal";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import { SiteLogo } from './components/SiteLogo';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={200}>
      <Toaster />
      <Sonner richColors position="top-right" />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/patient-intake" element={<PatientIntake />} />
              <Route path="/doctor" element={<DoctorPortal />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
