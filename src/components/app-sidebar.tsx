import { Home, Settings, LogOut, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";

const items = [
  {
    title: "Accueil",
    url: "/",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Paramètres",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Sidebar className="border-none h-full">
        <SidebarContent className="bg-[#101E3C] text-gray-100 border-r border-[#2C3E50]">
          <SidebarGroup className="h-full">
            <SidebarHeader className="font-bold text-center text-2xl text-blue-300 py-4 border-b border-[#2C3E50]">
              XYZ
            </SidebarHeader>
            <SidebarGroupContent className="mt-16">
              <SidebarMenu className="p-4 gap-3">
                {items.map((item, index) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      <SidebarMenuItem
                        className={`rounded-lg ${
                          isActive ? "border-l-4 border-blue-300" : ""
                        }`}
                      >
                        <SidebarMenuButton
                          asChild
                          className="hover:bg-[#1A2B4A] hover:text-blue-300"
                        >
                          <Link
                            to={item.url}
                            className={`font-semibold flex items-center gap-3 w-full p-2 ${
                              isActive
                                ? "text-blue-300 font-bold"
                                : "text-gray-200"
                            }`}
                          >
                            <item.icon
                              className={`${
                                isActive ? "text-blue-300" : "text-gray-400"
                              }`}
                            />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </motion.div>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarFooter className="mt-auto p-4 border-t border-[#2C3E50]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="w-full bg-[#1A2B4A] hover:bg-[#233756] text-gray-200 flex items-center justify-center gap-2">
                  <LogOut className="text-blue-300" />
                  <p>Déconnexion</p>
                </Button>
              </motion.div>
            </SidebarFooter>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </motion.div>
  );
}
