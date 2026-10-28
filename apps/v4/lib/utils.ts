import { createCn } from "cn/config"

// The brand type scale (text-h1…text-c2) sits in the same conflict group as
// Tailwind's own text sizes, so cn("text-sm", "text-b4") keeps only text-b4.
export const cn = createCn({
  extend: {
    theme: {
      text: ["h1", "h2", "h3", "h4", "p1", "b1", "b2", "b3", "b4", "c1", "c2"],
    },
  },
})

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
