# Mixin for ES6
*A truly working mixin utility for es6*

[![npm](https://img.shields.io/npm/v/mixin-es6.svg)](https://www.npmjs.com/package/mixin-es6)

## Usage
An optional `initializer` can be provided in each mixin for initialisation purpose

```js
const mix = require('mixin-es6');

class ColorMixin {
  initializer() {
    this._color = "white";
  }
  get color() {
    return this._color;
  }
  set color(v) {
    this._color = v;
  }
}

class ZCoordMixin {
  initializer() {
    this._z = 0;
  }
  get z() {
    return this._z;
  }
  set z(v) {
    this._z = v;
  }
}

class BaseClass {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x;
  }
  set x(v) {
    this._x = v;
  }
  get y() {
    return this._y;
  }
  set y(v) {
    this._y = v;
  }
}

class Rectangle extends mix(BaseClass, ColorMixin, ZCoordMixin) {}
```
