import { motion, AnimatePresence } from "framer-motion";

import { Search, Filter, List, Map } from "lucide-react";

import CardItem from "../components/card-item";
import SelectboxFilter from "../components/selectbox-filter";
import { Input } from "@/components/ui/input";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import SkeletonCard from "../components/skeleton-item";
import { PageShowing } from "../components/page-animation";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="text-gray-100">
      <PageShowing>
        <motion.section
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex flex-col md:flex-row items-center gap-4 mb-8 bg-[#101E3C] rounded-xl p-4 shadow-lg"
        >
          <div className="flex gap-3 items-center ">
            <SelectboxFilter />
            <Input
              placeholder="Paris"
              className="bg-[#162242] text-gray-200 border-[#2C3E50]"
            />
            <Button
              variant="outline"
              className="bg-[#1A2B4A] text-gray-200 hover:bg-[#233756] border-none"
            >
              <Search className="text-blue-300" />
            </Button>
            <Button className="rounded-full bg-[#1A2B4A] text-gray-200 hover:bg-[#233756] flex items-center gap-2">
              <Filter className="text-blue-300" />
              <p>Filtres (3)</p>
            </Button>
          </div>
          <Tabs defaultValue="list" className="md:ml-auto mt-4 md:mt-0">
            <TabsList className="bg-[#162242]">
              <TabsTrigger
                value="list"
                className="data-[state=active]:bg-blue-800 text-gray-300"
              >
                <List size={18} />
                <p>Liste</p>
              </TabsTrigger>
              <TabsTrigger
                value="map"
                className="data-[state=active]:bg-blue-800 text-gray-300"
              >
                <Map size={18} />
                <p>Carte</p>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="px-4"
        >
          <div className="text-left mb-6">
            <motion.h3
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="font-bold text-3xl text-blue-300"
            >
              Biens en vente à LYON
            </motion.h3>
            <motion.h4
              initial={{ x: -30 }}
              animate={{ x: 0 }}
              className="font-semibold text-gray-400"
            >
              32 Résultats à votre recherche
            </motion.h4>
          </div>
          {loading ? (
            <AnimatePresence>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <SkeletonCard />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <CardItem />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}
        </motion.section>
      </PageShowing>
    </div>
  );
}
