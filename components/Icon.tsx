import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { name: "speak" | "check" | "help"; };

export default function Icon({ name, ...props }: IconProps) {
  if (name === "speak") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" strokeWidth="1.5"/>
      </svg>
    );
  }
  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M20 6L9 17l-5-5" strokeWidth="1.5"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4" strokeWidth="1.5"/>
      <circle cx="12" cy="18" r="0.8" fill="currentColor"/>
    </svg>
  );
}
