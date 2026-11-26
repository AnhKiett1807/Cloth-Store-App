import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data: ", { email, password });
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#FAFAFA] px-4 py-12">
      <Card className="w-full max-w-[420px] rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-lg">        {/* Header căn giữa 1 cột */}
        <div className="mb-8 flex flex-col items-center text-center">
          <Link
            to="/"
            className="mb-3 font-serif text-3xl font-bold tracking-[0.2em] text-black"
          >
            FASCO
          </Link>
          <h1 className="text-xl font-semibold text-zinc-900">
            Welcome back
          </h1>
          <p className="mt-1.5 text-sm text-zinc-500">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sm font-medium text-zinc-800">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-lg border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 focus-visible:border-black focus-visible:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium text-zinc-800">
                Password
              </Label>
              <Link
                to="/forgot-password"
                className="text-xs font-medium text-zinc-500 hover:text-black hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 rounded-lg border-zinc-300 bg-white pl-3.5 pr-10 text-sm text-zinc-900 focus-visible:border-black focus-visible:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 border-0 bg-transparent p-0 text-zinc-400 hover:text-zinc-700"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Nút bấm tách biệt khỏi nền xám CardFooter */}
          <div className="mt-2 flex flex-col gap-3.5">
            <Button
              type="submit"
              style={{ backgroundColor: "#000000", color: "#ffffff" }}
              className="h-11 w-full rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
            >
              Sign In
            </Button>

            <div className="relative my-1 flex items-center justify-center">
              <span className="w-full border-t border-zinc-200" />
              <span className="bg-white px-3 text-xs uppercase text-zinc-400">
                Or
              </span>
              <span className="w-full border-t border-zinc-200" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="h-11 w-full rounded-lg border border-zinc-300 bg-white text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Continue with Google
            </Button>
          </div>

          <p className="mt-2 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-black underline-offset-4 hover:underline"
            >
              Register now
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;