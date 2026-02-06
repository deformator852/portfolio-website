import { memo } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: string | number;
}

const GoogleDriveIcon = memo(({ size = 24, style, ...rest }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1443.061 1249.993"
    style={{ display: "inline-block", ...style }}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {/* Blue section */}
    <path
      fill="#3777e3"
      d="M240.525 1249.993l240.492-416.664h962.044l-240.514 416.664z"
    />

    {/* Yellow section */}
    <path fill="#ffcf63" d="M962.055 833.329h481.006L962.055 0H481.017z" />

    {/* Green section */}
    <path
      fill="#11a861"
      d="M0 833.329l240.525 416.664 481.006-833.328L481.017 0z"
    />
  </svg>
));

export default GoogleDriveIcon;
