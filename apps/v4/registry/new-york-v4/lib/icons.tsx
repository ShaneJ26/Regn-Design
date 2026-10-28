// Lucide → Hugeicons mapping used by every Regeneron component. Replaces `lucide-react` imports in registry/new-york-v4/ui/*.tsx.
// Usage: import { ChevronDownIcon } from "@/components/icons"
import * as React from "react"
import { cn } from "cn"

const MAP = {
  ChevronDown: "arrow-down-01", ChevronRight: "arrow-right-01", ChevronLeft: "arrow-left-01", ChevronUp: "arrow-up-01",
  MoreHorizontal: "more-horizontal", ArrowLeft: "arrow-left-02", ArrowRight: "arrow-right-02", ArrowDown: "arrow-down-02",
  Check: "tick-02", X: "cancel-01", Search: "search-01", Minus: "minus-sign", GripVertical: "drag-drop-vertical",
  PanelLeft: "sidebar-left", CircleCheck: "checkmark-circle-02", Info: "information-circle", Loader2: "loading-03",
  OctagonX: "cancel-circle", TriangleAlert: "alert-02",
} as const

type IconProps = React.ComponentProps<"svg">

function make(name: string) {
  function Icon({ className, ...props }: IconProps) {
    const sized = /\bsize-\d/.test(className ?? "")
    return (
      <svg viewBox="0 0 24 24" width={sized ? undefined : "1em"} height={sized ? undefined : "1em"} aria-hidden="true" focusable="false" className={cn(className)} {...props}>
        <foreignObject x={0} y={0} width={24} height={24}>
          <i className={"hgi-stroke hgi-" + name} style={{ display: "block", fontSize: 24, lineHeight: "24px", width: 24, height: 24, textAlign: "center", color: "currentColor" }} />
        </foreignObject>
      </svg>
    )
  }
  Icon.displayName = name
  return Icon
}

export const ChevronDownIcon = make(MAP.ChevronDown)
export const ChevronRightIcon = make(MAP.ChevronRight)
export const ChevronLeftIcon = make(MAP.ChevronLeft)
export const ChevronUpIcon = make(MAP.ChevronUp)
export const MoreHorizontalIcon = make(MAP.MoreHorizontal)
export const ArrowLeftIcon = make(MAP.ArrowLeft)
export const ArrowRightIcon = make(MAP.ArrowRight)
export const ArrowDownIcon = make(MAP.ArrowDown)
export const CheckIcon = make(MAP.Check)
export const XIcon = make(MAP.X)
export const SearchIcon = make(MAP.Search)
export const MinusIcon = make(MAP.Minus)
export const GripVerticalIcon = make(MAP.GripVertical)
export const PanelLeftIcon = make(MAP.PanelLeft)
export const CircleCheckIcon = make(MAP.CircleCheck)
export const InfoIcon = make(MAP.Info)
export const Loader2Icon = make(MAP.Loader2)
export const OctagonXIcon = make(MAP.OctagonX)
export const TriangleAlertIcon = make(MAP.TriangleAlert)
export function CircleIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><circle cx={12} cy={12} r={10} fill="currentColor" /></svg>
}

// Unsuffixed aliases for the lucide names some components import without the
// `Icon` suffix (breadcrumb, carousel). Hand-added: fold into the generator.
export const ChevronRight = ChevronRightIcon
export const MoreHorizontal = MoreHorizontalIcon
export const ArrowLeft = ArrowLeftIcon
export const ArrowRight = ArrowRightIcon
