// Lucide → Hugeicons (SVG) mapping used by every Regeneron component. Replaces `lucide-react` imports in registry/new-york-v4/ui/*.tsx.
// Usage: import { ChevronDownIcon } from "@/registry/new-york-v4/lib/icons"
import * as React from "react"
// `MoreHorizontalIcon` is aliased: Hugeicons' name for it collides exactly with
// the one we export below, which is a duplicate declaration. Fix in the generator.
import {
  Alert02Icon,
  ArrowDown01Icon,
  ArrowDown02Icon,
  ArrowLeft01Icon,
  ArrowLeft02Icon,
  ArrowRight01Icon,
  ArrowRight02Icon,
  ArrowUp01Icon,
  Cancel01Icon,
  CancelCircleIcon,
  CheckmarkCircle02Icon,
  DragDropVerticalIcon,
  MoreHorizontalIcon as HugeMoreHorizontalIcon,
  InformationCircleIcon,
  Loading03Icon,
  MinusSignIcon,
  Search01Icon,
  SidebarLeftIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import { cn } from "cn"

type IconProps = Omit<React.ComponentProps<"svg">, "ref">

// Inline SVG from @hugeicons/core-free-icons (no icon font, works offline once bundled).
function make(icon: IconSvgElement, name: string) {
  function Icon({ className, strokeWidth, ...props }: IconProps) {
    const sized = /\bsize-\d/.test(className ?? "")
    // HugeiconsProps narrows `strokeWidth` to a number, while SVG — and so IconProps — also allows a string.
    const stroke = typeof strokeWidth === "number" ? strokeWidth : 1.5
    return (
      <HugeiconsIcon
        icon={icon}
        size={sized ? undefined : "1em"}
        strokeWidth={stroke}
        aria-hidden="true"
        focusable="false"
        className={cn(className)}
        {...props}
      />
    )
  }
  Icon.displayName = name
  return Icon
}

export const ChevronDownIcon = make(ArrowDown01Icon, "ChevronDown")
export const ChevronRightIcon = make(ArrowRight01Icon, "ChevronRight")
export const ChevronLeftIcon = make(ArrowLeft01Icon, "ChevronLeft")
export const ChevronUpIcon = make(ArrowUp01Icon, "ChevronUp")
export const MoreHorizontalIcon = make(HugeMoreHorizontalIcon, "MoreHorizontal")
export const ArrowLeftIcon = make(ArrowLeft02Icon, "ArrowLeft")
export const ArrowRightIcon = make(ArrowRight02Icon, "ArrowRight")
export const ArrowDownIcon = make(ArrowDown02Icon, "ArrowDown")
export const CheckIcon = make(Tick02Icon, "Check")
export const XIcon = make(Cancel01Icon, "X")
export const SearchIcon = make(Search01Icon, "Search")
export const MinusIcon = make(MinusSignIcon, "Minus")
export const GripVerticalIcon = make(DragDropVerticalIcon, "GripVertical")
export const PanelLeftIcon = make(SidebarLeftIcon, "PanelLeft")
export const CircleCheckIcon = make(CheckmarkCircle02Icon, "CircleCheck")
export const InfoIcon = make(InformationCircleIcon, "Info")
export const Loader2Icon = make(Loading03Icon, "Loader2")
export const OctagonXIcon = make(CancelCircleIcon, "OctagonX")
export const TriangleAlertIcon = make(Alert02Icon, "TriangleAlert")
export function CircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx={12} cy={12} r={10} fill="currentColor" />
    </svg>
  )
}

// Unsuffixed aliases used by breadcrumb.tsx and carousel.tsx
export {
  ChevronRightIcon as ChevronRight,
  MoreHorizontalIcon as MoreHorizontal,
  ArrowLeftIcon as ArrowLeft,
  ArrowRightIcon as ArrowRight,
}
