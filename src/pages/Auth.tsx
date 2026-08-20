import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { useAuth } from "@/hooks/use-auth";
import { ArrowRight, Loader2, Mail, UserX, Terminal } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

interface AuthProps {
  redirectAfterAuth?: string;
}

function resolveRedirectAfterAuth(
  returnTo: string | null,
  fallback = "/dashboard",
) {
  if (returnTo?.startsWith("/") && !returnTo.startsWith("//")) {
    return returnTo;
  }
  return fallback;
}

function Auth({ redirectAfterAuth }: AuthProps = {}) {
  const { isLoading: authLoading, isAuthenticated, signIn } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = resolveRedirectAfterAuth(
    searchParams.get("returnTo"),
    redirectAfterAuth,
  );
  const [step, setStep] = useState<"signIn" | { email: string }>("signIn");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      navigate(redirect);
    }
  }, [authLoading, isAuthenticated, navigate, redirect]);
  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      await signIn("email-otp", formData);
      setStep({ email: formData.get("email") as string });
      setIsLoading(false);
    } catch (error) {
      console.error("Email sign-in error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to send verification code. Please try again.",
      );
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      await signIn("email-otp", formData);

      console.log("signed in");

      navigate(redirect);
    } catch (error) {
      console.error("OTP verification error:", error);

      setError("The verification code you entered is incorrect.");
      setIsLoading(false);

      setOtp("");
    }
  };

  const handleGuestLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log("Attempting anonymous sign in...");
      await signIn("anonymous");
      console.log("Anonymous sign in successful");
      navigate(redirect);
    } catch (error) {
      console.error("Guest login error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      setError(`Failed to sign in as guest: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col miix-grad-hero miix-grid-bg">
      {/* Nav */}
      <nav className="border-b-2 border-miix-coffee/15 bg-miix-cream/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md border-2 border-miix-coffee bg-miix-coffee">
              <span className="text-[10px] font-bold text-miix-milk miix-font-mono">
                M
              </span>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Miix Studio
            </span>
          </button>
          <span className="miix-font-mono text-[10px] text-miix-coffee/40">
            v1.0.0
          </span>
        </div>
      </nav>

      {/* Auth Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-[400px]">
          {/* Terminal header */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-md border-2 border-miix-coffee/20 bg-miix-oat/80 px-3 py-1.5 backdrop-blur-sm">
            <Terminal className="h-3.5 w-3.5" />
            <span className="miix-font-mono text-xs font-medium uppercase tracking-wider">
              Auth Terminal
            </span>
          </div>

          <Card className="rounded-lg border-2 border-miix-coffee/20 shadow-[4px_4px_0px_#2a1810]/20 bg-miix-cream/90 backdrop-blur-sm">
            {step === "signIn" ? (
              <>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg font-black uppercase tracking-wider">
                    Access System
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Enter your email to authenticate
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleEmailSubmit}>
                  <CardContent>
                    <div className="relative flex items-center gap-2">
                      <div className="relative flex-1">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-miix-coffee/40" />
                        <Input
                          name="email"
                          placeholder="name@example.com"
                          type="email"
                          className="pl-9 rounded-md border-2 border-miix-coffee/20 bg-miix-oat/60 focus:border-miix-cyan focus:ring-0"
                          disabled={isLoading}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="outline"
                        size="icon"
                        disabled={isLoading}
                        className="rounded-md border-2 border-miix-coffee bg-miix-coffee text-miix-milk hover:bg-miix-cyan hover:text-miix-coffee hover:border-miix-cyan shrink-0"
                      >
                        {isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {error && (
                      <p className="mt-2 text-sm text-miix-destructive font-medium">
                        {error}
                      </p>
                    )}
                    <div className="mt-4">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t-2 border-miix-coffee/20" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-miix-milk px-2 text-miix-coffee/40 miix-font-mono">
                            OR
                          </span>
                        </div>
                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        className="w-full mt-4 rounded-md border-2 border-miix-coffee/20 bg-transparent hover:bg-miix-oat/60"
                        onClick={handleGuestLogin}
                        disabled={isLoading}
                      >
                        <UserX className="mr-2 h-4 w-4" />
                        Continue as Guest
                      </Button>
                    </div>
                  </CardContent>
                </form>
              </>
            ) : (
              <>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg font-black uppercase tracking-wider">
                    Verify Code
                  </CardTitle>
                  <CardDescription className="text-xs">
                    We've sent a code to {step.email}
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleOtpSubmit}>
                  <CardContent className="pb-4">
                    <input type="hidden" name="email" value={step.email} />
                    <input type="hidden" name="code" value={otp} />

                    <div className="flex justify-center">
                      <InputOTP
                        value={otp}
                        onChange={setOtp}
                        maxLength={6}
                        disabled={isLoading}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && otp.length === 6 && !isLoading) {
                            const form = (e.target as HTMLElement).closest("form");
                            if (form) {
                              form.requestSubmit();
                            }
                          }
                        }}
                      >
                        <InputOTPGroup>
                          {Array.from({ length: 6 }).map((_, index) => (
                            <InputOTPSlot key={index} index={index} />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    {error && (
                      <p className="mt-2 text-sm text-miix-destructive text-center font-medium">
                        {error}
                      </p>
                    )}
                    <p className="text-xs text-miix-coffee/50 text-center mt-4">
                      Didn't receive a code?{" "}
                      <Button
                        variant="link"
                        className="p-0 h-auto text-miix-cyan hover:text-miix-cyan/80"
                        onClick={() => setStep("signIn")}
                      >
                        Try again
                      </Button>
                    </p>
                  </CardContent>
                  <CardFooter className="flex-col gap-2">
                    <Button
                      type="submit"
                      className="w-full rounded-md border-2 border-miix-coffee bg-miix-coffee text-miix-milk hover:bg-miix-cyan hover:text-miix-coffee hover:border-miix-cyan font-bold uppercase tracking-wider text-xs"
                      disabled={isLoading || otp.length !== 6}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          Verify Code
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setStep("signIn")}
                      disabled={isLoading}
                      className="w-full text-xs"
                    >
                      Use different email
                    </Button>
                  </CardFooter>
                </form>
              </>
            )}

            <div className="py-3 px-6 text-[10px] text-center text-miix-coffee/40 bg-miix-oat/60 border-t-2 border-miix-coffee/10 miix-font-mono uppercase tracking-wider rounded-b-lg">
              Secured by Miix Studio
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage(props: AuthProps) {
  return (
    <Suspense>
      <Auth {...props} />
    </Suspense>
  );
}
