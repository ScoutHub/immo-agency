import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Chart from "@/components/chart";

import { PageShowing, SectionShowing } from "@/components/page-animation";

export default function Profile() {
  return (
    <PageShowing>
      <h1 className="font-bold text-3xl text-blue-300">Profile</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SectionShowing>
            <div className="text-blue-300 flex flex-col gap-6 p-12">
              <h2 className="text-2xl font-semibold">Mes informations</h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="grid max-w-sm items-center gap-2">
                    <Label htmlFor="Nom">Nom</Label>
                    <Input
                      type="text"
                      id="Nom"
                      placeholder="John"
                      className="border-gray-400"
                    />
                  </div>
                  <div className="grid max-w-sm items-center gap-2">
                    <Label htmlFor="Prenom">Prénom</Label>
                    <Input
                      type="text"
                      id="Prenom"
                      placeholder="Doe"
                      className="border-gray-400"
                    />
                  </div>
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="Email">Email</Label>
                  <Input
                    type="email"
                    id="Email"
                    placeholder="johndoe@example.com"
                    className="border-gray-400"
                  />
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="Phone">Téléphone</Label>
                  <Input
                    type="tel"
                    id="Phone"
                    placeholder="0607080910"
                    className="border-gray-400"
                  />
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="w-full bg-[#1A2B4A] hover:bg-[#233756] text-gray-200 flex items-center justify-center gap-2">
                  <p>Mettre à jour</p>
                </Button>
              </motion.div>
            </div>
          </SectionShowing>
          <SectionShowing>
            <div className="text-blue-300 flex flex-col gap-6 p-12">
              <h2 className="text-2xl font-semibold">Confidentialité</h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="grid w-full items-center gap-2">
                    <Label htmlFor="Password">Ancien mot de passe</Label>
                    <Input
                      type="password"
                      id="Password"
                      placeholder=""
                      className="border-gray-400"
                    />
                  </div>
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="NewPassword">Nouveau mot de passe</Label>
                  <Input
                    type="password"
                    id="NewPassword"
                    placeholder=""
                    className="border-gray-400"
                  />
                </div>
                <div className="grid w-full items-center gap-2">
                  <Label htmlFor="ConfirmNewPassword">
                    Confirmation du mot de passe
                  </Label>
                  <Input
                    type="password"
                    id="ConfirmNewPassword"
                    placeholder=""
                    className="border-gray-400"
                  />
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="w-full bg-[#1A2B4A] hover:bg-[#233756] text-gray-200 flex items-center justify-center gap-2">
                  <p>Changer le mot de passe</p>
                </Button>
              </motion.div>
            </div>
          </SectionShowing>
        </div>
        <SectionShowing>
          <div className="text-blue-300 flex flex-col gap-6 p-12">
            <h2 className="text-2xl font-semibold text-center">Relevés</h2>
            <Chart />
          </div>
        </SectionShowing>
      </div>
    </PageShowing>
  );
}
