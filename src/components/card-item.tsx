import { Heart, MapPin, Info } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "./ui/separator";

interface CardProps {
  city: string;
  badges: Array<string>;
  rendementBrut: number;
  rendementNet: number;
  price: number;
  image: string;
}

export default function CardItem({
  city,
  badges,
  rendementBrut,
  rendementNet,
  price,
  image,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex flex-col gap-4 rounded-2xl bg-[#162242] text-gray-200 border border-[#2C3E50] overflow-hidden">
        <div className="relative">
          <motion.img
            src={image}
            alt={`${city} maison`}
            className="w-full h-48 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute top-2 left-2 bg-[#1A2B4A]/70 px-2 py-1 flex items-center gap-1 rounded-full">
            <MapPin size={18} className="text-blue-300" />
            <span className="text-gray-200">{city}</span>
          </div>
          <Button
            className="absolute top-2 right-2 bg-transparent bg-[#1A2B4A] hover:bg-[#1A2B4A]/80"
            variant="ghost"
          >
            <Heart size={24} className="text-blue-300" />
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap justify-center w-full px-4 mb-3">
          {badges.map((badge, i) => (
            <Badge
              className="bg-[#1A2B4A] text-blue-300 hover:bg-[#1A2B4A]/20"
              key={`${badge} - ${i}`}
            >
              {badge}
            </Badge>
          ))}
        </div>

        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <p>Rendement brut</p>
              <Info size={16} className="text-blue-300" />
            </div>
            <p className="ml-auto text-blue-300">{rendementBrut}%</p>
          </div>
          <Separator className="bg-[#2C3E50]" />
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <p>Rendement net</p>
              <Info size={16} className="text-blue-300" />
            </div>
            <p className="ml-auto text-blue-300">{rendementNet}%</p>
          </div>
          <Separator className="bg-[#2C3E50]" />
        </CardContent>
        <CardFooter className="text-center">
          <h5 className="w-full font-semibold text-blue-300 text-xl">
            {Intl.NumberFormat("fr-FR").format(price)}€
          </h5>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
