"use client";

import { InputHTMLAttributes, forwardRef, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fieldErrorClasses,
  fieldHintClasses,
  fieldCheckboxClasses,
} from "./fieldStyles";

export interface CheckboxFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  /** Label text (required for checkbox) */
  label: string | React.ReactNode;
  /** Hint/helper text */
  hint?: string;
  /** Error message */
  error?: string;
  /** Additional wrapper class names */
  wrapperClassName?: string;
}

/**
 * CheckboxField - Standardized checkbox field
 * Matches the baseline styling from pharmacy sign-up
 */
export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  (
    {
      label,
      hint,
      error,
      id: providedId,
      className,
      wrapperClassName,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const fieldId = providedId || generatedId;
    const errorId = `${fieldId}-error`;
    const hintId = `${fieldId}-hint`;

    return (
      <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            ref={ref}
            id={fieldId}
            type="checkbox"
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : hint ? hintId : undefined}
            className={cn(
              fieldCheckboxClasses,
              "mt-0.5",
              disabled && "cursor-not-allowed opacity-60",
              className,
            )}
            {...props}
          />
          <span
            className={cn(
              "text-sm text-gray-700 select-none",
              disabled && "opacity-60",
            )}
          >
            {label}
          </span>
        </label>

        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              id={errorId}
              className={cn(fieldErrorClasses, "ml-8")}
              role="alert"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {hint && !error && (
          <p id={hintId} className={cn(fieldHintClasses, "ml-8")}>
            {hint}
          </p>
        )}
      </div>
    );
  },
);

CheckboxField.displayName = "CheckboxField";

export default CheckboxField;
