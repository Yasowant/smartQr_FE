import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  color: string;
}

export function ServiceCard({ icon: Icon, title, color }: ServiceCardProps) {
  return (
    <Card className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
      <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
        <div className={`p-4 rounded-full ${color} transition-transform group-hover:scale-110`}>
          <Icon className="h-12 w-12 text-white" />
        </div>
        <h3 className="text-center font-semibold text-sm">{title}</h3>
      </CardContent>
    </Card>
  );
}
