import Typography from "typography"

const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.8,
  headerFontFamily: [
    "m-plus-1p_japanese",
    "sans-serif",
  ],
  bodyFontFamily: [
    "m-plus-1p_japanese",
    "sans-serif",
  ],
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
