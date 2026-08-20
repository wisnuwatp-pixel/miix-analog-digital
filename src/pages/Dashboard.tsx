import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import {
  Terminal,
  LogOut,
  Layers,
  BarChart3,
  Activity,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-miix-milk text-miix-coffee">
      {/* Top Bar */}
      <nav className="border-b-2 border-miix-coffee bg-miix-oat">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center border-2 border-miix-coffee bg-miix-coffee">
              <span className="text-[10px] font-bold text-miix-milk miix-font-mono">
                M
              </span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Miix Studio
            </span>
            <span className="miix-font-mono text-[10px] text-miix-coffee/40">
              / dashboard
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="miix-font-mono hidden text-[10px] text-miix-cyan sm:inline">
              ● ONLINE
            </span>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer gap-2 border-2 border-miix-coffee bg-transparent text-xs font-bold uppercase tracking-wider hover:bg-miix-cyan hover:text-miix-coffee hover:border-miix-cyan"
              onClick={handleSignOut}
            >
              <LogOut className="size-3.5" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 border-2 border-miix-coffee bg-miix-oat px-3 py-1.5">
            <Terminal className="h-3.5 w-3.5" />
            <span className="miix-font-mono text-xs font-medium uppercase tracking-wider">
              System authenticated
            </span>
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tight">
            Welcome
            {user?.name ? `, ${user.name}` : ""}
          </h1>
          <p className="mt-2 text-sm text-miix-coffee/60">
            You are now inside the Miix Studio system.
          </p>
        </div>

        {/* Status Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Activity,
              label: "Status",
              value: "Active",
              color: "bg-miix-cyan",
            },
            {
              icon: Layers,
              label: "Mode",
              value: "Hybrid",
              color: "bg-miix-matcha",
            },
            {
              icon: BarChart3,
              label: "Projects",
              value: "—",
              color: "bg-miix-tea",
            },
            {
              icon: Settings,
              label: "Version",
              value: "1.0.0",
              color: "bg-miix-coffee",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="border-2 border-miix-coffee bg-miix-oat p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <div
                  className={`flex h-6 w-6 items-center justify-center ${card.color}`}
                >
                  <card.icon className="h-3 w-3 text-miix-milk" />
                </div>
                <span className="miix-font-mono text-[10px] font-bold uppercase tracking-wider text-miix-coffee/50">
                  {card.label}
                </span>
              </div>
              <p className="text-lg font-black uppercase tracking-tight">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Workspace Card */}
        <div className="border-2 border-miix-coffee bg-miix-oat p-8">
          <div className="mb-6 flex items-center gap-3 border-b-2 border-miix-coffee/20 pb-4">
            <Terminal className="h-4 w-4 text-miix-cyan" />
            <span className="miix-font-mono text-xs font-bold uppercase tracking-wider">
              Workspace
            </span>
          </div>
          <div className="miix-font-mono space-y-2 text-xs text-miix-coffee/60">
            <p>
              <span className="text-miix-cyan">$</span> miix dashboard
              --user={user?.name || "anonymous"}
            </p>
            <p>
              <span className="text-miix-cyan">$</span> load --projects
            </p>
            <p className="text-miix-coffee/40">
              → Ready. Your workspace is active.
            </p>
          </div>
          <div className="mt-6 border-t-2 border-miix-coffee/20 pt-6">
            <p className="text-sm text-miix-coffee/50">
              Replace this starter content with your product&apos;s authenticated
              experience. The route is protected and sign-in returns here by
              default.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
