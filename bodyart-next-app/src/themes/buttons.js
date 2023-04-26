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
  confirm: {
    enabled: {
      background: COLORS.lima,
      color: COLORS.white_smoke,
    },
    disabled: {
      background: Color(COLORS.lima).darken(0.4),
      color: COLORS.white_smoke,
    },
    hover: {
      background: Color(COLORS.lima).darken(0.2),
      color: COLORS.white_smoke,
    },
    active: {
      background: Color(COLORS.lima).darken(0.4),
      color: COLORS.white_smoke,
    },
  },
  cancel: {
    enabled: {
      background: COLORS.lava,
      color: COLORS.white_smoke,
    },
    disabled: {
      background: Color(COLORS.lava).darken(0.4),
      color: COLORS.white_smoke,
    },
    hover: {
      background: Color(COLORS.lava).darken(0.2),
      color: COLORS.white_smoke,
    },
    active: {
      background: Color(COLORS.lava).darken(0.4),
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
  transparentLapisLazuliTwo: {
    enabled: {
      background: "#00000000",
      color: COLORS.white,
      border: `${Color(COLORS.lapis_lazuli)} 1.25px solid`,
    },
    disabled: {
      background: Color(COLORS.lapis_lazuli).lightness(15),
      color: Color(COLORS.white),
    },
    hover: {
      background: "#00000000",
      color: Color(COLORS.lapis_lazuli).lightness(50),
      border: `${Color(COLORS.lapis_lazuli).lightness(50)} 1.25px solid`,
    },
    active: {
      background: Color(COLORS.lapis_lazuli).lightness(10),
      color: Color(COLORS.white_smoke),
      border: `${Color(COLORS.lapis_lazuli).lightness(60)} 1.25px solid`,
    },
  },
};
