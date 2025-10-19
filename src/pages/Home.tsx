import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Clock, MapPin, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-chole.jpg";
import thaliImage from "@/assets/thali.jpg";
import butterCholeImage from "@/assets/butter-chole.jpg";
import masalaPapadImage from "@/assets/masala-papad.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-secondary/80 text-foreground px-4 py-2 rounded-full text-sm font-medium">
                🌟 Authentic Gujarati & North Indian Cuisine
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                MANISHA<br />
                {/* <span className="text-primary">CHOLE BHATURE</span> */}
                <span className="block text-primary mt-2">छोले भटूरे</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Taste the Tradition, Served Fresh Every Day
              </p>
              <p className="text-lg text-foreground">
                From Our Kitchen to Your Heart ❤️
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {/* <Button asChild variant="hero" size="xl">
                  <a href="tel:+919998650919">Order Now</a>
                </Button> */}
                <Button asChild variant="hero" size="xl">
                  <a
                    href="https://wa.me/919998650919"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Now
                  </a>
                </Button>

                <Button asChild variant="outline" size="xl">
                  <Link to="/menu">View Menu</Link>
                </Button>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 pt-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>9:15 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Jalalpore, Navsari</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  {/* Stars */}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Rating Text */}
                  <span className="text-sm font-medium text-foreground">
                    5.0 <span className="text-muted-foreground">(Google Reviews)</span>
                  </span>
                </div>
                {/* <div className="flex items-center gap-2 text-muted-foreground">
                  <Star className="w-5 h-5 text-primary" />
                  
                </div> */}
              </div>
            </div>
            <div className="relative animate-scale-in flex flex-col items-center">
              {/* Gradient Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-warm opacity-20 blur-3xl rounded-full animate-float" />

              {/* Image */}
              <img
                src={heroImage}
                alt="Delicious Chole Bhature"
                className="relative rounded-2xl shadow-warm w-full h-auto"
              />

              {/* Tagline Below Image */}
              <span className="mt-4 text-center font-semibold text-lg text-foreground">
                “Navsari’s No.1 Chole Bhature – Taste That Touches the Heart ❤️”
              </span>
            </div>


            {/* <div className="relative animate-scale-in">
              <div className="absolute -inset-4  bg-gradient-warm opacity-20 blur-3xl rounded-full animate-float" />

              <img 
                src={heroImage} 
                alt="Delicious Chole Bhature" 
                className="relative rounded-2xl shadow-warm w-full h-auto"
              />
                <span className="font-bold">“Navsari’s No.1 Chole Bhature – Taste That Touches the Heart ”</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-warm transition-all">
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-warm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Authentic Taste</h3>
                <p className="text-muted-foreground">
                  Traditional recipes passed down through generations
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-warm transition-all">
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-warm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fresh Daily</h3>
                <p className="text-muted-foreground">
                  Made fresh every day with the finest ingredients
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-warm transition-all">
              <CardContent className="pt-6 text-center">
                <div className="bg-gradient-warm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Service</h3>
                <p className="text-muted-foreground">
                  🚚 Free Delivery within 2km!
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Signature Dishes</h2>
            <p className="text-lg text-muted-foreground">
              Handpicked favorites that keep our customers coming back
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all group">
              <div className="relative overflow-hidden">
                <img
                  src={thaliImage}
                  alt="Gujarati Thali"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                  Unlimited
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Gujarati Thali</h3>
                <p className="text-muted-foreground mb-4">
                  2 Sabji + Chapati + Dal-Rice + Chaas + Papad + Salad + Pickles
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">₹80</span>
                  <Button variant="hero">Order Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all group">
              <div className="relative overflow-hidden">
                <img
                  src={butterCholeImage}
                  alt="Butter Chole Bhature"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                  Popular
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Butter Chole Bhature</h3>
                <p className="text-muted-foreground mb-4">
                  Our signature dish with rich butter topping
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">₹80</span>
                  <Button variant="hero">Order Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all group">
              <div className="relative overflow-hidden">
                <img
                  src={masalaPapadImage}
                  alt="Masala Papad"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                  Starter
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">Masala Papad</h3>
                <p className="text-muted-foreground mb-4">
                  Crispy papad topped with fresh vegetables and spices
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">₹25</span>
                  <Button variant="hero">Order Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Authentic Flavors?</h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today or call to place your order!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90">
              <a href="tel:+919998650919">Call: +91 99986 50919</a>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white text-primary hover:bg-white/10">
              <Link to="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
