---
layout: example.11ty.cjs
title: <custom-card> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  custom-card p {
    border: solid 1px blue;
    padding: 8px;
  }
</style>
<custom-card>
  <p>This is child content</p>
</custom-card>

<h3>CSS</h3>

```css
p {
  border: solid 1px blue;
  padding: 8px;
}
```

<h3>HTML</h3>

```html
<custom-card>
  <p>This is child content</p>
</custom-card>
```
