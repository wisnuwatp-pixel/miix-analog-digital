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
      className="min-h-screen flex flex-col bg-miix-milk miix-grid-bg"
    >
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="mb-6 inline-flex items-center gap-2 border-2 border-miix-coffee bg-miix-oat px-3 py-1.5">
          <Terminal className="h-3.5 w-3.5" />
          <span className="miix-font-mono text-xs font-medium uppercase tracking-wider">
            Error 404
          </span>
        </div>
        <h1 className="text-[8rem] font-black leading-none text-miix-coffee">
          404
        </h1>
        <p className="mt-2 text-sm font-bold uppercase tracking-wider text-miix-coffee/60">
          Page Not Found
        </p>
        <p className="miix-font-mono mt-4 text-xs text-miix-coffee/40">
          → The requested path does not exist in this system.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 border-2 border-miix-coffee bg-miix-coffee px-6 py-3 text-xs font-bold uppercase tracking-wider text-miix-milk transition-all hover:bg-miix-cyan hover:text-miix-coffee hover:border-miix-cyan hover:shadow-[4px_4px_0px_#2c1a0e]"
        >
          Return Home
        </button>
      </div>
    </motion.div>
  );
}
