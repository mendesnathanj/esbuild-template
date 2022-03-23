import {
  __toModule,
  require_react,
  require_react_dom
} from "./chunks/chunk-COF3YYGT.js";

// src/entries/customer.tsx
var import_react2 = __toModule(require_react());
var import_react_dom = __toModule(require_react_dom());

// src/App.tsx
var import_react = __toModule(require_react());
var App = (props) => {
  const [count, setCount] = (0, import_react.useState)(0);
  const increment = (0, import_react.useCallback)(() => {
    setCount((count2) => count2 + 1);
  }, [count]);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("h1", null, props.message), /* @__PURE__ */ import_react.default.createElement("h2", null, "Count: ", count), /* @__PURE__ */ import_react.default.createElement("button", {
    onClick: increment
  }, "Increment"));
};
var App_default = App;

// src/entries/customer.tsx
import_react_dom.default.render(/* @__PURE__ */ import_react2.default.createElement(App_default, {
  message: "Hello World! Simple Counter App built on ESBuild + React + Typescript"
}), document.getElementById("root"));
