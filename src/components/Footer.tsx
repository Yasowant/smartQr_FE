import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold">{t.appName}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.aboutDesc}
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t.about}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t.services}</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">{t.howItWorks}</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">{t.testimonials}</a></li>
            </ul>
          </div>

          {/* Emergency Services */}
          <div>
            <h3 className="font-semibold mb-4">{t.emergencyNumbers}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                {t.police}: 100
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                {t.fire}: 101
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                {t.ambulance}: 108
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                {t.womenHelpline}: 1091
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                {t.childHelpline}: 1098
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t.contactUs}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>Government of Karnataka, Vidhana Soudha, Bengaluru - 560001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{t.phone}: +91 80 2222 2222</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>{t.email}: support@karnatakasfety.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 {t.appName}. {t.allRights}</p>
          <p>Government of Karnataka</p>
        </div>
      </div>
    </footer>
  );
}
