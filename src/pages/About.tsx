
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      bio: "With over 15 years of travel experience across 70 countries, Jane founded Wanderlust to share her passion for exploration and cultural immersion.",
    },
    {
      name: "John Smith",
      role: "Travel Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "A seasoned photographer and travel writer, John has documented hidden gems on six continents and specializes in off-the-beaten-path adventures.",
    },
    {
      name: "Emily Chen",
      role: "Destination Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      bio: "Emily's deep connections with local communities and cultural experts ensure our travelers experience the most authentic version of each destination.",
    },
  ];

  const values = [
    {
      title: "Authenticity",
      description: "We believe in promoting genuine cultural experiences that connect travelers with local communities in meaningful ways.",
      icon: "🌍",
    },
    {
      title: "Sustainability",
      description: "Our recommendations prioritize eco-friendly practices and support for local economies to preserve destinations for future generations.",
      icon: "🌱",
    },
    {
      title: "Adventure",
      description: "We encourage stepping outside comfort zones to discover new perspectives and create transformative travel experiences.",
      icon: "🧭",
    },
    {
      title: "Connection",
      description: "Travel is about the people you meet and the stories you share; we foster these meaningful connections through our recommendations.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero
          title="About Wanderlust"
          subtitle="Our story, our team, and our mission to inspire extraordinary journeys"
          backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000"
          size="medium"
        />

        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 animate-fade-up">Our Story</h2>
            <div className="prose prose-lg max-w-none animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <p>
                Wanderlust was born from a simple idea: travel should be transformative, authentic, and accessible. 
                Our founder, Jane Doe, spent years exploring the world's hidden corners and realized that the most 
                memorable experiences came from venturing beyond the typical tourist attractions.
              </p>
              <p>
                What started as a personal blog documenting these discoveries has evolved into a comprehensive travel 
                resource trusted by adventurers worldwide. Today, our team of passionate globetrotters continues to 
                explore, document, and share the world's most extraordinary destinations.
              </p>
              <p>
                We believe that travel has the power to broaden perspectives, foster cultural understanding, and create 
                lifelong memories. Our mission is to help you discover destinations that resonate with your unique interests 
                and travel style, whether you're seeking serene beaches, ancient temples, or vibrant city experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-16 text-center animate-fade-up">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-background rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-md animate-fade-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center animate-fade-up">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
