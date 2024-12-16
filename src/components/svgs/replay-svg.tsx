import { SvgProps } from "./svg-props";

export function ReplaySVG({ size, fill }: SvgProps) {
  return (
    <svg
      xmlSpace="preserve"
      id="Layer_1"
      width={size}
      height={size}
      fill={fill ?? 'white'}
      viewBox="0 0 512 512"
    >
      <path
        id="SVGRepo_iconCarrier"
        d="M341.3 28.3v85.3H128c-70.7 0-128 57.3-128 128 0 21.5 5.8 41.4 15.2 59.2L68 263.2c-2.4-6.8-4-13.9-4-21.5 0-35.4 28.7-64 64-64h213.3V263L512 156.3V135zM444 262.8c2.4 6.8 4 13.9 4 21.5 0 35.4-28.6 64-64 64H170.7V263L0 369.7V391l170.7 106.7v-85.3H384c70.7 0 128-57.3 128-128 0-21.5-5.8-41.4-15.2-59.2z"
      ></path>
    </svg>
  )
}
