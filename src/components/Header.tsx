import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { LoginDialog } from "@/components/LoginDialog";
import { RegisterDialog } from "@/components/RegisterDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

export function Header() {
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-lg font-bold">{t.appName}</h1>
                <p className="text-xs text-muted-foreground">{t.appSubtitle}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
                {t.services}
              </button>
              <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-primary transition-colors">
                {t.howItWorks}
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium hover:text-primary transition-colors">
                {t.testimonials}
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
                {t.contact}
              </button>
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
              <Button onClick={() => setLoginDialogOpen(true)} variant="outline" className="hidden md:inline-flex">
                {t.login || "Login"}
              </Button>
              <Button onClick={() => setRegisterDialogOpen(true)} className="hidden md:inline-flex">
                {t.register || "Register"}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                {t.services}
              </button>
              <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                {t.howItWorks}
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                {t.testimonials}
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors text-left">
                {t.contact}
              </button>
              <div className="flex gap-2">
                <Button onClick={() => setLoginDialogOpen(true)} variant="outline" className="flex-1">
                  {t.login || "Login"}
                </Button>
                <Button onClick={() => setRegisterDialogOpen(true)} className="flex-1">
                  {t.register || "Register"}
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <LoginDialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen} />
      <RegisterDialog open={registerDialogOpen} onOpenChange={setRegisterDialogOpen} />
    </>
  );
}
