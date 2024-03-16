---
layout: page.11ty.cjs
title: <custom-card> ⌲ Home
---

# &lt;custom-card>

`<custom-card>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<custom-card>` is just an HTML element. You can it anywhere you can use HTML!

```html
<custom-card></custom-card>
```

  </div>
  <div>

<custom-card></custom-card>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<custom-card>` can be configured with attributed in plain HTML.

```html
<custom-card name="HTML"></custom-card>
```

  </div>
  <div>

<custom-card name="HTML"></custom-card>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<custom-card>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;custom-card&gt;</h2>
    <custom-card .name=${name}></custom-card>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;custom-card&gt;</h2>
<custom-card name="lit-html"></custom-card>

  </div>
</section>
