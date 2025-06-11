
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "Metropolitan Hospital",
      content: "iPrescribe has revolutionized how we manage prescriptions. The AI-powered drug interaction checks have prevented numerous potential complications.",
      rating: 5,
      initials: "SC",
      color: "primary"
    },
    {
      name: "Marcus Rodriguez",
      role: "Pharmacy Director", 
      company: "CareFirst Pharmacy",
      content: "The integration with our existing systems was seamless. We've seen a 60% reduction in prescription errors since implementing iPrescribe.",
      rating: 5,
      initials: "MR",
      color: "secondary"
    },
    {
      name: "Dr. Emily Watson",
      role: "Family Physician",
      company: "Wellness Medical Group",
      content: "The mobile app is fantastic. I can review and approve prescriptions even when I'm not in the office. It's saved me countless hours.",
      rating: 5,
      initials: "EW",
      color: "terracota"
    },
    {
      name: "James Liu",
      role: "IT Director",
      company: "Regional Health System",
      content: "Security and compliance were our top concerns. iPrescribe exceeded our expectations with their robust HIPAA-compliant infrastructure.",
      rating: 5,
      initials: "JL",
      color: "rose"
    },
    {
      name: "Dr. Michael Torres",
      role: "Cardiologist",
      company: "Heart Care Specialists",
      content: "The analytics dashboard provides incredible insights into patient medication patterns. It's helping us improve treatment outcomes significantly.",
      rating: 5,
      initials: "MT",
      color: "primary"
    },
    {
      name: "Lisa Thompson",
      role: "Nurse Practitioner",
      company: "Community Health Center",
      content: "iPrescribe's user interface is intuitive and efficient. Our staff was able to adopt it quickly without extensive training.",
      rating: 5,
      initials: "LT",
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          avatar: 'bg-primary-600 text-white',
          border: 'hover:border-primary-200'
        };
      case 'secondary':
        return {
          avatar: 'bg-secondary-600 text-white',
          border: 'hover:border-secondary-200'
        };
      case 'terracota':
        return {
          avatar: 'bg-terracota-600 text-white',
          border: 'hover:border-terracota-200'
        };
      case 'rose':
        return {
          avatar: 'bg-rose-600 text-white',
          border: 'hover:border-rose-200'
        };
      default:
        return {
          avatar: 'bg-neutral-600 text-white',
          border: 'hover:border-neutral-200'
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary-200 text-primary-700">
            <Star className="w-4 h-4 mr-2" />
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Trusted by Healthcare
            <span className="text-gradient block mt-2">Professionals Worldwide</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            See how iPrescribe is transforming healthcare practices and improving patient outcomes 
            across the globe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const colorClasses = getColorClasses(testimonial.color);
            
            return (
              <Card 
                key={index} 
                className={`group border-neutral-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${colorClasses.border}`}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-neutral-300" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-terracota-400 text-terracota-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-neutral-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-neutral-100">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className={colorClasses.avatar}>
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-primary-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-700 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary-200">10,000+</div>
              <div className="text-primary-100">Healthcare Providers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary-200">50M+</div>
              <div className="text-primary-100">Prescriptions Processed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary-200">99.9%</div>
              <div className="text-primary-100">System Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary-200">4.9/5</div>
              <div className="text-primary-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
