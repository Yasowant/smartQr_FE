import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

interface RegisterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegisterDialog({ open, onOpenChange }: RegisterDialogProps) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phoneNumber || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    if (phoneNumber.length !== 10) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Registration successful!",
    });
    onOpenChange(false);
    setName("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t.register || "Register"}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t.name || "Name"}</Label>
            <Input
              id="name"
              type="text"
              placeholder={t.enterName || "Enter your name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{t.phoneNumber || "Phone Number"}</Label>
            <div className="flex gap-2">
              <Input
                id="country-code"
                value="+91"
                disabled
                className="w-16"
              />
              <Input
                id="phone"
                type="tel"
                placeholder={t.phonePlaceholder || "Enter 10-digit phone number"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                maxLength={10}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-password">{t.password || "Password"}</Label>
            <Input
              id="register-password"
              type="password"
              placeholder={t.enterPassword || "Enter your password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">{t.confirmPassword || "Confirm Password"}</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder={t.reEnterPassword || "Re-enter your password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            {t.register || "Register"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
