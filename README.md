<h1 align="center">Vue Toggles</h1>
<p align="center">
A highly customizable and accessible toggle.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/vue-toggles"><img src="https://img.shields.io/npm/v/vue-toggles.svg?style=flat-square"/> <img src="https://img.shields.io/npm/dm/vue-toggles.svg?style=flat-square"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg?style=flat-square"/></a>
</p>

<p align="center">
<img src="./vue-toggles.jpg" alt="Vue Toggles Logo"/>
</p>

<p align="center">
  <a href="https://www.buymeacoff.ee/Nifel">
    <img
         width="140"
         alt="Buy me a coffee"
         src="https://user-images.githubusercontent.com/1577802/36840220-21beb89c-1d3c-11e8-98a4-45fc334842cf.png">
  </a>
</p>

## Demo

- [Demo](https://vue-toggles.netlify.app/)
- [CodeSandbox](https://codesandbox.io/s/suspicious-framework-6uk74?from-embed=&file=/src/App.vue/)

## Introduction

Vue Toggles comes out of the box with accessibility support for:

- `aria-checked` depending on state
- `aria-readonly` if the toggle is disabled
- `prefers-reduced-motion` if the user has requested any type of motion reduction [[prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)]

The only accessibility options left to you are the `aria-label` and the `focus`-style.

## Installation

```
npm i vue-toggles
```

## Import

Import plugin:

```javascript
import Vue from 'vue';
import VueToggles from 'vue-toggles';

Vue.component('VueToggles', VueToggles);
```

## Usage

The toggle is very easy to use out of the box. The bare minimum for it to work is a `@click`-function and a `:value`-prop.

```html
<VueToggles @click="value = !value" :value="value" />
```

## Options

You can also add more props to customize things like color and width/height.

```html
<VueToggles
  @click="value = !value"
  :value="value"
  height="30"
  width="90"
  checkedText="On"
  uncheckedText="Off"
  checkedBg="#b4d455"
  uncheckedBg="lightgrey"
/>
```

## Properties

| Name           | Type             | Default   | Description                                       |
| -------------- | ---------------- | --------- | ------------------------------------------------- |
| value          | Boolean          | `false`   | Initial state of the toggle button                |
| disabled       | Boolean          | `false`   | Toggle does not react on mouse or keyboard events |
| height         | [String, Number] | `25`      | Height of the toggle in `px`                      |
| width          | [String, Number] | `75`      | Width of the toggle in `px`                       |
| checkedText    | String           | `null`    | Optional text when the toggle is checked          |
| uncheckedText  | String           | `null`    | Optional text when the toggle is unchecked        |
| checkedBg      | String           | `#5850ec` | Background color when the toggle is checked       |
| uncheckedBg    | String           | `#939393` | Background color when the toggle is unchecked     |
| disabledBg     | String           | `#939393` | Background color when the toggle is disabled      |
| checkedColor   | String           | `#ffffff` | Text color when the toggle is checked             |
| uncheckedColor | String           | `#ffffff` | Text color when the toggle is unchecked           |
| dotColor       | String           | `#ffffff` | Color of the toggle dot                           |
| fontSize       | [String, Number] | `12`      | Font size in `px`                                 |
| fontWeight     | [Number, String] | `normal`  | Font weight                                       |

### Browser compatibility

- Chrome: 40+
- Firefox: 25+
- Safari: 10+
- IE: 11+

---

## License

[MIT](http://opensource.org/licenses/MIT)
