import { motion } from "framer-motion";

export function PageShowing({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container flex flex-col items-center gap-8 mx-auto px-4 py-8"
    >
      {children}
    </motion.div>
  );
}

export function SectionShowing({ children }: any) {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-[#101E3C] rounded-xl shadow-lg w-full"
    >
      {children}
    </motion.section>
  );
}
