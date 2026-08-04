import Hero from "../components/Hero";
import Toggle from "../components/Toggle";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

import { Mail } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#F8F9FC]">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* Left Side */}
        <section className="flex items-center px-12 py-16">
          <Hero />
        </section>

        {/* Right Side */}
        <section className="flex items-center justify-center px-8 py-16">

          <div className="w-full max-w-md space-y-8">

            <div>
              <h1 className="text-4xl font-bold">
                Welcome Back
              </h1>

              <p className="mt-2 text-gray-500">
                Choose your account type to continue.
              </p>
            </div>

            <Toggle />

            <Input
              label="Email Address"
              placeholder="Enter your email"
              icon={Mail}
            />

            <PasswordInput />

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                Remember me
              </label>

              <button className="text-[#0B5FFF] font-semibold">
                Forgot Password?
              </button>

            </div>

            <Button>
              Sign In →
            </Button>

            <p className="text-center text-gray-500">
              Don't have an account?{" "}
              <span className="font-semibold text-[#0B5FFF] cursor-pointer">
                Sign up
              </span>
            </p>

          </div>

        </section>
      </div>
    </main>
  );
}