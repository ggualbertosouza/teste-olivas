import * as React from "react";
import { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  errors: string;
}

export const Input = React.forwardRef<HTMLInputElement, inputProps>(
  ({ placeholder, errors, ...props }, ref) => {
    return (
      <div>
        <input
          placeholder={placeholder}
          {...props}
          ref={ref}
          className={`placeholder:text-[#BAB9B9] border-[#E6E6E6] py-1 px-4 w-72 rounded-md border outline-none focus:border-[#BAB9B9] ${
            errors && "border-red-600"
          }`}
        />
        {errors && <p className="text-sm text-red-600 italic">{errors}</p>}
      </div>
    );
  },
);
