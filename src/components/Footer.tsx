
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook,
  Pill,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-secondary-600 rounded-lg">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">iPrescribe</span>
            </div>
            <p className="text-primary-200 leading-relaxed">
              Revolutionizing healthcare with intelligent prescription management solutions 
              that prioritize patient safety and provider efficiency.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-800">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-800">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-800">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Product</h3>
            <ul className="space-y-3">
              {[
                'Features',
                'Pricing',
                'Integrations',
                'API Documentation',
                'Mobile Apps',
                'Security'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {item}
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Careers',
                'Press',
                'Blog',
                'Partners',
                'Contact'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {item}
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-400" />
                <span className="text-primary-200">support@iprescribe.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-400" />
                <span className="text-primary-200">1-800-PRESCRIBE</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary-400 mt-0.5" />
                <span className="text-primary-200">
                  123 Healthcare Drive<br />
                  Medical District, CA 90210
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Stay Updated</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-secondary-400"
                />
                <Button className="bg-secondary-600 hover:bg-secondary-700 px-4">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-primary-800" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-300 text-sm">
            © {currentYear} iPrescribe. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-300 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-300 hover:text-white transition-colors">
              HIPAA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
