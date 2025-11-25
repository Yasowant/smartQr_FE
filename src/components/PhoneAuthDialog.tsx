import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

interface PhoneAuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PhoneAuthDialog({ open, onOpenChange }: PhoneAuthDialogProps) {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  const handleSendOTP = () => {
    if (phoneNumber.length === 10) {
      setStep("otp");
      toast({
        title: "OTP Sent",
        description: "Check your phone for the verification code",
      });
    } else {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      toast({
        title: "Success",
        description: "Login successful!",
      });
      onOpenChange(false);
      setStep("phone");
      setPhoneNumber("");
      setOtp("");
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {step === "phone" ? t.loginRegister : t.verifyOTP}
          </DialogTitle>
        </DialogHeader>
        
        {step === "phone" ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t.phoneNumber}</Label>
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
                  placeholder={t.phonePlaceholder}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  maxLength={10}
                />
              </div>
            </div>
            <Button onClick={handleSendOTP} className="w-full">
              {t.sendOTP}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">{t.enterOTP}</Label>
              <Input
                id="otp"
                type="text"
                placeholder={t.otpPlaceholder}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                maxLength={6}
                className="text-center text-2xl tracking-widest"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep("phone")} className="flex-1">
                {t.phoneNumber}
              </Button>
              <Button onClick={handleVerifyOTP} className="flex-1">
                {t.verify}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
