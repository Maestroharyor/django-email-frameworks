import React from "react";
import { Button as EmailButton, Text } from "@react-email/components";

type ButtonVariant = "primary" | "neutral";

interface ButtonProps {
  href?: string;
  style?: React.CSSProperties;
  className?: string;
  variant?: ButtonVariant;
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  href = "https://hqzen.com",
  variant = "primary",
  style,
  className = "",
  label,
}) => {
  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      display: "block",
      borderRadius: "4px",
      backgroundColor: "#007bff", // primary color
      padding: "12px",
      textAlign: "center",
      fontWeight: 600,
      color: "white",
    },
    neutral: {
      display: "block",
      borderRadius: "4px",
      backgroundColor: "white",
      border: "1px solid #dde1e3",
      padding: "8px",
      textAlign: "center",
      fontSize: "0.8125rem",
      color: "#6b7280", // gray-500
    },
  };

  const buttonStyle = {
    ...variantStyles[variant],
    ...style,
    textDecoration: "none",
    // display: "block",
  };

  return (
    <EmailButton href={href} style={buttonStyle} className={className}>
      <Text
        style={{
          margin: "0px",
          color: variant === "primary" ? "white" : "#6b7280",
          textAlign: "center",
          fontSize: "0.8125rem",
          lineHeight: "120%",
        }}
      >
        {label || "Button"}
      </Text>
    </EmailButton>
  );
};

export default Button;
