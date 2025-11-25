import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages = [
  { code: "en" as Language, name: "English", nativeName: "English" },
  { code: "hi" as Language, name: "Hindi", nativeName: "हिन्दी" },
  { code: "kn" as Language, name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ta" as Language, name: "Tamil", nativeName: "தமிழ்" },
  { code: "te" as Language, name: "Telugu", nativeName: "తెలుగు" },
  { code: "ml" as Language, name: "Malayalam", nativeName: "മലയാളം" },
  { code: "bn" as Language, name: "Bengali", nativeName: "বাংলা" },
  { code: "mr" as Language, name: "Marathi", nativeName: "मराठी" },
  { code: "gu" as Language, name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "pa" as Language, name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" },
  { code: "ur" as Language, name: "Urdu", nativeName: "اردو" },
  { code: "od" as Language, name: "Odia", nativeName: "ଓଡ଼ିଆ" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-accent" : ""}
          >
            {lang.nativeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
