import { Button } from "@/components/ui/button";
import { Shield, QrCode } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              Government of Karnataka
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToServices} className="shadow-lg hover:shadow-xl transition-shadow">
                {t.exploreServices}
              </Button>
              <Button size="lg" variant="outline">
                <QrCode className="mr-2 h-5 w-5" />
                {t.scanQR}
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">{t.registeredUsers}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">11+</div>
                <div className="text-sm text-muted-foreground">{t.activeServices}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">{t.emergencyResponse}</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform shadow-xl">
                <QrCode className="h-32 w-32 text-white" />
              </div>
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform shadow-xl">
                <Shield className="h-32 w-32 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
