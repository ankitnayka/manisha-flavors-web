import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-1.5 rounded-full flex-shrink-0">
              <img
                src="/hdLogo.png"
                alt="Manisha Chole Bhature Logo"
                className="rounded-full object-cover w-12 h-12"
              />
            </div>
            <div className="leading-tight">
              <h1 className="text-lg md:text-xl font-bold text-foreground tracking-wide">
                MANISHA
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground -mt-0.5">
                छोले भटूरे
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/menu") ? "text-primary" : "text-foreground"
              }`}
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            <a
              href="tel:+919998650919"
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          {!sidebarOpen && (
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </nav>

      {/* Sidebar / Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-card shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col mt-4 gap-4 px-4">
          <Link
            to="/menu"
            onClick={() => setSidebarOpen(false)}
            className="font-medium text-foreground hover:text-primary"
          >
            Menu
          </Link>
          <Link
            to="/contact"
            onClick={() => setSidebarOpen(false)}
            className="font-medium text-foreground hover:text-primary"
          >
            Contact
          </Link>
          <a
            href="tel:+919998650919"
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105 mt-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}


// import { Phone } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const location = useLocation();

//   // Function to check active route
//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           {/* Logo Section */}
//           <Link to="/" className="flex items-center gap-2">
//             <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-1.5 rounded-full flex-shrink-0">
//               <img
//                 src="/hdLogo.png"
//                 alt="Manisha Chole Bhature Logo"
//                 width={48}
//                 height={48}
//                 className="rounded-full object-cover w-12 h-12"
//               />
//             </div>
//             <div className="leading-tight">
//               <h1 className="text-lg md:text-xl font-bold text-foreground tracking-wide">
//                 MANISHA
//               </h1>
//               <p className="text-xs md:text-sm text-muted-foreground -mt-0.5">
//                 छोले भटूरे
//               </p>
//             </div>
//           </Link>

//           {/* Nav Links */}
//           <div className="flex items-center gap-3 ml- md:gap-6">
//             {/* Hide Home link on mobile */}
//             <Link
//               to="/"
//               className={`font-medium transition-colors hover:text-primary text-sm md:text-base ${
//                 isActive("/") ? "text-primary" : "text-foreground"
//               } hidden sm:inline`} 
//             >
//               Home
//             </Link>
//             <Link
//               to="/menu"
//               className={`font-medium transition-colors hover:text-primary text-sm md:text-base ${
//                 isActive("/menu") ? "text-primary" : "text-foreground"
//               }`}
//             >
//               Menu
//             </Link>
//             <Link
//               to="/contact"
//               className={`font-medium transition-colors hover:text-primary text-sm md:text-base ${
//                 isActive("/contact") ? "text-primary" : "text-foreground"
//               }`}
//             >
//               Contact
//             </Link>
//             <a
//               href="tel:+919998650919"
//               className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-3 py-2 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105 text-sm md:text-base"
//             >
//               <Phone className="w-4 h-4" />
//               <span className="hidden md:inline">Call Now</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// import { Link, useLocation } from "react-router-dom";
// import { UtensilsCrossed, Phone } from "lucide-react";

// const Navbar = () => {
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 group">
//             <div className="bg-gradient-warm p-2 rounded-lg group-hover:scale-110 transition-transform">
//             {/* <div className=" p-2 rounded-lg group-hover:scale-110 transition-transform"> */}
//               {/* <UtensilsCrossed className="w-6 h-6 text-white" /> */}
//               {/* <Image src="/mbLogo.jpg"  height=/> */}

//               <img
//                 src="/hdLogo.png"
//                 alt="Manisha Chole Bhature Logo"
//                 width={40}
//                 height={40}
//                 className="rounded-md object-cover"
//               />

//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-foreground">MANISHA</h1>
//               <p className="text-xs text-muted-foreground -mt-1">Chole Bhature</p>
//             </div>
//           </Link>

//           {/* Nav Links */}
//           <div className="flex items-center gap-6">
//             <Link
//               to="/"
//               className={`font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : 'text-foreground'
//                 }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/menu"
//               className={`font-medium transition-colors hover:text-primary ${isActive('/menu') ? 'text-primary' : 'text-foreground'
//                 }`}
//             >
//               Menu
//             </Link>
//             <Link
//               to="/contact"
//               className={`font-medium transition-colors hover:text-primary ${isActive('/contact') ? 'text-primary' : 'text-foreground'
//                 }`}
//             >
//               Contact
//             </Link>
//             <a
//               href="tel:+919998650919"
//               className="flex items-center gap-2 bg-gradient-warm text-white px-4 py-2 rounded-lg font-medium hover:shadow-warm transition-all hover:scale-105"
//             >
//               <Phone className="w-4 h-4" />
//               <span className="hidden md:inline">Call Now</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
