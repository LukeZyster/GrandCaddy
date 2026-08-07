import { Link } from "react-router-dom";
import { useState } from "react";
import { User, Mail } from "lucide-react";

import Hero from "../components/Hero";
import Toggle from "../components/Toggle";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

export default function SignUp() {

  const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

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
                Create Your Account
              </h1>

              <p className="mt-2 text-gray-500">
                Join GrandCaddy and start connecting today.
              </p>

            </div>

            <Toggle />

            <Input
  label="Full Name"
  placeholder="Enter your full name"
  icon={User}
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
/>

<Input
  label="Email Address"
  placeholder="Enter your email"
  icon={Mail}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<PasswordInput
  label="Password"
  placeholder="Create a password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

<PasswordInput
  label="Confirm Password"
  placeholder="Confirm your password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>
            <Button>
              Create Account →
            </Button>

            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <Link
  to="/login"
  className="font-semibold text-[#0B5FFF]"
>
  Sign In
</Link>
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}