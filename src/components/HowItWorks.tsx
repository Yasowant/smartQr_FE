import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, QrCode, Shield, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const steps = [
  {
    icon: Smartphone,
    title: "Register Your Number",
    description: "Sign up with your mobile number using OTP verification for secure authentication.",
    color: "bg-blue-500"
  },
  {
    icon: QrCode,
    title: "Scan QR Code",
    description: "Scan the Karnataka Safety QR code available at public places across the state.",
    color: "bg-yellow-500"
  },
  {
    icon: Shield,
    title: "Access Services",
    description: "Choose from 11+ emergency and safety services including police, fire, ambulance, and more.",
    color: "bg-red-500"
  },
  {
    icon: CheckCircle,
    title: "Get Instant Help",
    description: "Connect directly with the service you need. Help is just a tap away, 24/7.",
    color: "bg-green-500"
  }
];

export function HowItWorks() {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      icon: Smartphone,
      title: t.step1Title,
      description: t.step1Desc,
      color: "bg-blue-500"
    },
    {
      icon: QrCode,
      title: t.step2Title,
      description: t.step2Desc,
      color: "bg-yellow-500"
    },
    {
      icon: Shield,
      title: t.step3Title,
      description: t.step3Desc,
      color: "bg-red-500"
    },
    {
      icon: CheckCircle,
      title: t.step4Title,
      description: t.step4Desc,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howItWorksTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.howItWorksSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`${step.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-muted-foreground/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
