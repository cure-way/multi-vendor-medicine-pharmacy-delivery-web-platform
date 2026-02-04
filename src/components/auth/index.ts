/**
 * Auth Components Index
 * Re-exports all auth-related components for easier imports
 */

// Shared layout components
export { AuthLayout, type AuthLayoutProps } from "./AuthLayout";
export { AuthShell, type AuthShellProps } from "./AuthShell";
export { AuthHero, type AuthHeroProps } from "./AuthHero";
export { AuthCard, type AuthCardProps } from "./AuthCard";

// UI components
export { AuthDivider, type AuthDividerProps } from "./AuthDivider";
export { SocialButton, type SocialButtonProps } from "./SocialButton";
export {
  AuthUserTypeSwitch,
  type AuthUserTypeSwitchProps,
  type UserType,
} from "./AuthUserTypeSwitch";
export {
  PasswordRequirements,
  type PasswordRequirement,
  type PasswordRequirementsProps,
} from "./PasswordRequirements";
