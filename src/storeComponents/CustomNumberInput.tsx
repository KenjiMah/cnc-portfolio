import { cn } from "@/utils/utilFns";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp } from "lucide-react"; // For our placeholder
import React from "react";
import { useController, type UseControllerProps } from "react-hook-form";

interface CustomNumberInputProps
  extends UseControllerProps<any>,
    Omit<
      React.ComponentProps<"input">,
      "defaultValue" | "name" | "onBlur" | "onChange" | "value"
    > {}

export const CustomNumberInput = React.forwardRef<
  HTMLInputElement,
  CustomNumberInputProps
>((props, ref) => {
  // This is the magic hook to connect to react-hook-form
  const { field } = useController(props);

  const handleStep = (direction: "up" | "down") => {
    // Get the current value, default to 0 if it's not a valid number
    const currentValue = Number(field.value) || 0;
    const step = props.step ? Number(props.step) : 1;
    let nextValue: number;

    if (direction === "up") {
      nextValue = currentValue + step;
    } else {
      nextValue = currentValue - step;
    }

    // Respect the min prop if it's provided
    const min = props.min !== undefined ? Number(props.min) : -Infinity;
    if (nextValue < min) {
      nextValue = min;
    }

    // Update the form state
    field.onChange(nextValue);
  };

  return (
    <div className="relative">
      <Input
        {...props} // Pass through any other props like placeholder, etc.
        {...field} // Spread the field props (onChange, onBlur, value, name)
        ref={ref}
        type="number"
        // Hide the default browser spinners
        className={cn(
          "pr-8 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          props.className
        )}
      />
      {/* Our custom arrow container */}
      <div className="absolute right-0 top-0 h-full flex flex-col justify-center">
        {/* Up Button */}
        <button
          type="button" // Important to prevent form submission
          tabIndex={-1} // Makes it unfocusable
          className="h-1/2 w-8 flex items-center justify-center rounded-tr-md transition-colors hover:bg-muted"
          onClick={() => handleStep("up")}
        >
          <ChevronUp className="h-4 w-4" />
        </button>
        {/* Down Button */}
        <button
          type="button"
          tabIndex={-1}
          className="h-1/2 w-8 flex items-center justify-center rounded-br-md transition-colors hover:bg-muted"
          onClick={() => handleStep("down")}
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
});
