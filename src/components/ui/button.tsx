import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import "@/components/ui/StarBorder.css";

const PRIMARY_BUTTON_GLOW = "before:bg-[radial-gradient(circle_100px_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),rgba(255,255,255,0.4),transparent_80%)]";
const SECONDARY_BUTTON_GLOW = "before:bg-[radial-gradient(circle_100px_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),hsl(var(--accent-blue)/0.15),transparent_80%)]";
const SECONDARY_VARIANT_GLOW = "before:bg-[radial-gradient(circle_100px_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),hsl(var(--accent-blue)/0.35),transparent_80%)]";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[14px] font-semibold font-sans tracking-wider backdrop-blur-xl transition-[background-color,border-color,color,backdrop-filter,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&>*]:relative [&>*]:z-[2]",
  {
    variants: {
      variant: {
        default:
          `relative isolate overflow-hidden border-2 border-accent-blue bg-accent-blue/95 text-primary-foreground hover:bg-accent-blue hover:border-accent-blue/80 shadow-none before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-200 before:ease-out ${PRIMARY_BUTTON_GLOW} data-[spotlight-active=true]:before:opacity-100 dark:bg-accent-blue/45 dark:text-white dark:hover:bg-accent-blue/60 dark:border-accent-blue/20 dark:hover:border-accent-blue/10 dark:shadow-none`,
        destructive:
          "relative isolate overflow-hidden border-0 bg-destructive text-destructive-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_0_0_rgba(0,0,0,0.1)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-200 before:ease-out before:bg-[radial-gradient(circle_140px_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),rgba(255,255,255,0.32),transparent_58%)] data-[spotlight-active=true]:before:opacity-100",
        outline:
          `relative isolate overflow-hidden border-2 border-accent-blue/80 bg-background text-accent-blue/90 before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-200 before:ease-out ${SECONDARY_BUTTON_GLOW} data-[spotlight-active=true]:before:opacity-100 dark:border-white/20 dark:text-white dark:bg-transparent dark:hover:bg-white/10`,
        secondary:
          `relative isolate overflow-visible border-2 border-white/50 bg-white/80 text-black hover:bg-white/70 hover:border-transparent before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-200 before:ease-out ${SECONDARY_VARIANT_GLOW} data-[spotlight-active=true]:before:opacity-100 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),inset_0_-1px_0_0_rgba(0,0,0,0.30)]`,
        ghost:
          "border-0 bg-transparent shadow-none backdrop-blur-none hover:bg-background/45 hover:text-accent-foreground",
        link:
          "border-0 bg-transparent text-accent-blue shadow-none backdrop-blur-none underline-offset-4 hover:underline hover:[text-shadow:0_0_12px_rgba(0,0,0,0.28)] dark:hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 rounded-md px-3",
        lg: "h-12 rounded-md px-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  glowColor?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      glowColor = "#0ea5e9",
      style,
      onPointerMove,
      onPointerEnter,
      onPointerLeave,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const [spotlightActive, setSpotlightActive] = React.useState(false);
    const [coords, setCoords] = React.useState({ x: 50, y: 50 });

    const useSpotlight = variant !== "ghost" && variant !== "link";

    const updateSpotlight = (el: HTMLElement, clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      setCoords({
        x: ((clientX - rect.left) / rect.width) * 100,
        y: ((clientY - rect.top) / rect.height) * 100,
      });
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        data-spotlight-active={useSpotlight && spotlightActive ? true : undefined}
        style={
          useSpotlight
            ? {
              ...style,
              ["--spotlight-x" as string]: `${coords.x}%`,
              ["--spotlight-y" as string]: `${coords.y}%`,
            }
            : style
        }
        {...props}
        onPointerMove={
          useSpotlight
            ? (e) => {
              updateSpotlight(e.currentTarget, e.clientX, e.clientY);
              onPointerMove?.(e);
            }
            : onPointerMove
        }
        onPointerEnter={
          useSpotlight
            ? (e) => {
              setSpotlightActive(true);
              updateSpotlight(e.currentTarget, e.clientX, e.clientY);
              onPointerEnter?.(e);
            }
            : onPointerEnter
        }
        onPointerLeave={
          useSpotlight
            ? (e) => {
              setSpotlightActive(false);
              onPointerLeave?.(e);
            }
            : onPointerLeave
        }
      >
        <Slottable>{props.children}</Slottable>
        {variant === "secondary" && (
          <div className="star-border-overlay !absolute" style={{ inset: "-2px", borderRadius: "inherit" }}>
            <div className="border-gradient-bottom" style={{ background: `radial-gradient(circle, ${glowColor}, transparent 10%)`, animationDuration: '6s' }}></div>
            <div className="border-gradient-top" style={{ background: `radial-gradient(circle, ${glowColor}, transparent 10%)`, animationDuration: '6s' }}></div>
          </div>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
