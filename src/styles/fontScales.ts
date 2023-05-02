export const fontScales = {
  marketing: "marketing-font-scale",
  regular: "regular-font-scale",
} as const;

export type FontScale = keyof typeof fontScales;
