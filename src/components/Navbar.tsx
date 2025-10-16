import { Link, useLocation } from "react-router-dom";
import { UtensilsCrossed, Phone } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-warm p-2 rounded-lg group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MANISHA</h1>
              <p className="text-xs text-muted-foreground -mt-1">Chole Bhature</p>
            </div>
          </Link>
          
          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/menu') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
            <a 
              href="tel:+919998650919" 
              className="flex items-center gap-2 bg-gradient-warm text-white px-4 py-2 rounded-lg font-medium hover:shadow-warm transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
