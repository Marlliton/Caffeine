import { css } from "styled-components";

type breakpointKeys = "sm" | "md" | "lg" | "xl" | "2xl";

export const breakpoints = [
  { width: 640, name: "sm" },
  { width: 768, name: "md" },
  { width: 1024, name: "lg" },
  { width: 1280, name: "xl" },
  { width: 1536, name: "2xl" },
];

export function applyBreakpointStyle(breakpointPrefix: breakpointKeys, cb: () => any) {
  return breakpoints.map((breakpoint) => {
    if(breakpoint.name === breakpointPrefix) {
      return css`
      @media (min-width: ${breakpoint.width}px) {
        ${cb()}
      }
    `
    }
  })
}
