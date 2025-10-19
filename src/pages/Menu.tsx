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
  image?: string;
}

interface MenuSection {
  title: string;
  icon: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    title: "Chole Bhature Specials",
    icon: "⭐",
    items: [
      { name: "Chhole Bhature", price: "₹60.00", image: "/menuItems/cholebhature.png" },
      { name: "Butter Chhole Bhature", price: "₹80.00", isPopular: true, image: "/menuItems/butterChole.png" },
      { name: "Cheese Chhole Bhature", price: "₹80.00", image: "/menuItems/cheeschole.png" },
      { name: "Butter Cheese Chhole Bhature", price: "₹100.00", image: "/menuItems/butterchesschole.png" },
    ],
  },
  ,
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
        image: "/menuItems/gujaratithali.png",
      },
    ],
  },
  {
    title: "Starters",
    icon: "🥘",
    items: [
      { name: "Roasted Papad", price: "₹12.00", image: "/menuItems/rostedpapad.png" },
      { name: "Fried Papad", price: "₹15.00", image: "/menuItems/friedpapad.png" },
      { name: "Masala Papad", price: "₹25.00", isPopular: true, image: "/menuItems/masalapapad.png" },
      { name: "Cheese Masala Papad", price: "₹40.00" },
    ],
  },
  {
    title: "Basic Meal Options",
    icon: "🍚",
    items: [
      { name: "2 Sabji (Unlimited) + 4 Chapati", price: "₹80.00", isUnlimited: true, image: "/menuItems/twosak.png" },
      { name: "Plain Chapati", price: "₹6.00", image: "/menuItems/planechapati.jpg" },
      { name: "Dal-Rice", price: "₹40.00", image: "/menuItems/dalrice.png" },
      { name: "Butter Chapati", price: "₹8.00", image: "/menuItems/ButterRoti.jpg" },
      { name: "Paratha", price: "₹15.00", image: "/menuItems/paratha.jpg" },
    ],
  },
  {
    title: "Extras",
    icon: "🧈",
    items: [
      { name: "Bhature", price: "₹20.00", image: "/menuItems/bhature.png" },
      { name: "Butter", price: "₹20.00", image: "/menuItems/butter.png" },
      { name: "Cheese", price: "₹20.00", image: "/menuItems/chees.png" },
    ],
  },
  {
    title: "Beverages",
    icon: "🥤",
    items: [
      { name: "Masala Buttermilk", price: "₹20.00", image: "/menuItems/buttermilk.png" },
      { name: "Buttermilk", price: "₹15.00", image: "/menuItems/buttermilk1.png" },
      { name: "Mineral Water", price: "As per MRP", image: "/menuItems/waterbottle.png" },
      { name: "Cold Drinks", price: "As per MRP", image: "/menuItems/colddrink.png" },
    ],
  },
];

const Menu = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4 animate-fade-in">Our Menu</h1>
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our authentic Gujarati and North Indian delicacies,
            prepared fresh daily with traditional recipes
          </p> */}

          {/* Scroll Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {menuData.map((section, idx) => (
              <button
                key={idx}
                onClick={() => handleScroll(section.title)}
                className="bg-primary text-white px-4 py-2 rounded-full text-sm md:text-base font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
              >
                {section.icon} {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {menuData.map((section, idx) => (
            <Card
              id={section.title} // for scroll target
              key={idx}
              className="border-0 shadow-soft hover:shadow-warm transition-all animate-fade-in w-full scroll-mt-24"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader className="px-4 py-3 md:py-4">
                <CardTitle className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl">
                  <span className="text-2xl md:text-3xl">{section.icon}</span>
                  {section.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-4 pb-4 md:pb-6">
                <div className="space-y-3 md:space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center gap-4 p-3 md:p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      {/* Image Section */}
                      {item.image && (
                        <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg overflow-hidden shadow-md flex-shrink-0 mx-auto sm:mx-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}

                      {/* Text + Price Section */}
                      <div className="flex-1 w-full text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-1 md:gap-2 mb-1">
                              <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors">
                                {item.name}
                              </h3>
                              {item.isUnlimited && (
                                <Badge variant="secondary" className="bg-accent text-white text-xs md:text-sm">
                                  Unlimited
                                </Badge>
                              )}
                              {item.isPopular && (
                                <Badge variant="default" className="bg-gradient-warm text-white border-0 text-xs md:text-sm">
                                  Popular
                                </Badge>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                            )}
                          </div>

                          {/* Price */}
                          <div className="mt-2 sm:mt-0 sm:text-right">
                            <span className="text-lg md:text-xl font-bold text-primary whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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


// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// interface MenuItem {
//   name: string;
//   price: string;
//   description?: string;
//   isUnlimited?: boolean;
//   isPopular?: boolean;
//   image?: string;
// }

// interface MenuSection {
//   title: string;
//   icon: string;
//   items: MenuItem[];
// }

// const menuData: MenuSection[] = [
//   {
//     title: "Chole Bhature Specials",
//     icon: "⭐",
//     items: [
//       { name: "Chhole Bhature", price: "₹60.00", image: "/menuItems/cholebhature.png" },
//       { name: "Butter Chhole Bhature", price: "₹80.00", isPopular: true,image: "/menuItems/butterChole.png" },
//       { name: "Cheese Chhole Bhature", price: "₹80.00" ,image: "/menuItems/cheeschole.png"},
//       { name: "Butter Cheese Chhole Bhature", price: "₹100.00", image:"/menuItems/butterchesschole.png" },
//     ],
//   },
//   {
//     title: "Starters",
//     icon: "🥘",
//     items: [
//       { name: "Roasted Papad", price: "₹12.00",image:"/menuItems/rostedpapad.png" },
//       { name: "Fried Papad", price: "₹15.00" ,image:"/menuItems/friedpapad.png"},
//       { name: "Masala Papad", price: "₹25.00", isPopular: true,image:"/menuItems/masalapapad.png" },
//       { name: "Cheese Masala Papad", price: "₹40.00" },
//     ],
//   }, {
//     title: "Basic Meal Options",
//     icon: "🍚",
//     items: [
//       { name: "2 Sabji (Unlimited) + 4 Chapati", price: "₹40.00", isUnlimited: true,image:"/menuItems/twosak.png" },
//       { name: "Plain Chapati", price: "₹6.00",image:"/menuItems/planechapati.jpg" },
//       { name: "Dal-Rice", price: "₹40.00",image:"/menuItems/dalrice.png" },
//       { name: "Butter Chapati", price: "₹8.00" ,image:"/menuItems/ButterRoti.jpg"},
//       { name: "Paratha", price: "₹15.00" ,image:"/menuItems/paratha.jpg"},
//     ],
//   },
//   {
//     title: "Gujarati Thali",
//     icon: "🍛",
//     items: [
//       {
//         name: "Gujarati Thali (Unlimited)",
//         price: "₹80.00",
//         description: "2 Sabji + Chapati + Dal-Rice + 1 Chaas + 1 Roasted Papad + Salad + Pickles",
//         isUnlimited: true,
//         isPopular: true,
//         image: "/menuItems/gujaratithali.png"
//       },
//     ],
//   },

//   {
//     title: "Extras",
//     icon: "🧈",
//     items: [
//       { name: "Bhature", price: "₹20.00",image:"/menuItems/bhature.png" },
//       { name: "Butter", price: "₹20.00" ,image:"/menuItems/butter.png" },
//       { name: "Cheese", price: "₹20.00",image:"/menuItems/chees.png" },
//     ],
//   },

//   {
//     title: "Beverages",
//     icon: "🥤",
//     items: [
//       { name: "Masala Buttermilk", price: "₹20.00",image:"/menuItems/buttermilk.png"  },
//       { name: "Buttermilk", price: "₹15.00",image:"/menuItems/buttermilk1.png"  },
//       { name: "Mineral Water", price: "As per MRP",image:"/menuItems/waterbottle.png"  },
//       { name: "Cold Drinks", price: "As per MRP",image:"/menuItems/colddrink.png"  },
//     ],
//   },

// ];

// const Menu = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-24 pb-12 bg-gradient-hero">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold mb-4 animate-fade-in">Our Menu</h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Explore our authentic Gujarati and North Indian delicacies,
//             prepared fresh daily with traditional recipes
//           </p>
//         </div>
//       </section>

//       {/* Menu Grid */}
//       <section className="py-12">
//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//     {menuData.map((section, idx) => (
//       <Card
//         key={idx}
//         className="border-0 shadow-soft hover:shadow-warm transition-all animate-fade-in w-full"
//         style={{ animationDelay: `${idx * 0.1}s` }}
//       >
//         <CardHeader className="px-4 py-3 md:py-4">
//           <CardTitle className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl">
//             <span className="text-2xl md:text-3xl">{section.icon}</span>
//             {section.title}
//           </CardTitle>
//         </CardHeader>

//         <CardContent className="px-4 pb-4 md:pb-6">
//           <div className="space-y-3 md:space-y-4">
//             {section.items.map((item, itemIdx) => (
//               <div
//                 key={itemIdx}
//                 className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center gap-4 p-3 md:p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
//               >
//                 {/* Image Section */}
//                 {item.image && (
//                   <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg overflow-hidden shadow-md flex-shrink-0 mx-auto sm:mx-0">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </div>
//                 )}

//                 {/* Text + Price Section */}
//                 <div className="flex-1 w-full text-center sm:text-left">
//                   {/* Text */}
//                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                     <div>
//                       <div className="flex flex-wrap justify-center sm:justify-start items-center gap-1 md:gap-2 mb-1">
//                         <h3 className="font-semibold text-base md:text-lg group-hover:text-primary transition-colors">
//                           {item.name}
//                         </h3>
//                         {item.isUnlimited && (
//                           <Badge variant="secondary" className="bg-accent text-white text-xs md:text-sm">
//                             Unlimited
//                           </Badge>
//                         )}
//                         {item.isPopular && (
//                           <Badge variant="default" className="bg-gradient-warm text-white border-0 text-xs md:text-sm">
//                             Popular
//                           </Badge>
//                         )}
//                       </div>
//                       {item.description && (
//                         <p className="text-sm md:text-base text-muted-foreground">
//                           {item.description}
//                         </p>
//                       )}
//                     </div>

//                     {/* Price Section (below text on small screens) */}
//                     <div className="mt-2 sm:mt-0 sm:text-right">
//                       <span className="text-lg md:text-xl font-bold text-primary whitespace-nowrap">
//                         {item.price}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     ))}
//   </div>
// </section>


//       {/* CTA */}
//       <section className="py-16 bg-gradient-warm text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Hungry Yet?</h2>
//           <p className="text-lg mb-6 opacity-90">
//             Call us now to place your order or reserve your table!
//           </p>
//           <a
//             href="tel:+919998650919"
//             className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-warm"
//           >
//             📞 Call: +91 99986 50919
//           </a>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Menu;
