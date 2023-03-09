import Color from "color";
import { COLORS } from "./colors";

export const BUTTONS = {
  default: {
    enabled: {
      background: COLORS.lapis_lazuli,
      color: COLORS.white_smoke,
    },
    disabled: {
      background: Color(COLORS.lapis_lazuli).darken(0.4),
      color: COLORS.white_smoke,
    },
    hover: {
      background: Color(COLORS.lapis_lazuli).darken(0.2),
      color: COLORS.white_smoke,
    },
    active: {
      background: Color(COLORS.lapis_lazuli).darken(0.4),
      color: COLORS.white_smoke,
    },
  },
  transparentLapisLazuli: {
    enabled: {
      background: "#00000000",
      color: COLORS.lapis_lazuli,
      border: `${Color(COLORS.lapis_lazuli).lightness(100)} 1.25px solid`,
    },
    disabled: {
      background: "#00000000",
      color: Color(COLORS.lapis_lazuli).darken(0.4),
    },
    hover: {
      background: "#00000000",
      color: Color(COLORS.lapis_lazuli).lightness(50),
      border: `${Color(COLORS.lapis_lazuli).lightness(50)} 1.25px solid`,
    },
    active: {
      background: Color(COLORS.lapis_lazuli).lightness(95),
      color: Color(COLORS.lapis_lazuli).darken(0.1),
      border: `${Color(COLORS.lapis_lazuli).lightness(95)} 1.25px solid`,
    },
  },
};
