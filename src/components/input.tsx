import * as React from "react";
import { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  errors: string;
}

export const Input = React.forwardRef<HTMLInputElement, inputProps>(
  ({ placeholder, errors, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <input
          placeholder={placeholder}
          {...props}
          ref={ref}
          className={`placeholder:text-[#E6E6E6] border-[#E6E6E6] py-1 px-4 w-72 rounded-md border ${
            errors && "border-red-600"
          }`}
        />
        {errors && <p className="text-sm text-red-600 italic">{errors}</p>}
      </div>
    );
  },
);
