import * as React from "react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "butt" as const,
  strokeLinejoin: "miter" as const,
};

export const ArrowUpRightIcon = ({ className, size, ...props }: IconProps) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M8 6.5h9.5v9.5" />
    <path d="M6.5 17.5 17.5 6.5" />
  </svg>
);

export const ArrowRightIcon = ({ className, size, ...props }: IconProps) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export const ArrowLeftIcon = ({ className, size, ...props }: IconProps) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

export const ArrowDownIcon = ({ className, size, ...props }: IconProps) => (
  <svg width={size} height={size} {...defaultProps} className={className} {...props}>
    <path d="M12 5v14" />
    <path d="M19 12l-7 7-7-7" />
  </svg>
);
