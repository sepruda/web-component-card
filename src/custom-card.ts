/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('custom-card')
export class CustomCard extends LitElement {
  static override styles = css`
    :host {
      display: grid;
      grid-template-rows: max-content 1fr;
      background-color: whitesmoke;
      padding: 16px;
    }

    [part='button'] {
      background-color: lightcoral;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
    }

    [part='button']:hover {
      background-color: indianred;
    }

    [part='button']:active {
      background-color: darkred;
    }

    main {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    main div {
      height: 20px;
    }

    h2 {
      font-size: 1.5 rem;
      font-family: 'Roboto';
      color: var(--headline-color);
    }

    ::slotted(p) {
      font-size: 1rem;
    }
  `;

  @property({type: String})
  headline = '';

  @property({type: String})
  headlineColor = 'darkSlateGrey';

  @property({type: Boolean})
  showButton = false;

  @property({type: Boolean})
  buttonClicked = false;

  private _onClick() {
    this.dispatchEvent(
      new CustomEvent('button-clicked', {bubbles: true, composed: true})
    );
  }

  private _handleButtonClicked() {
    this.buttonClicked = !this.buttonClicked;
  }

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      'button-clicked',
      this._handleButtonClicked.bind(this)
    );
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      'button-clicked',
      this._handleButtonClicked.bind(this)
    );
  }

  override render() {
    return html`
      <div style=${styleMap({'--headline-color': this.headlineColor})}>
        <header>
          <h2>${this.headline}</h2>
        </header>
        <main>
          <slot></slot>
          <div>${this.buttonClicked ? 'Button clicked!' : ''}</div>
          ${this.showButton
            ? html`<button part="button" @click=${this._onClick}>Click</button>`
            : ''}
        </main>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-card': CustomCard;
  }
}
