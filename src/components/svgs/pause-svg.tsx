import { SvgProps } from "./svg-props";

export function PauseSVG({ size, fill }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 0 8 8"
    >
      <g id="SVGRepo_iconCarrier">
        <g
          id="Page-1"
          fill="none"
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
        >
          <g
            id="Dribbble-Light-Preview"
            fill={fill ?? 'white'}
            transform="translate(-227 -3765)"
          >
            <g id="icons" transform="translate(56 160)">
              <path
                id="pause-[#1006]"
                d="M172 3605a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m5 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}