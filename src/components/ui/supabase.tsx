"use client";

import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const SupabaseIcon = memo(({ size = 24, style, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "inline-block", ...style }}
    {...rest}
  >
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="53.973801"
        y1="54.973999"
        x2="94.163498"
        y2="71.829498"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)"
      >
        <stop stopColor="#249361" />
        <stop offset="1" stopColor="#3ECF8E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="36.1558"
        y1="30.577999"
        x2="54.484402"
        y2="65.080597"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)"
      >
        <stop />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="M37.412 62.937c-1.635 2.059-4.95.931-4.989-1.698L31.847 22.786h25.855c4.684 0 7.295 5.409 4.383 9.077z"
      fill="url(#paint0_linear)"
      strokeWidth={0.572}
    />
    <path
      d="M37.412 62.937c-1.635 2.059-4.95.931-4.989-1.698L31.847 22.786h25.855c4.684 0 7.295 5.409 4.383 9.077z"
      fill="url(#paint1_linear)"
      fillOpacity={0.2}
      strokeWidth={0.572}
    />
    <path
      d="M26.897 1.063c1.635-2.059 4.95-.931 4.989 1.698L32.139 41.214H6.607c-4.683 0-7.295-5.409-4.383-9.077z"
      fill="#3ECF8E"
      strokeWidth={0.572}
    />
  </svg>
));

export default SupabaseIcon;
