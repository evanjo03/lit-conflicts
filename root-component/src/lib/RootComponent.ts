import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import "lit-legacy-component/define.js";

export class RootComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      border: 4px solid green;
    }
  `;

  @property({ type: String }) title = "Root Component";

  render() {
    return html`
      <h2>${this.title}!</h2>
      <lit-legacy-component></lit-legacy-component>
    `;
  }
}
