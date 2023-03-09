import { COLORS } from "@/themes/colors";
import React, { useMemo } from "react";
import * as Feather from "react-icons/fi";
import * as Bootstrap from "react-icons/bs";
import * as Simple from "react-icons/si";
import * as FontAwesome from "react-icons/fa";
import * as MaterialDesign from "react-icons/md";

const Icons = {
  ...Feather,
  ...Simple,
  ...Bootstrap,
  ...FontAwesome,
  ...MaterialDesign,
};

export default function Icon({
  id,
  title,
  color,
  icon,
  size,
  style,
  className,
  onClick,
  disabled,
}) {
  const IconComponent = useMemo(() => Icons[icon], [icon]);

  if (!IconComponent) return null;

  return (
    <IconComponent
      id={id}
      title={title}
      size={size}
      disabled={true}
      color={COLORS[color] ? COLORS[color] : color}
      style={style}
      className={`${disabled ? "opacity-60" : null} ${className}`}
      onClick={onClick}
    />
  );
}
