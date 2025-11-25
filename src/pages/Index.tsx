import {
  Phone,
  Shield,
  Flame,
  Zap,
  Ambulance,
  Droplet,
  Users,
  Building,
  Heart,
  Lock,
  Droplets,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    { icon: Shield, title: t.police, color: "bg-amber-600" },
    { icon: Flame, title: t.fire, color: "bg-red-600" },
    { icon: Ambulance, title: t.ambulance, color: "bg-blue-500" },
    { icon: Users, title: t.womenHelpline, color: "bg-pink-500" },
    { icon: Phone, title: t.childHelpline, color: "bg-purple-500" },
    { icon: Shield, title: t.disaster, color: "bg-orange-600" },
    { icon: Heart, title: t.medicalEmergency, color: "bg-rose-500" },
    { icon: Lock, title: t.cybercrime, color: "bg-indigo-600" },
    { icon: Building, title: t.trafficPolice, color: "bg-teal-500" },
    { icon: Zap, title: "Electric Department", color: "bg-orange-500" },
    { icon: Droplets, title: "Animal Rescue", color: "bg-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  color={service.color}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <Pricing />

      <Testimonials />

      <Footer />
    </div>
  );
};

export default Index;
