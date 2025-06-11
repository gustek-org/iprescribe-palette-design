
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-secondary-200/30 animate-float"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-primary-200/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-terracota-200/40 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-secondary-100 text-primary-700 border-secondary-300 hover:bg-secondary-200 transition-colors">
            <Shield className="w-4 h-4 mr-2" />
            HIPAA Compliant & Secure
          </Badge>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-800 leading-tight">
            Revolutionize Your
            <span className="text-gradient block mt-2">
              Prescription Management
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            iPrescribe streamlines healthcare workflows with intelligent prescription management, 
            reducing errors and improving patient outcomes through cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary-700 hover:bg-primary-800 text-primary-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-300 text-primary-700 hover:bg-primary-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-200">
              <Clock className="w-8 h-8 text-secondary-600 mb-3" />
              <div className="text-2xl font-bold text-primary-800">50%</div>
              <div className="text-neutral-600 text-sm">Faster Processing</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-200">
              <Shield className="w-8 h-8 text-secondary-600 mb-3" />
              <div className="text-2xl font-bold text-primary-800">99.9%</div>
              <div className="text-neutral-600 text-sm">Error Reduction</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-200">
              <Users className="w-8 h-8 text-secondary-600 mb-3" />
              <div className="text-2xl font-bold text-primary-800">10K+</div>
              <div className="text-neutral-600 text-sm">Healthcare Providers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
