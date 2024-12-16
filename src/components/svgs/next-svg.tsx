import { SvgProps } from "./svg-props";


export function NextSVG({ size, fill }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -2 12 12"
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
            transform="translate(-144 -3805)"
          >
            <g id="icons" transform="translate(56 160)">
              <path
                id="next-[#998]"
                d="m99.684 3649.694-4.477 3.13c-.636.43-1.207.022-1.207-.692v-1.991l-4.22 2.684c-.635.429-1.78.02-1.78-.693v-6.263c0-.714 1.145-1.122 1.78-.694l4.22 2.685v-1.991c0-.714.571-1.122 1.207-.694l4.309 3.132c.514.347.682 1.04.168 1.387"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
