import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const PRIMARY_BUTTON_GLOW = "before:bg-[radial-gradient(circle_100px_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),rgba(255,255,255,0.4),transparent_80%)]";
const SECONDARY_BUTTON_GLOW = "before:bg-[radial-gradient(circle_100px_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),rgba(0,0,0,0.1),transparent_80%)]";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[13px] font-medium font-mono ring-offset-background backdrop-blur-xl transition-[background-color,border-color,color,backdrop-filter,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&>*]:relative [&>*]:z-[2]",
  {
    variants: {
      variant: {
        default:
          `relative isolate overflow-hidden border border-white/25 bg-primary text-primary-foreground ring-1 ring-inset ring-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),inset_0_-1px_0_0_rgba(0,0,0,0.12)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-200 before:ease-out ${PRIMARY_BUTTON_GLOW} data-[spotlight-active=true]:before:opacity-100 dark:border-white/30 dark:ring-white/15 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),inset_0_-1px_0_0_rgba(0,0,0,0.22)]`,
        destructive:
          "relative isolate overflow-hidden border border-white/22 bg-destructive text-destructive-foreground ring-1 ring-inset ring-white/18 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_0_0_rgba(0,0,0,0.1)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-200 before:ease-out before:bg-[radial-gradient(circle_140px_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),rgba(255,255,255,0.32),transparent_58%)] data-[spotlight-active=true]:before:opacity-100",
        outline:
          `relative isolate overflow-hidden border border-black/[0.08] bg-background text-foreground ring-1 ring-inset ring-black/[0.14] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.92),inset_0_-1px_0_0_rgba(0,0,0,0.10)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-200 before:ease-out ${SECONDARY_BUTTON_GLOW} data-[spotlight-active=true]:before:opacity-100 hover:border-black/[0.12] hover:ring-black/[0.18] dark:border-white/[0.12] dark:bg-background dark:ring-white/[0.08] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),inset_0_-1px_0_0_rgba(0,0,0,0.30)]`,
        secondary:
          `relative isolate overflow-hidden border border-black/[0.08] bg-background text-secondary-foreground ring-1 ring-inset ring-black/[0.14] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.92),inset_0_-1px_0_0_rgba(0,0,0,0.10)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-200 before:ease-out ${SECONDARY_BUTTON_GLOW} data-[spotlight-active=true]:before:opacity-100 hover:border-black/[0.12] hover:ring-black/[0.18] dark:border-white/[0.12] dark:bg-background dark:ring-white/[0.08] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),inset_0_-1px_0_0_rgba(0,0,0,0.30)]`,
        ghost:
          "border border-transparent bg-transparent shadow-none backdrop-blur-none hover:border-border/35 hover:bg-background/45 hover:text-accent-foreground",
        link:
          "border-0 bg-transparent text-primary shadow-none backdrop-blur-none underline-offset-4 hover:underline hover:[text-shadow:0_0_12px_rgba(0,0,0,0.28)] dark:hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
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
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
