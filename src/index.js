/**
 * Code borrowed from http://es6-features.org/#ClassInheritanceFromExpressions
 *
 * @Author: guiguan
 * @Date:   2017-02-05T23:05:38+11:00
 * @Last modified by:   guiguan
 * @Last modified time: 2017-02-05T23:21:43+11:00
 */


/**
 * Mix mixins into base class
 *
 * @param {function} BaseClass - base class
 * @param {...function} Mixins - mixins
 * @return {function} mixed class
 */
const mix = (BaseClass, ...Mixins) => {
  const Mixed = class extends BaseClass {
    constructor(...args) {
      super(...args);
      Mixins.forEach((Mixin) => {
        if (Mixin.prototype.initializer) {
          Mixin.prototype.initializer.call(this);
        }
      });
    }
  };
  const copyProps = (target, source) => {
    Object.getOwnPropertyNames(source)
      .concat(Object.getOwnPropertySymbols(source))
      .forEach((prop) => {
        if (prop.match(
            /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/
          )) {
          return;
        }
        Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(
          source, prop));
      });
  };
  Mixins.forEach((Mixin) => {
    copyProps(Mixed.prototype, Mixin.prototype);
    copyProps(Mixed, Mixin);
  });
  return Mixed;
};

module.exports = mix;
