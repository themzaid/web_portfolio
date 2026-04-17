import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AvailabilityStatus = "available" | "busy" | "working";

interface StatusBadgeProps {
  status: AvailabilityStatus;
  customText?: string;
  className?: string;
}

const StatusBadge = ({ status, customText, className }: StatusBadgeProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "available":
        return {
          color: "bg-green-500",
          glow: "shadow-[0_0_8px_rgba(34,197,94,0.4)]",
          text: customText || "Open to work",
        };
      case "busy":
        return {
          color: "bg-orange-500",
          glow: "shadow-[0_0_8px_rgba(249,115,22,0.4)]",
          text: customText || "Busy",
        };
      case "working":
        return {
          color: "bg-red-500",
          glow: "shadow-[0_0_8px_rgba(239,68,68,0.4)]",
          text: customText || "Currently @ Work",
        };
      default:
        return {
          color: "bg-gray-400",
          glow: "",
          text: customText || "Status Unknown",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "flex items-center gap-2.5 px-3 py-1.5 rounded-full",
        "bg-background/70 backdrop-blur-sm border border-border shadow-sm",
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className={cn("w-2 h-2 rounded-full", config.color, config.glow)} />
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={cn("absolute w-2 h-2 rounded-full", config.color)}
        />
      </div>
      <span className="text-[12px] font-sans font-medium tracking-wider text-primary/80">
        {config.text}
      </span>
    </motion.div>
  );
};

export default StatusBadge;
