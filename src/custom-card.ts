/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('custom-card')
export class CustomCard extends LitElement {
  static override styles = css`
    :host {
      display: grid;
      grid-template-rows: max-content 1fr;
      background-color: whitesmoke;
      padding: 16px;
    }

    h2 {
      font-size: 1.5 rem;
      font-family: 'Roboto';
      color: var(--headline-color, black);
    }

    ::slotted(p) {
      font-size: 1rem;
    }
  `;

  @property({type: String})
  headline = '';

  @property({type: String})
  headlineColor = 'black';

  override render() {
    return html`
      <div style=${styleMap({'--headline-color': this.headlineColor})}>
        <header>
          <h2>${this.headline}</h2>
        </header>
        <slot></slot>
      </div>
    `;
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-card': CustomCard;
  }
}
