/**
 * UI Fields - Unified Input System
 * Single source of truth for all form field styling
 * Based on the baseline from /auth/pharmacy/sign-up
 */

// Base styles
export * from "./fieldStyles";

// Field wrapper
export { Field, type FieldProps } from "./Field";

// Text inputs
export { TextField, type TextFieldProps } from "./TextField";
export { PasswordField, type PasswordFieldProps } from "./PasswordField";
export { TextareaField, type TextareaFieldProps } from "./TextareaField";

// Selection inputs
export {
  SelectField,
  type SelectFieldProps,
  type SelectFieldOption,
} from "./SelectField";
export { CheckboxField, type CheckboxFieldProps } from "./CheckboxField";

// Specialized inputs
export {
  PhoneField,
  type PhoneFieldProps,
  type PhoneFieldValue,
  type CountryCode,
  COUNTRIES,
} from "./PhoneField";
export { DateField, type DateFieldProps } from "./DateField";
export { FileField, type FileFieldProps } from "./FileField";
