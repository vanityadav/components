import cn from "@/utils/cn";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cva, type VariantProps } from "cva";

const inputVariants = cva({
  base: "flex items-center justify-center gap-4 disabled:cursor-not-allowed disabled:pointer-events-none w-full outline-none -outline-offset-1 focus-within:outline-primary-500 border border-gray-300 ",
  variants: {
    variant: {
      default: "leading-6 rounded-lg text-gray-700 shadow-primary-800",
      otp: "border-2 outline-2 -outline-offset-2 focus-within:outline-primary-300 text-xl sm:text-3xl font-semibold text-primary-500 shadow-otp-field focus-within:shadow-otp-field-focused placeholder:text-gray-300 focus-within:placeholder:text-green-400 text-center",
    },
    shape: {
      default: "px-4 py-[9px]",
      otp: "p-1 sm:p-3 rounded-md md:w-[54px] lg:w-[64px]",
    },
  },
  defaultVariants: {
    variant: "default",
    shape: "default",
  },
});

type InputProps = ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof inputVariants> & {};

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, shape, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ variant, shape, className }))}
        {...props}
      />
    );
  }
);

InputField.displayName = "InputField";

type TextareaProps = ComponentPropsWithoutRef<"textarea"> &
  VariantProps<typeof inputVariants> & {};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, shape, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(inputVariants({ variant, shape, className }))}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { InputField, Textarea };
