/**
 * @Author: guiguan
 * @Date:   2017-02-05T23:10:47+11:00
 * @Last modified by:   guiguan
 * @Last modified time: 2017-02-05T23:26:56+11:00
 */



const chai = require('chai');
const mix = require('../src');

chai.should();

describe('Mixin for ES6', () => {
  it('mixes mxins into base class', () => {
    class Colored {
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

    class ZCoord {
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

    class Shape {
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

    class Rectangle extends mix(Shape, Colored, ZCoord) {}
    const rect = new Rectangle(7, 42);
    rect.z = 1000;
    rect.color = "red";
    rect.x.should.equal(7);
    rect.y.should.equal(42);
    rect.z.should.equal(1000);
    rect.color.should.equal('red');
  });
});
