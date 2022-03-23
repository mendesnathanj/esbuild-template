import {
  __toModule,
  require_react,
  require_react_dom
} from "./chunks/chunk-COF3YYGT.js";

// src/entries/admin.tsx
var import_react4 = __toModule(require_react());
var import_react_dom = __toModule(require_react_dom());

// src/Admin.tsx
var import_react2 = __toModule(require_react());

// node_modules/@linaria/react/esm/styled.js
var import_react = __toModule(require_react());

// node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var memoize_browser_esm_default = memoize;

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index = memoize_browser_esm_default(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var is_prop_valid_browser_esm_default = index;

// node_modules/@linaria/utils/esm/cx.js
var cx = function cx2() {
  const presentClassNames = Array.prototype.slice.call(arguments).filter(Boolean);
  const classNamesResult = presentClassNames.filter((arg) => typeof arg !== "object");
  const styleCollectionResult = Object.values(Object.assign({}, ...presentClassNames.filter((arg) => typeof arg === "object")));
  return [...styleCollectionResult, ...classNamesResult].join(" ");
};
var cx_default = cx;

// node_modules/@linaria/react/esm/styled.js
var restOp = (obj, keys) => {
  const res = {};
  let key;
  for (key in obj) {
    if (keys.indexOf(key) === -1) {
      res[key] = obj[key];
    }
  }
  return res;
};
var warnIfInvalid = (value, componentName) => {
  if (true) {
    if (typeof value === "string" || typeof value === "number" && isFinite(value)) {
      return;
    }
    const stringified = typeof value === "object" ? JSON.stringify(value) : String(value);
    console.warn(`An interpolation evaluated to '${stringified}' in the component '${componentName}', which is probably a mistake. You should explicitly cast or transform the value to a string.`);
  }
};
function styled(tag) {
  return (options) => {
    if (true) {
      if (Array.isArray(options)) {
        throw new Error('Using the "styled" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. See https://github.com/callstack/linaria#setup');
      }
    }
    const render = (props, ref) => {
      const {
        as: component = tag,
        class: className
      } = props;
      const rest = restOp(props, ["as", "class"]);
      let filteredProps;
      if (typeof component === "string" && component.indexOf("-") === -1) {
        filteredProps = {};
        for (const key in rest) {
          if (key === "as" || is_prop_valid_browser_esm_default(key)) {
            filteredProps[key] = rest[key];
          }
        }
      } else {
        filteredProps = rest;
      }
      filteredProps.ref = ref;
      filteredProps.className = cx_default(filteredProps.className || className, options.class);
      const {
        vars
      } = options;
      if (vars) {
        const style = {};
        for (const name in vars) {
          const variable = vars[name];
          const result = variable[0];
          const unit = variable[1] || "";
          const value = typeof result === "function" ? result(props) : result;
          warnIfInvalid(value, options.name);
          style[`--${name}`] = `${value}${unit}`;
        }
        const ownStyle = filteredProps.style || {};
        const keys = Object.keys(ownStyle);
        if (keys.length > 0) {
          keys.forEach((key) => {
            style[key] = ownStyle[key];
          });
        }
        filteredProps.style = style;
      }
      if (tag.__linaria && tag !== component) {
        filteredProps.as = component;
        return /* @__PURE__ */ import_react.default.createElement(tag, filteredProps);
      }
      return /* @__PURE__ */ import_react.default.createElement(component, filteredProps);
    };
    const Result = import_react.default.forwardRef ? /* @__PURE__ */ import_react.default.forwardRef(render) : (props) => {
      const rest = restOp(props, ["innerRef"]);
      return render(rest, props.innerRef);
    };
    Result.displayName = options.name;
    Result.__linaria = {
      className: options.class,
      extends: tag
    };
    return Result;
  };
}
var styled_default = true ? new Proxy(styled, {
  get(o, prop) {
    return o(prop);
  }
}) : styled;

// src/Admin.tsx
var Title = /* @__PURE__ */ styled_default("h1")({
  name: "Title",
  class: "tnj4m95"
});
var Admin = () => /* @__PURE__ */ import_react2.default.createElement(Title, null, "I am the admin page");
var Admin_default = Admin;

// src/entries/admin.tsx
import_react_dom.default.render(/* @__PURE__ */ import_react4.default.createElement(Admin_default, null), document.getElementById("root"));
