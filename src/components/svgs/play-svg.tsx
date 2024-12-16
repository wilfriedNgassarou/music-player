import { SvgProps } from "./svg-props";

export function PlaySVG ({ size, fill }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-0.5 0 7 7"
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
            transform="translate(-347 -3766)"
          >
            <g id="icons" transform="translate(56 160)">
              <path
                id="play-[#1003]"
                d="m296.495 3608.573-3.994-2.43c-.669-.408-1.501.107-1.501.926v4.862c0 .82.832 1.333 1.5.927l3.995-2.43c.673-.41.673-1.445 0-1.855"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
