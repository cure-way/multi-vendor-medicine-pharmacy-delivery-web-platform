"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type {
  PharmacySignUpStep,
  PharmacyInfoFormData,
  PharmacyLicenseFormData,
} from "@/types/auth";
import {
  AuthShell,
  AuthHero,
  AuthDivider,
  SocialButton,
  AuthUserTypeSwitch,
  type UserType,
} from "@/components/auth";
import {
  PharmacyStepper,
  PharmacyInfoForm,
  PharmacyLicenseForm,
  PharmacyAccountForm,
} from "@/components/auth/pharmacy";

// Step-specific hero content configuration
const PHARMACY_SIGNUP_STEP_CONTENT: Record<
  PharmacySignUpStep,
  { heroTitle: string; heroSubtitle: string; activeSlide: number }
> = {
  "pharmacy-info": {
    heroTitle: "Your Health Our Priority",
    heroSubtitle:
      "Trusted access to the medicine you need safely and effortlessly.",
    activeSlide: 0,
  },
  license: {
    heroTitle: "Verified & Trusted",
    heroSubtitle:
      "We ensure all pharmacies meet the highest standards of quality and compliance.",
    activeSlide: 1,
  },
  account: {
    heroTitle: "Wellness Delivered",
    heroSubtitle:
      "Fast, reliable delivery that brings essential care right to your home.",
    activeSlide: 2,
  },
};

export function PharmacySignUpForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<UserType>("pharmacist");
  const [currentStep, setCurrentStep] =
    useState<PharmacySignUpStep>("pharmacy-info");

  // Form data state
  const [pharmacyInfo, setPharmacyInfo] = useState<
    Partial<PharmacyInfoFormData>
  >({});
  const [licenseInfo, setLicenseInfo] = useState<
    Partial<PharmacyLicenseFormData>
  >({});

  // Get current step's hero content
  const currentHeroContent = useMemo(
    () => PHARMACY_SIGNUP_STEP_CONTENT[currentStep],
    [currentStep],
  );

  // Handle user type switch
  const handleUserTypeChange = (type: UserType) => {
    setUserType(type);
    if (type === "patient") {
      router.push("/auth/sign-up");
    }
  };

  const handleGoogleSignUp = () => {
    // TODO: Implement Google OAuth
    console.log("Google Sign Up for Pharmacy");
  };

  // Step handlers
  const handlePharmacyInfoSubmit = (data: PharmacyInfoFormData) => {
    console.log("Pharmacy Info:", data);
    setPharmacyInfo(data);
    setCurrentStep("license");
  };

  const handleLicenseSubmit = (data: PharmacyLicenseFormData) => {
    console.log("License Info:", data);
    setLicenseInfo(data);
    setCurrentStep("account");
  };

  const handleAccountSubmit = async (data: unknown) => {
    setIsLoading(true);

    try {
      // Combine all form data
      const fullFormData = {
        pharmacyInfo,
        license: licenseInfo,
        account: data,
      };

      console.log("Full Pharmacy Sign Up Data:", fullFormData);

      // TODO: Implement actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // On success, redirect to registration submitted page
      router.push("/auth/registration-submitted");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep === "license") {
      setCurrentStep("pharmacy-info");
    } else if (currentStep === "account") {
      setCurrentStep("license");
    }
  };

  // Render the appropriate form based on current step
  const renderStepForm = () => {
    switch (currentStep) {
      case "pharmacy-info":
        return (
          <PharmacyInfoForm
            defaultValues={pharmacyInfo}
            onSubmit={handlePharmacyInfoSubmit}
            isLoading={isLoading}
          />
        );
      case "license":
        return (
          <PharmacyLicenseForm
            defaultValues={licenseInfo}
            onSubmit={handleLicenseSubmit}
            onBack={handleBack}
            isLoading={isLoading}
          />
        );
      case "account":
        return (
          <PharmacyAccountForm
            onSubmit={handleAccountSubmit}
            onBack={handleBack}
            isLoading={isLoading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AuthShell
      hero={
        <AuthHero
          imageSrc="/auth/image_1.jpg"
          title={currentHeroContent.heroTitle}
          subtitle={currentHeroContent.heroSubtitle}
          activeSlide={currentHeroContent.activeSlide}
          totalSlides={3}
        />
      }
    >
      <div className="flex flex-col items-center flex-1 gap-6 px-6 py-12">
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

          {/* Google Sign Up */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <SocialButton
              provider="google"
              onClick={handleGoogleSignUp}
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
            className="mb-6"
          >
            <AuthUserTypeSwitch
              value={userType}
              onChange={handleUserTypeChange}
            />
          </motion.div>

          {/* Stepper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mb-6"
          >
            <PharmacyStepper currentStep={currentStep} />
          </motion.div>

          {/* Step Form */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepForm()}
          </motion.div>

          {/* Login link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-6 text-base"
          >
            <span className="text-[#797776]">Already have an account? </span>
            <Link
              href="/auth/pharmacy/sign-in"
              className="text-[#334eac] font-medium hover:underline"
            >
              Login Here
            </Link>
          </motion.p>
        </div>
      </div>
    </AuthShell>
  );
}
