import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "./components/sidebar-trigger";
import { ThemeProvider } from "@/components/theme-provider";

import "./styles/index.css";

import Home from "./pages/Home.tsx";
import Profile from "./pages/profile.tsx";
import Settings from "./pages/settings.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <SidebarProvider className="bg-[#0A1128]">
          <AppSidebar />
          <main className="w-full">
            <SidebarTrigger />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
