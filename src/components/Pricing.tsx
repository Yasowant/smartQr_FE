import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export const Pricing = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    t.accessAllServices,
    t.prioritySupport,
    t.instantAlerts,
    t.familySharing,
    t.offlineAccess,
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.pricingTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.pricingSubtitle}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-2 border-primary shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t.basicPlan}</CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-bold">₹99</span>
                <span className="text-muted-foreground">{t.perMonth}</span>
              </div>
              <CardDescription className="mt-2">
                {t.monthlyBilling}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                {t.getStarted}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
