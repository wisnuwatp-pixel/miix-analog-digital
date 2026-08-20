import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col miix-grad-hero miix-grid-bg"
    >
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-miix-cyan/15 bg-miix-cyan/5 px-3 py-1.5">
          <Terminal className="h-3.5 w-3.5 text-miix-cyan" />
          <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
            Error 404
          </span>
        </div>
        <h1 className="text-[8rem] font-black leading-none text-miix-milk/10">
          404
        </h1>
        <p className="mt-2 text-sm font-bold uppercase tracking-wider text-miix-milk/40">
          Page Not Found
        </p>
        <p className="miix-font-mono mt-4 text-xs text-miix-milk/20">
          → The requested path does not exist in this system.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 rounded-md border border-miix-cyan/30 bg-miix-cyan/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-miix-cyan transition-all hover:bg-miix-cyan hover:text-miix-cream hover:border-miix-cyan hover:shadow-[0_0_20px_#00dbc220]"
        >
          Return Home
        </button>
      </div>
    </motion.div>
  );
}
