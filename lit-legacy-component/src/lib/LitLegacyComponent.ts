import { html, css, LitElement } from "lit-element";
import importedStyles from "lit-legacy-css-package";

export class LitLegacyComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      border: 2px solid red;
      border-radius: 0.25rem;
    }

    ${importedStyles}
  `;

  render() {
    return html` <h2>Lit Component using legacy dependencies!</h2> `;
  }
}
