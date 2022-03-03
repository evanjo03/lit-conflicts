import { html, TemplateResult } from "lit-element";
import "../lit-legacy-component.js";

export default {
  title: "LitLegacyComponent",
  component: "lit-legacy-component",
  argTypes: {
    title: { control: "text" },
    counter: { control: "number" },
    textColor: { control: "color" },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  title = "Hello world",
  counter = 5,
  textColor,
  slot,
}: ArgTypes) => html`
  <lit-legacy-component .title=${title} .counter=${counter}>
    ${slot}
  </lit-legacy-component>
`;

export const Regular = Template.bind({});
