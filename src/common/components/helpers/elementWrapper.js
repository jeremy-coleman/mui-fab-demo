var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as ReactDOM from "react-dom";
import * as React from "react";
var ElementContainer = /** @class */ (function (_super) {
    __extends(ElementContainer, _super);
    function ElementContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementContainer.prototype.render = function () {
        return React.createElement("div", { ref: "container" });
    };
    ElementContainer.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.child !== nextProps.child;
    };
    ElementContainer.prototype.componentDidUpdate = function (prevProps) {
        this._updateChild(prevProps);
    };
    ElementContainer.prototype.componentDidMount = function () {
        this._updateChild({});
    };
    ElementContainer.prototype._updateChild = function (prevProps) {
        var wrap = ReactDOM.findDOMNode(this.refs.container);
        var next = this.props.child;
        var prev = prevProps.child;
        if (next) {
            wrap.appendChild(next);
        }
        if (prev && prev !== next && prev.parentNode === wrap) {
            wrap.removeChild(prev);
        }
    };
    return ElementContainer;
}(React.Component));
export { ElementContainer };
//# sourceMappingURL=elementWrapper.js.map