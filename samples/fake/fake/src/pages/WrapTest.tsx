import { Div, Title, Subtitle } from "../components";
import * as D from "../data";

export default function WrapTest() {
  const boxes = D.range(1, 30 + 1).map((number) => {
    return (
      <p key={number} className={`border-2 border-blue-300 p-1 mt-1 ml-1`}>
        {number}
      </p>
    );
  });
  return (
    <section className="mt-4">
      <Title>WrapTest</Title>
      <Div className="flex flex-col mt-4 w-1/2 bg-gray-200">
        <Div className="mt-2">
          <Subtitle>flex-row flex-wrap</Subtitle>
          <Div className="flex flex-row flex-wrap overflow-auto p-4">
            {boxes}
          </Div>
        </Div>
        <Div className="mt-2">
          <Subtitle>flex-row flex-wrap-reverse</Subtitle>
          <Div className="flex flex-row flex-wrap-reverse overflow-hidden p-4">
            {boxes}
          </Div>
        </Div>
        <Div className="mt-2">
          <Subtitle>flex-row flex-nowrap</Subtitle>
          <Div className="flex flex-row overflow-hidden flex-nowrap p-4">
            {boxes}
          </Div>
        </Div>
      </Div>
      <Div className="flex flex-row mt-4 bg-gray-200">
        <Div className="mr-8">
          <Subtitle>flex-column flex-wrap</Subtitle>
          <Div className="flex flex-col flex-wrap overflow-hidden p-4 h-40 min-h-40">
            {boxes}
          </Div>
        </Div>
        <Div className="mr-8">
          <Subtitle>flex-column flex-wrap-reverse</Subtitle>
          <Div className="flex flex-col flex-wrap-reverse overflow-scroll p-4 h-40 min-h-40">
            {boxes}
          </Div>
        </Div>
        <Div className="mr-8">
          <Subtitle>flex-column flex-nowrap</Subtitle>
          <Div className="flex flex-col flex-nowrap overflow-y-auto p-4 h-40 min-h-40">
            {boxes}
          </Div>
        </Div>
      </Div>
    </section>
  );
}
