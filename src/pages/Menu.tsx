import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  isUnlimited?: boolean;
  isPopular?: boolean;
}

interface MenuSection {
  title: string;
  icon: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    title: "Gujarati Thali",
    icon: "🍛",
    items: [
      {
        name: "Gujarati Thali (Unlimited)",
        price: "₹80.00",
        description: "2 Sabji + Chapati + Dal-Rice + 1 Chaas + 1 Roasted Papad + Salad + Pickles",
        isUnlimited: true,
        isPopular: true,
      },
    ],
  },
  {
    title: "Basic Meal Options",
    icon: "🍚",
    items: [
      { name: "Dal-Rice", price: "₹40.00" },
      { name: "Plain Chapati", price: "₹6.00" },
      { name: "Butter Chapati", price: "₹8.00" },
      { name: "Paratha", price: "₹15.00" },
      { name: "2 Sabji (Unlimited) + 4 Chapati", price: "₹40.00", isUnlimited: true },
    ],
  },
  {
    title: "Extras",
    icon: "🧈",
    items: [
      { name: "Bhature", price: "₹20.00" },
      { name: "Butter", price: "₹20.00" },
      { name: "Cheese", price: "₹20.00" },
    ],
  },
  {
    title: "Starters",
    icon: "🥘",
    items: [
      { name: "Roasted Papad", price: "₹12.00" },
      { name: "Fried Papad", price: "₹15.00" },
      { name: "Masala Papad", price: "₹25.00", isPopular: true },
      { name: "Cheese Masala Papad", price: "₹40.00" },
    ],
  },
  {
    title: "Beverages",
    icon: "🥤",
    items: [
      { name: "Buttermilk", price: "₹15.00" },
      { name: "Masala Buttermilk", price: "₹20.00" },
      { name: "Mineral Water", price: "As per MRP" },
      { name: "Cold Drinks", price: "As per MRP" },
    ],
  },
  {
    title: "Chole Bhature Specials",
    icon: "⭐",
    items: [
      { name: "Chhole Bhature", price: "₹60.00" },
      { name: "Butter Chhole Bhature", price: "₹80.00", isPopular: true },
      { name: "Cheese Chhole Bhature", price: "₹80.00" },
      { name: "Butter Cheese Chhole Bhature", price: "₹100.00" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Our Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our authentic Gujarati and North Indian delicacies, 
            prepared fresh daily with traditional recipes
          </p>
        </div>
      </section>
      
      {/* Menu Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {menuData.map((section, idx) => (
              <Card 
                key={idx} 
                className="border-0 shadow-soft hover:shadow-warm transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <span className="text-3xl">{section.icon}</span>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx} 
                        className="flex justify-between items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                            {item.isUnlimited && (
                              <Badge variant="secondary" className="bg-accent text-white">
                                Unlimited
                              </Badge>
                            )}
                            {item.isPopular && (
                              <Badge variant="default" className="bg-gradient-warm text-white border-0">
                                Popular
                              </Badge>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-primary whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Info */}
          <Card className="mt-12 border-2 border-primary/20 bg-secondary/30">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                  <p className="text-2xl font-bold text-primary">₹200 - ₹400</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Payment</p>
                  <p className="text-2xl font-bold">Cash Only</p>
                  <p className="text-xs text-muted-foreground">No cards accepted</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service</p>
                  <p className="text-2xl font-bold">Reservations Required</p>
                  <p className="text-xs text-muted-foreground">Call ahead to book</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hungry Yet?</h2>
          <p className="text-lg mb-6 opacity-90">
            Call us now to place your order or reserve your table!
          </p>
          <a 
            href="tel:+919998650919"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-warm"
          >
            📞 Call: +91 99986 50919
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Menu;
