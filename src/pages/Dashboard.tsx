import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import {
  Terminal,
  LogOut,
  Upload,
  Heart,
  Send,
  Image,
  Settings,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import {
  ProgressBarIcon,
  RunningManIcon,
  FolderIcon,
  ChatBubbleIcon,
  FloppyIcon,
  CDDiscIcon,
} from "@/components/Y2KIcons";
import { useState } from "react";
import { useNavigate } from "react-router";

const samplePosts = [
  {
    id: 1,
    author: "Krit M.",
    time: "2h ago",
    content: "เพิ่งจะเข้าใจว่าทำไม Analog思考 ถึงสำคัญกับ Digital design — มันคือรากฐานที่ทำให้เราไม่หลงทางตามกระแส",
    likes: 24,
    comments: 8,
    tag: "Insight",
  },
  {
    id: 2,
    author: "Ploy S.",
    time: "5h ago",
    content: "Grid system ที่ดีไม่ใช่แค่การจัดวาง แต่คือการคิดที่เป็นระบบ — ทุกองค์ประกอบมีเหตุผล",
    likes: 41,
    comments: 12,
    tag: "Design",
  },
  {
    id: 3,
    author: "Tong K.",
    time: "1d ago",
    content: " Finished a project using the Miix philosophy — Function before Decoration. ผลลัพธ์คืองานที่ทั้งสวยและใช้งานได้จริง",
    likes: 67,
    comments: 19,
    tag: "Project",
  },
];

const messages = [
  { from: "Krit M.", text: "ลองดู project ใหม่ที่ทำอยู่นะ", time: "10m", unread: true },
  { from: "Ploy S.", text: "เรื่อง Grid system ที่คุยกัน", time: "1h", unread: false },
  { from: "System", text: "ยินดีต้อนรับสู่ Miix Analog Digital", time: "2h", unread: false },
];

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"feed" | "messages">("feed");
  const [newPost, setNewPost] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <main className="min-h-screen text-miix-coffee">
      {/* Top Bar */}
      <nav className="border-b border-miix-cyan/10 bg-miix-cream/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-miix-cyan/30 bg-miix-cyan/10">
              <span className="text-[10px] font-bold text-miix-cyan miix-font-mono">
                M
              </span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.15em]">
              Miix <span className="text-miix-cyan">Analog</span> Digital
            </span>
            <span className="miix-font-mono text-[10px] text-miix-milk/30">
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
              className="cursor-pointer gap-2 rounded-md border border-miix-cyan/20 bg-transparent text-xs font-bold uppercase tracking-wider text-miix-milk/60 hover:bg-miix-cyan/10 hover:text-miix-cyan hover:border-miix-cyan/30"
              onClick={handleSignOut}
            >
              <LogOut className="size-3.5" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-8 miix-grid-bg">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-md border border-miix-cyan/15 bg-miix-cyan/5 px-3 py-1.5">
            <Terminal className="h-3.5 w-3.5 text-miix-cyan" />
            <span className="miix-font-mono text-xs font-medium uppercase tracking-wider text-miix-cyan">
              System authenticated
            </span>
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-miix-milk">
            Welcome
            {user?.name ? `, ${user.name}` : ""}
          </h1>
          <p className="mt-2 text-sm text-miix-milk/40">
            Your workspace is active. Create, connect, and share.
          </p>
        </div>

        {/* Status Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ProgressBarIcon, label: "Status", value: "Active", color: "bg-miix-cyan" },
            { icon: RunningManIcon, label: "Followers", value: "128", color: "bg-miix-matcha" },
            { icon: FolderIcon, label: "Posts", value: "23", color: "bg-miix-honey" },
            { icon: ChatBubbleIcon, label: "Messages", value: "7", color: "bg-miix-terracotta" },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-miix-cyan/8 bg-miix-oat/60 p-5 transition-all hover:border-miix-cyan/20 hover:shadow-[0_0_15px_#00dbc210]"
            >
              <div className="mb-3 flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-md ${card.color}`}
                >
                  <card.icon size={18} />
                </div>
                <span className="miix-font-mono text-[10px] font-bold uppercase tracking-wider text-miix-milk/30">
                  {card.label}
                </span>
              </div>
              <p className="text-lg font-black uppercase tracking-tight text-miix-milk/90">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab("feed")}
            className={`rounded-md border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "feed"
                ? "border-miix-cyan/30 bg-miix-cyan/10 text-miix-cyan"
                : "border-miix-cyan/5 bg-transparent text-miix-milk/30 hover:text-miix-milk/50"
            }`}
          >
            <BarChart3 className="mr-2 inline h-3 w-3" />
            Feed
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`rounded-md border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "messages"
                ? "border-miix-cyan/30 bg-miix-cyan/10 text-miix-cyan"
                : "border-miix-cyan/5 bg-transparent text-miix-milk/30 hover:text-miix-milk/50"
            }`}
          >
            <MessageSquare className="mr-2 inline h-3 w-3" />
            Messages
            <span className="ml-2 rounded-full bg-miix-cyan/20 px-1.5 py-0.5 text-[9px] text-miix-cyan">
              1
            </span>
          </button>
        </div>

        {/* Content Area */}
        {activeTab === "feed" ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Post Composer + Feed */}
            <div className="lg:col-span-2 space-y-4">
              {/* Post Composer */}
              <div className="rounded-lg border border-miix-cyan/10 bg-miix-oat/60 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-miix-cyan/20 bg-miix-cyan/10 text-xs font-bold text-miix-cyan miix-font-mono">
                    {user?.name?.[0] || "M"}
                  </div>
                  <span className="text-xs text-miix-milk/40">
                    สร้างเนื้อหาใหม่...
                  </span>
                </div>
                <Input
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="What's on your mind?"
                  className="mb-4 rounded-md border border-miix-cyan/10 bg-miix-cream/80 text-miix-milk/70 placeholder:text-miix-milk/20 focus:border-miix-cyan/30 focus:ring-0"
                />
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 rounded-md border border-miix-cyan/8 bg-miix-cyan/3 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-miix-cyan/60 transition-all hover:bg-miix-cyan/10 hover:text-miix-cyan">
                      <Image className="h-3 w-3" />
                      Image
                    </button>
                    <button className="flex items-center gap-1 rounded-md border border-miix-cyan/8 bg-miix-cyan/3 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-miix-cyan/60 transition-all hover:bg-miix-cyan/10 hover:text-miix-cyan">
                      <Upload className="h-3 w-3" />
                      Upload
                    </button>
                  </div>
                  <button className="flex items-center gap-2 rounded-md border border-miix-cyan/30 bg-miix-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-miix-cyan transition-all hover:bg-miix-cyan hover:text-miix-cream">
                    <Send className="h-3 w-3" />
                    Post
                  </button>
                </div>
              </div>

              {/* Feed Posts */}
              {samplePosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-lg border border-miix-cyan/8 bg-miix-oat/60 p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-miix-cyan/15 bg-miix-cyan/5 text-xs font-bold text-miix-cyan/70 miix-font-mono">
                        {post.author[0]}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-miix-milk/80">
                          {post.author}
                        </p>
                        <p className="miix-font-mono text-[10px] text-miix-milk/25">
                          {post.time}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-md border border-miix-cyan/15 bg-miix-cyan/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-miix-cyan/60">
                      {post.tag}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-miix-milk/60">
                    {post.content}
                  </p>
                  <div className="flex items-center gap-4 border-t border-miix-cyan/5 pt-3">
                    <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-miix-milk/30 transition-colors hover:text-miix-terracotta">
                      <Heart className="h-3.5 w-3.5" />
                      {post.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-miix-milk/30 transition-colors hover:text-miix-cyan">
                      <MessageSquare className="h-3.5 w-3.5" />
                      {post.comments}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Quick Actions */}
              <div className="rounded-lg border border-miix-cyan/10 bg-miix-oat/60 p-6">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-miix-milk/60">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <button className="flex w-full items-center gap-3 rounded-md border border-miix-cyan/8 bg-miix-cyan/3 px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-miix-milk/50 transition-all hover:bg-miix-cyan/10 hover:text-miix-cyan">
                    <FloppyIcon size={16} />
                    Create New Post
                  </button>
                  <button className="flex w-full items-center gap-3 rounded-md border border-miix-cyan/8 bg-miix-cyan/3 px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-miix-milk/50 transition-all hover:bg-miix-cyan/10 hover:text-miix-cyan">
                    <ChatBubbleIcon size={16} />
                    Send Message
                  </button>
                  <button className="flex w-full items-center gap-3 rounded-md border border-miix-cyan/8 bg-miix-cyan/3 px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-miix-milk/50 transition-all hover:bg-miix-cyan/10 hover:text-miix-cyan">
                    <CDDiscIcon size={16} />
                    Settings
                  </button>
                </div>
              </div>

              {/* Terminal */}
              <div className="rounded-lg border border-miix-cyan/10 bg-miix-cream p-6">
                <div className="mb-4 flex items-center gap-2 border-b border-miix-cyan/10 pb-3">
                  <Terminal className="h-3.5 w-3.5 text-miix-cyan" />
                  <span className="miix-font-mono text-[10px] font-bold uppercase tracking-wider text-miix-cyan">
                    System Log
                  </span>
                </div>
                <div className="miix-font-mono space-y-1 text-[10px] text-miix-milk/30">
                  <p>
                    <span className="text-miix-matcha">$</span> miix
                    --user={user?.name || "anonymous"}
                  </p>
                  <p>
                    <span className="text-miix-matcha">$</span> load --feed
                    --messages
                  </p>
                  <p className="text-miix-cyan/40">
                    → System ready. All modules loaded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Messages View */
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Conversation List */}
            <div className="rounded-lg border border-miix-cyan/10 bg-miix-oat/60 p-4">
              <h3 className="mb-4 px-2 text-xs font-bold uppercase tracking-wider text-miix-milk/60">
                Conversations
              </h3>
              <div className="space-y-1">
                {messages.map((msg, i) => (
                  <button
                    key={i}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-left transition-all ${
                      msg.unread
                        ? "bg-miix-cyan/8 border border-miix-cyan/15"
                        : "border border-transparent hover:bg-miix-cyan/3"
                    }`}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-miix-cyan/15 bg-miix-cyan/5 text-xs font-bold text-miix-cyan/60 miix-font-mono">
                      {msg.from[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${msg.unread ? "text-miix-milk/80" : "text-miix-milk/50"}`}>
                          {msg.from}
                        </span>
                        <span className="miix-font-mono text-[9px] text-miix-milk/20">
                          {msg.time}
                        </span>
                      </div>
                      <p className="truncate text-[11px] text-miix-milk/30">
                        {msg.text}
                      </p>
                    </div>
                    {msg.unread && (
                      <div className="h-2 w-2 shrink-0 rounded-full bg-miix-cyan" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2 rounded-lg border border-miix-cyan/10 bg-miix-oat/60 flex flex-col">
              <div className="border-b border-miix-cyan/5 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-miix-cyan/15 bg-miix-cyan/5 text-xs font-bold text-miix-cyan/60 miix-font-mono">
                    K
                  </div>
                  <div>
                    <p className="text-xs font-bold text-miix-milk/80">Krit M.</p>
                    <p className="miix-font-mono text-[9px] text-miix-cyan/50">
                      ● Online
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 space-y-4">
                <div className="flex justify-start">
                  <div className="max-w-[70%] rounded-lg border border-miix-cyan/10 bg-miix-cream/80 px-4 py-3">
                    <p className="text-xs text-miix-milk/60">
                      ลองดู project ใหม่ที่ทำอยู่นะ — ใช้ philosophy ของ Miix เลย
                    </p>
                    <p className="miix-font-mono mt-1 text-[9px] text-miix-milk/20">
                      10m ago
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[70%] rounded-lg border border-miix-cyan/20 bg-miix-cyan/8 px-4 py-3">
                    <p className="text-xs text-miix-milk/60">
                      استفدتมาก — Function before Decoration ทำให้ work ง่ายขึ้นเยอะ
                    </p>
                    <p className="miix-font-mono mt-1 text-[9px] text-miix-milk/20">
                      8m ago
                    </p>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="border-t border-miix-cyan/5 p-4">
                <div className="flex items-center gap-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 rounded-md border border-miix-cyan/10 bg-miix-cream/80 text-miix-milk/70 placeholder:text-miix-milk/20 focus:border-miix-cyan/30 focus:ring-0"
                  />
                  <button className="flex h-10 w-10 items-center justify-center rounded-md border border-miix-cyan/30 bg-miix-cyan/10 text-miix-cyan transition-all hover:bg-miix-cyan hover:text-miix-cream">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
