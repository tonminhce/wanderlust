
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      description: "Our friendly team is here to help.",
      details: "hello@wanderlust.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Visit Us",
      description: "Come say hello at our office.",
      details: "123 Travel Street, Adventure City",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm.",
      details: "+1 (555) 123-4567",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero
          title="Contact Us"
          subtitle="Have questions or need personalized travel recommendations? We're here to help!"
          backgroundImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2000"
          size="medium"
        />

        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-8 bg-secondary/30 rounded-xl animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <p className="font-medium">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Whether you're looking for customized travel itineraries or have questions about 
                our recommendations, we'd love to hear from you!
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/50 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 animate-fade-up">Follow Our Journey</h2>
            <p className="text-muted-foreground text-lg mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Stay updated with our latest travel discoveries, tips, and exclusive offers by 
              following us on social media.
            </p>
            <div className="flex justify-center space-x-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {/* Social media icons would go here */}
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="sr-only">Instagram</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="sr-only">Twitter</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="sr-only">Facebook</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
