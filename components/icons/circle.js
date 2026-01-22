import { useState } from "react";
import Link from "next/link";
import { getSvgColors } from "../../utils/theme";

export default function Circle({ category }) {
  const [isHovered, setIsHovered] = useState(false);
  const colors = getSvgColors(category);

  return (
    <Link href="/">
      <a
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          className="overflow-visible inline"
          width="24"
          height="24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="11.5"
            stroke={isHovered ? colors.strokeHover : colors.stroke}
          />
          <path
            fill={isHovered ? colors.fillHover : colors.fill}
            d="M13.9001 12C13.9001 13.0493 13.0494 13.9 12.0001 13.9C10.9508 13.9 10.1001 13.0493 10.1001 12C10.1001 10.9506 10.9508 10.1 12.0001 10.1C13.0494 10.1 13.9001 10.9506 13.9001 12Z"
          />
        </svg>
      </a>
    </Link>
  );
}
