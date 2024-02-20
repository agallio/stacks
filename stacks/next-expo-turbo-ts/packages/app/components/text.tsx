import { ComponentProps } from "react";
import { Text as RNText } from "react-native";
import clsx from "clsx";

type TextProps = ComponentProps<typeof RNText> & {
  customFontSize?: string;
};

export function Text(props: TextProps) {
  return (
    <RNText
      {...props}
      className={clsx(
        props.customFontSize ? props.customFontSize : "text-base",
        props.className
      )}
    />
  );
}
