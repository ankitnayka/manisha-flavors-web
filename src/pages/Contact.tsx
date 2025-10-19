import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Facebook, Instagram, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const address = "Gandhi Food Garden Farm, Opp Agriculture University Navsari Eru, Gam Road, Jalalpore, Navsari, Gujarat 396450";
  // const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const googleMapsUrl = `https://maps.app.goo.gl/uBjQJbHuWNxoRfKm6`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Visit Us Today!</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Come experience authentic flavors or reach out to us for reservations
          </p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-soft">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      required
                      rows={5}
                      className="mt-2"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-warm p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-muted-foreground mb-3">{address}</p>
                      <Button asChild variant="outline" size="sm">  
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                          <Navigation className="w-4 h-4 mr-2" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-warm p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <a 
                        href="tel:+919998650919" 
                        className="text-primary hover:underline text-lg font-medium"
                      >
                        +91 99986 50919
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-warm p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Hours</h3>
                      <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Daily:</span> 9:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft bg-secondary/30">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Service Information</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                          Online Payment Accepted 
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Reservations required
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      Good for watching sport/
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                        Famaily Seating 
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gradient-warm text-white rounded-lg hover:shadow-warm transition-all hover:scale-110"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/zayka_dilli_ka_/?igsh=czJudmR5ajkzM2Iy#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gradient-warm text-white rounded-lg hover:shadow-warm transition-all hover:scale-110"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <Card className="mt-12 border-0 shadow-soft overflow-hidden">
            <div className="relative h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Find Us Here</h3>
                <p className="text-muted-foreground mb-4">
                  Gandhi Food Garden Farm, Jalalpore, Navsari
                </p>
                <Button asChild variant="hero">
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
