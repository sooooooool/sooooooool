import type {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import type { widthHeight } from "./WidthHeight";
import { LeftRightTopBottom } from "./LeftRightTopBottom";

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DivProps = ReactDivProps &
  PropsWithChildren<widthHeight> &
  LeftRightTopBottom & {
    src?: string;
  };

//prettier ignore
export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  src,
  left,
  right,
  top,
  bottom,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
    left,
    right,
    top,
    bottom,
  };
  return <div {...props} style={style}></div>;
};
