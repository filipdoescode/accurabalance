import {
  BookOpenCheck,
  HandCoins,
  Icon,
  Landmark,
  LucideProps,
  MoveDownRight,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = typeof LucideIcon

export const Icons = {
  moveDownRight: MoveDownRight,
  chevronDown: (props: LucideProps) => (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="#E62f43"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="1" width="8" height="2" fill="#E62f43" />
      <rect x="3" y="2" width="4" height="2" fill="#E62f43" />
    </svg>
  ),
  landmark: Landmark,
  handCoins: HandCoins,
  bookOpenCheck: BookOpenCheck,
}
