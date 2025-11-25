import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetPhoneOrEmail, setResetPhoneOrEmail] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOrEmail || !password) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success",
      description: "Login successful!",
    });
    onOpenChange(false);
    setPhoneOrEmail("");
    setPassword("");
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetPhoneOrEmail) {
      toast({
        title: "Error",
        description: "Please enter your phone number or email",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success",
      description: "Password reset link sent!",
    });
    setShowForgotPassword(false);
    setResetPhoneOrEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {showForgotPassword ? (t.forgotPassword || "Forgot Password?") : (t.login || "Login")}
          </DialogTitle>
        </DialogHeader>
        
        {showForgotPassword ? (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reset-phone-email">{t.phoneOrEmail || "Phone Number or Email"}</Label>
              <Input
                id="reset-phone-email"
                type="text"
                placeholder={t.enterPhoneOrEmail || "Enter phone number or email"}
                value={resetPhoneOrEmail}
                onChange={(e) => setResetPhoneOrEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowForgotPassword(false)} 
                className="flex-1"
              >
                {t.back || "Back"}
              </Button>
              <Button type="submit" className="flex-1">
                {t.sendResetLink || "Send Reset Link"}
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone-email">{t.phoneOrEmail || "Phone Number or Email"}</Label>
              <Input
                id="phone-email"
                type="text"
                placeholder={t.enterPhoneOrEmail || "Enter phone number or email"}
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t.password || "Password"}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t.enterPassword || "Enter your password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              className="text-sm text-primary hover:underline"
            >
              {t.forgotPassword || "Forgot Password?"}
            </button>
            <Button type="submit" className="w-full">
              {t.login || "Login"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
