import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useSidebar } from "@/components/ui/sidebar";

export function SidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <motion.button
      onClick={toggleSidebar}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="m-2 bg-[#1A2B4A] p-2 rounded-full shadow-lg"
    >
      <Menu className="text-blue-300" size={24} />
    </motion.button>
  );
}
