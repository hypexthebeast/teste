import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  variant?: "default" | "premium" | "accent";
  icon?: ReactNode;
  style?: React.CSSProperties;
}

const AnimatedButton = ({ 
  children, 
  onClick, 
  className, 
  variant = "default",
  icon,
  style
}: AnimatedButtonProps) => {
  const baseClasses = "relative overflow-hidden transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98]";
  
  const variantClasses = {
    default: "chat-option-button",
    premium: "premium-button",
    accent: "accent-button"
  };

  return (
    <button 
      onClick={onClick}
      style={style}
      className={cn(
        baseClasses,
        variantClasses[variant],
        "ripple-effect",
        className
      )}
    >
      {/* Enhanced ripple overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
      
      <div className="relative flex items-center gap-3 w-full justify-center">
        {icon && (
          <div className="drop-shadow-[0_0_8px_hsl(var(--accent)/0.6)]">
            {icon}
          </div>
        )}
        <span className="font-medium">{children}</span>
      </div>
    </button>
  );
};

export default AnimatedButton;