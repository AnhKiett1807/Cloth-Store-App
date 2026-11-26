import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please check again.");
      return;
    }
    console.log("Register Data:", formData);
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#FAFAFA] px-4 py-12">
      <Card className="w-full max-w-[440px] rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-lg">        {/* Header căn giữa 1 cột */}
        <div className="mb-8 flex flex-col items-center text-center">
          <Link
            to="/"
            className="mb-3 font-serif text-3xl font-bold tracking-[0.2em] text-black"
          >
            FASCO
          </Link>
          <h1 className="text-xl font-semibold text-zinc-900">
            Create an account
          </h1>
          <p className="mt-1.5 text-sm text-zinc-500">
            Join FASCO to unlock exclusive collections and offers
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-zinc-800">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="Nguyen Van A"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="h-11 rounded-lg border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 focus-visible:border-black focus-visible:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sm font-medium text-zinc-800">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="h-11 rounded-lg border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 focus-visible:border-black focus-visible:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-sm font-medium text-zinc-800">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                required
                value={formData.password}
                onChange={handleChange}
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

          <div className="flex flex-col gap-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-zinc-800">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="h-11 rounded-lg border-zinc-300 bg-white px-3.5 text-sm text-zinc-900 focus-visible:border-black focus-visible:ring-0"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs font-medium text-red-600">
              {error}
            </div>
          )}

          <Button
            type="submit"
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
            className="mt-3 h-11 w-full rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
          >
            Create Account
          </Button>

          <p className="mt-2 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-black underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;