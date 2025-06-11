
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Clock, 
  Users,
  Pill,
  FileText,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Drug Interactions",
      description: "Advanced algorithms detect potential drug interactions and contraindications in real-time, ensuring patient safety.",
      badge: "AI-Driven",
      color: "primary"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Bank-level encryption and compliance with healthcare regulations to protect sensitive patient information.",
      badge: "Secure",
      color: "secondary"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access prescriptions and patient data seamlessly across all devices with our responsive platform.",
      badge: "Mobile Ready",
      color: "terracota"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and insights to track prescription patterns and optimize treatment outcomes.",
      badge: "Analytics",
      color: "rose"
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring",
      description: "Monitor patient adherence and medication effectiveness with automated tracking and alerts.",
      badge: "Live Updates",
      color: "primary"
    },
    {
      icon: Users,
      title: "Multi-Provider Collaboration",
      description: "Enable seamless communication between healthcare providers for coordinated patient care.",
      badge: "Collaborative",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          badge: 'bg-primary-100 text-primary-700 border-primary-200',
          icon: 'text-primary-600',
          card: 'hover:border-primary-200'
        };
      case 'secondary':
        return {
          badge: 'bg-secondary-100 text-secondary-700 border-secondary-200',
          icon: 'text-secondary-600',
          card: 'hover:border-secondary-200'
        };
      case 'terracota':
        return {
          badge: 'bg-terracota-100 text-terracota-700 border-terracota-200',
          icon: 'text-terracota-600',
          card: 'hover:border-terracota-200'
        };
      case 'rose':
        return {
          badge: 'bg-rose-100 text-rose-700 border-rose-200',
          icon: 'text-rose-600',
          card: 'hover:border-rose-200'
        };
      default:
        return {
          badge: 'bg-neutral-100 text-neutral-700 border-neutral-200',
          icon: 'text-neutral-600',
          card: 'hover:border-neutral-200'
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary-200 text-primary-700">
            <Pill className="w-4 h-4 mr-2" />
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Everything You Need for
            <span className="text-gradient block mt-2">Modern Healthcare</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Our comprehensive platform provides all the tools healthcare professionals need 
            to deliver exceptional patient care while streamlining their workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <Card 
                key={index} 
                className={`group border-neutral-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${colorClasses.card}`}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-white shadow-sm border ${colorClasses.icon.replace('text-', 'border-').replace('-600', '-200')}`}>
                      <Icon className={`h-6 w-6 ${colorClasses.icon}`} />
                    </div>
                    <Badge variant="outline" className={colorClasses.badge}>
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-primary-800 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary-700 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-2xl mx-auto">
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-secondary-200" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-lg text-primary-100 mb-6">
              Join thousands of healthcare providers who trust iPrescribe for their prescription management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-700 hover:bg-neutral-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
