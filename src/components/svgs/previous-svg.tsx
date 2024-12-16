import { SvgProps } from "./svg-props";

export function PreviousSVG({ size, fill }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -2 12 12"
    >
      <g id="SVGRepo_iconCarrier">
        <g
          id="Page-1"
          fill={fill ?? 'white'}
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
        >
          <g
            id="Dribbble-Light-Preview"
            fill={fill ?? 'white'}
            transform="translate(-104 -3805)"
          >
            <g id="icons" transform="translate(56 160)">
              <path
                id="previous-[#999]"
                d="M59.999 3645.868v6.263c0 .714-1.145 1.122-1.781.694l-4.219-2.685v1.991c0 .714-.573 1.122-1.209.694l-4.311-3.132c-.514-.347-.681-1.04-.167-1.387l4.478-3.13c.636-.43 1.209-.022 1.209.692v1.991l4.219-2.684c.636-.429 1.781-.02 1.781.693"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
