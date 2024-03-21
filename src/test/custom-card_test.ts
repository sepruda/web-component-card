/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { CustomCard } from '../CustomCard/custom-card.js';

import { fixture, assert, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

interface CustomCardTestable extends CustomCard {
  headline: string;
  headlineColor: string;
  showButton: boolean;
  buttonClicked: boolean;
}

suite('custom-card', () => {
  test('is defined', () => {
    const el = document.createElement('custom-card');
    assert.instanceOf(el, CustomCard);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<custom-card></custom-card>`);
    assert.shadowDom.equal(
      el,
      `
      <div style="--headline-color:darkSlateGrey;">
      <header>
          <h2>
          </h2>
        </header>
        <main>
          <div>
          </div>
        </main>
      </div>
    `
    );
  });

  test('has the correct initial state', async () => {
    const el = await fixture(html`<custom-card></custom-card>`);
    const customCard = el as CustomCardTestable;
    expect(customCard.headline).to.equal('');
    expect(customCard.headlineColor).to.equal('darkSlateGrey');
    expect(customCard.showButton).to.be.false;
    expect(customCard.buttonClicked).to.be.false;
  });

  test('handles a click', async () => {
    const el = (await fixture(
      html`<custom-card showButton></custom-card>`
    )) as CustomCard;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <div style="--headline-color: darkSlateGrey;">
      <header>
          <h2>
          </h2>
        </header>
        <main>
        <div>
        Button clicked!
      </div>
      <button part="button">
      Click
    </button>
        </main>

      </div>
    `
    );
  });
});
