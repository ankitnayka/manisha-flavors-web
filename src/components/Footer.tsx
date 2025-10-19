import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 px-8 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">MANISHA CHOLE BHATURE</h3>
            <p className="text-muted-foreground mb-4">
              Authentic Gujarati & North Indian cuisine, served fresh every day with love and tradition.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary hover:text-white p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/zayka_dilli_ka_/?igsh=czJudmR5ajkzM2Iy#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary hover:text-white p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <p className="text-sm">
                  Gandhi Food Garden Farm, Opp Agriculture University Navsari Eru, 
                  Gam Road, Jalalpore, Navsari, Gujarat 396450
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919998650919" className="hover:text-primary transition-colors">
                  +91 99986 50919
                </a>
              </div>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Opening Hours</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-foreground mb-1">Daily</p>
                  <p>9:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="bg-secondary/50 p-3 rounded-lg text-sm">
                <p className="font-medium text-foreground mb-1">Service Options:</p>
                <p>• Cash only</p>
                <p>• Reservations required</p>
                <p>• Good for watching sport</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="w-full bg-gradient-warm text-white border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Manisha Chole Bhature. All rights reserved.</p>
          <p className="mt-1">Authentic Gujarati & North Indian Cuisine</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
