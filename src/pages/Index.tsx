
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecommendationGrid from "@/components/RecommendationGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const heroImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000";

  // Beach recommendations
  const beachRecommendations = [
    {
      title: "Bali, Indonesia",
      description: "Discover the pristine beaches, lush rice terraces, and vibrant culture of this Indonesian paradise.",
      images: [
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&q=80&w=800",
      ],
      tag: "Beach",
    },
    {
      title: "Maldives",
      description: "Experience luxury and tranquility on these breathtaking atolls surrounded by crystal clear waters.",
      images: [
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=800",
      ],
      tag: "Beach",
    },
    {
      title: "Santorini, Greece",
      description: "Enjoy the iconic white and blue architecture perched on volcanic cliffs overlooking the Aegean Sea.",
      images: [
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800",
      ],
      tag: "Beach",
    },
  ];

  // Temple recommendations
  const templeRecommendations = [
    {
      title: "Kyoto, Japan",
      description: "Explore ancient temples, traditional gardens, and experience the serene beauty of Japanese culture.",
      images: [
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
      ],
      tag: "Temple",
    },
    {
      title: "Angkor Wat, Cambodia",
      description: "Marvel at the world's largest religious monument, a stunning example of Khmer architecture.",
      images: [
        "https://images.unsplash.com/photo-1563605136837-20a33328095d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1584811644165-33078f50eb15?auto=format&fit=crop&q=80&w=800",
      ],
      tag: "Temple",
    },
    {
      title: "Bagan, Myanmar",
      description: "Witness thousands of ancient temples and pagodas scattered across a mystical landscape.",
      images: [
        "https://images.unsplash.com/photo-1564596823821-74c366159c67?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1600158895057-835208c38645?auto=format&fit=crop&q=80&w=800",
      ],
      tag: "Temple",
    },
  ];

  // Country recommendations
  const countryRecommendations = [
    {
      title: "New Zealand",
      description: "Experience diverse landscapes from mountains to beaches, perfect for adventure seekers and nature lovers.",
      images: [
        "https://images.unsplash.com/photo-1493962853049-3fd4f576f91f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800",
      ],
      tag: "Country",
    },
    {
      title: "Italy",
      description: "Immerse yourself in rich history, exquisite cuisine, and breathtaking architecture in this European gem.",
      images: [
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800",
      ],
      tag: "Country",
    },
    {
      title: "Morocco",
      description: "Discover vibrant markets, stunning desert landscapes, and the unique blend of African and Middle Eastern cultures.",
      images: [
        "https://images.unsplash.com/photo-1548018560-c7196548c799?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800",
      ],
      tag: "Country",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero
          title="Discover the World's Hidden Gems"
          subtitle="Uncover extraordinary destinations, immerse yourself in different cultures, and create unforgettable memories."
          backgroundImage={heroImage}
          buttonText="Start Exploring"
          buttonLink="#recommendations"
          size="large"
        />

        <section id="introduction" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm font-medium text-primary uppercase tracking-wider animate-fade-up">
                About Wanderlust
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Your Ultimate Travel Companion
              </h2>
              <p className="text-muted-foreground text-lg mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Welcome to Wanderlust, where we help adventurous souls find their next destination. 
                Our carefully curated recommendations combine stunning locations with authentic experiences.
              </p>
              <p className="text-muted-foreground text-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
                Whether you're looking for serene beaches, ancient temples, or vibrant cities, 
                we've got the perfect destination waiting for you.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl animate-fade-up">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1200" 
                alt="Tropical paradise" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="recommendations" className="bg-secondary/50 py-20">
          <RecommendationGrid
            title="Paradise Beaches"
            description="Discover pristine shorelines with crystal-clear waters and golden sands"
            items={beachRecommendations}
          />
        </section>

        <section className="py-20">
          <RecommendationGrid
            title="Spiritual Temples"
            description="Explore sacred spaces that blend architectural marvels with spiritual significance"
            items={templeRecommendations}
          />
        </section>

        <section className="bg-secondary/50 py-20">
          <RecommendationGrid
            title="Destination Countries"
            description="Immerse yourself in diverse cultures, cuisines, and landscapes"
            items={countryRecommendations}
          />
        </section>

        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Discover personalized recommendations tailored to your travel style and preferences.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="/contact"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
