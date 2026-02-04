"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { loginSchema, type LoginFormData } from "@/types/auth";
import {
  AuthShell,
  AuthHero,
  AuthDivider,
  SocialButton,
  AuthUserTypeSwitch,
  type UserType,
} from "@/components/auth";
import {
  TextField,
  PasswordField,
  CheckboxField,
} from "@/components/ui/fields";
import { Button } from "@/components/shared";

/**
 * Main Sign In Page
 * Acts as a unified sign-in with user type toggle
 * Defaults to Patient view but allows switching to Pharmacy
 */
export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [globalError, setGlobalError] = useState("");
  const [userType, setUserType] = useState<UserType>("patient");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  // Handle user type switch
  const handleUserTypeChange = (type: UserType) => {
    setUserType(type);
    if (type === "pharmacist") {
      router.push("/auth/pharmacy/sign-in");
    }
  };

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setGlobalError("");

    try {
      // TODO: Implement actual login API call
      console.log("Login data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // On success, redirect based on user type
      router.push("/");
    } catch {
      setGlobalError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // TODO: Implement Google OAuth
    console.log("Google Sign In");
  };

  return (
    <AuthShell
      hero={
        <AuthHero
          imageSrc="/auth/image_1.jpg"
          title="Your Health Our Priority"
          subtitle="Trusted access to the medicine you need safely and effortlessly."
        />
      }
    >
      <div className="flex flex-col items-center justify-center flex-1 gap-6 px-6 py-12">
        <div className="w-full max-w-[560px]">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center mb-4"
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="CureWay Logo"
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-contain hover:opacity-80 transition-opacity"
                priority
              />
            </Link>
          </motion.div>

          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-2 items-center text-center mb-6"
          >
            <h1 className="text-4xl font-semibold">
              <span className="text-[#2e469b]">Welcome To </span>
              <span className="text-[#334eac] font-bold">CUREWAY</span>
            </h1>
            <p className="text-lg font-medium text-[#334eac]">
              Your trusted way to better health
            </p>
          </motion.div>

          {/* Google Sign In */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <SocialButton
              provider="google"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            />
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mb-6"
          >
            <AuthDivider text="or continue with form" />
          </motion.div>

          {/* User Type Switch */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <AuthUserTypeSwitch
              value={userType}
              onChange={handleUserTypeChange}
            />
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {globalError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 border border-red-200 rounded-lg"
              >
                <p className="text-sm text-red-600">{globalError}</p>
              </motion.div>
            )}

            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              error={errors.email?.message}
              {...register("email")}
            />

            <PasswordField
              label="Password"
              placeholder="Enter your password"
              autoComplete="current-password"
              error={errors.password?.message}
              {...register("password")}
            />

            <div className="flex items-center justify-between">
              <CheckboxField
                label={
                  <span className="text-sm text-gray-600">Remember me</span>
                }
                wrapperClassName="flex-row"
              />
              <Link
                href="/auth/forgot-password"
                className="text-sm text-[#334eac] hover:underline transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="bg-[#334eac] hover:bg-[#2e469b] text-white"
            >
              Sign in
            </Button>
          </motion.form>

          {/* Sign up link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-6 text-base"
          >
            <span className="text-[#797776]">Don&apos;t have an account? </span>
            <Link
              href="/auth/sign-up"
              className="text-[#334eac] font-medium hover:underline"
            >
              Sign Up
            </Link>
          </motion.p>
        </div>
      </div>
    </AuthShell>
  );
}
