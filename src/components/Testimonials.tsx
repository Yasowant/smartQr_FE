import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Bangalore Resident",
    content: "This service saved my life during a medical emergency. The ambulance arrived within 10 minutes of my call. Truly remarkable!",
    avatar: "RK",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    content: "As a woman traveling alone, having quick access to women safety services gives me peace of mind. The QR code system is brilliant!",
    avatar: "PS",
    rating: 5
  },
  {
    name: "Vikram Reddy",
    role: "Business Owner",
    content: "When my shop faced an electrical emergency, I used this service to contact the electricity department. Fast response and professional service.",
    avatar: "VR",
    rating: 5
  },
  {
    name: "Anita Patil",
    role: "Teacher",
    content: "The one-stop solution for all emergency services. I've recommended this to all my friends and family. Karnataka is truly becoming safer!",
    avatar: "AP",
    rating: 5
  }
];

export function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonialsTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonialsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3 pt-2 border-t">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
