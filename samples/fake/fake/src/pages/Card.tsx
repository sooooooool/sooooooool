import type { FC } from "react";
import type { DivProps } from "../components";
import { Div, Icon } from "../components";
import * as D from "../data";
import User from "./User";

export type CardProps = DivProps & {
  card: D.ICard;
};

const Card: FC<CardProps> = ({ card, ...props }) => {
  const { writer, image, title, paragraphs, dayMonthYearDate, relativeDate } =
    card;
  const icons = ["home", "search", "settings", "favorite"].map((name) => (
    <Icon key={name} name={name} className="text-3xl" />
  ));
  return (
    <Div {...props}>
      <div className="flex flex-col">
        <Div src={image} className="h-60" minHeight="minHeight" />
        <Div className="p-4" height="20rem">
          <p className="text-3xl text-center text-bold">{title}</p>
          <Div className="flex justify-between">
            <User user={writer} className="" />
            <Div className="">
              <p className="text-gray-500 text-sm">{relativeDate}</p>
              <p className="text-gray-500 text-sm">{dayMonthYearDate}</p>
            </Div>
          </Div>
          <p className="line-clamp-4">{paragraphs}</p>
          <Div className="flex flex-row items-center justify-between p-2 mt-1 text-red-500">
            {icons}
          </Div>
        </Div>
      </div>
    </Div>
  );
};
export default Card;
