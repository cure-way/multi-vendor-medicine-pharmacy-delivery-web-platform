/**
 * Field Styles - Single source of truth for all input styling
 * Based on the baseline from /auth/pharmacy/sign-up
 */

/**
 * Base input container classes
 * Height: 48px, rounded-xl, border, white bg
 */
export const fieldInputBase = [
  "w-full h-12 px-4 rounded-xl border bg-white",
  "transition-all duration-200",
  "text-base text-gray-900",
  "placeholder:text-[#a29e9d]",
  "focus:outline-none focus:ring-2 focus:ring-[#334eac]/20 focus:border-[#334eac]",
  "disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60",
].join(" ");

/**
 * Input with right icon (password eye, etc.) - adds right padding
 */
export const fieldInputWithIcon = "pr-12";

/**
 * Select-specific classes (appearance-none + chevron padding)
 */
export const fieldSelectClasses = [
  fieldInputBase,
  "pr-10 appearance-none cursor-pointer",
].join(" ");

/**
 * Label classes
 */
export const fieldLabelClasses = "text-sm font-medium text-gray-700";

/**
 * Error message classes (with animation)
 */
export const fieldErrorClasses = "text-xs text-red-500";

/**
 * Helper/hint text classes
 */
export const fieldHintClasses = "text-xs text-gray-500";

/**
 * Field wrapper classes (vertical stack with gap)
 */
export const fieldWrapperClasses = "flex flex-col gap-1.5 w-full";

/**
 * Error border state
 */
export const fieldErrorBorder = "border-red-500";

/**
 * Default border state
 */
export const fieldDefaultBorder = "border-gray-200";

/**
 * Icon button inside input (password toggle, etc.)
 */
export const fieldIconButton = [
  "absolute right-4 top-1/2 -translate-y-1/2",
  "text-[#797776] hover:text-[#334eac] transition-colors p-1",
].join(" ");

/**
 * Vertical gap between form fields
 */
export const fieldGap = "gap-5";

/**
 * Phone field container classes
 */
export const phoneFieldContainer = [
  "flex items-center h-12 rounded-xl border bg-white",
  "transition-all duration-200",
  "focus-within:ring-2 focus-within:ring-[#334eac]/20 focus-within:border-[#334eac]",
].join(" ");

/**
 * Phone field country selector button
 */
export const phoneFieldCountryButton = [
  "flex items-center gap-1 h-full px-3 text-sm text-gray-700",
  "hover:bg-gray-50 transition-colors rounded-l-xl",
].join(" ");

/**
 * Phone field divider
 */
export const phoneFieldDivider = "w-px h-6 bg-gray-200";

/**
 * Phone field number input
 */
export const phoneFieldInput = [
  "flex-1 h-full px-3 text-sm text-gray-900 bg-transparent outline-none rounded-r-xl",
  "placeholder:text-gray-400",
].join(" ");

/**
 * Dropdown styles
 */
export const fieldDropdownClasses = [
  "absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200",
  "rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto",
].join(" ");

/**
 * Dropdown item classes
 */
export const fieldDropdownItem = [
  "flex items-center gap-2 w-full px-3 py-2 text-sm text-left",
  "hover:bg-gray-100 transition-colors",
].join(" ");

/**
 * Checkbox classes (for terms/agreements)
 */
export const fieldCheckboxClasses = [
  "w-5 h-5 rounded border-gray-300",
  "text-[#334eac] focus:ring-[#334eac] focus:ring-offset-0",
  "cursor-pointer",
].join(" ");

/**
 * File upload area classes
 */
export const fieldFileUploadClasses = [
  "flex flex-col items-center justify-center gap-3 h-32",
  "rounded-xl border-2 border-dashed transition-all duration-200 cursor-pointer",
  "hover:bg-[#f8f9fc] hover:border-[#334eac]",
  "border-gray-200",
].join(" ");
