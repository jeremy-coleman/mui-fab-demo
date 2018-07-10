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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import styled from 'react-emotion';
import { alignItems, alignSelf, background, borderRadius, borders, bottom, boxShadow, color, flex, flexDirection, flexWrap, fontSize, fontWeight, height, justifyContent, left, maxHeight, maxWidth, minHeight, minWidth, position, right, space, textAlign, top, util, width, zIndex, } from 'styled-system';
import tag from 'clean-tag';
export var canUseDOM = !!(typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);
var Space = /** @class */ (function (_super) {
    __extends(Space, _super);
    function Space() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Space.prototype.render = function () {
        // You have to use 00A0 because of JSX
        // But then line breaks are prevented
        // -> Put zero-width space after 00A0
        return '\u00A0\u200B';
    };
    return Space;
}(React.Component));
export { Space };
var vspace = function (props) {
    var v = props.vspace;
    var theme = util.fallbackTheme(props);
    if (v == null)
        return undefined;
    if (theme && theme.space && theme.space[v]) {
        v = util.px(theme.space[v]);
    }
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &>* {\n      margin-top: ", ";\n    }\n    &>*:first-child {\n      margin-top: 0;\n    }\n  "], ["\n    &>* {\n      margin-top: ", ";\n    }\n    &>*:first-child {\n      margin-top: 0;\n    }\n  "])), v);
};
var hspace = function (props) {
    var v = props.hspace;
    var theme = util.fallbackTheme(props);
    if (v == null)
        return undefined;
    if (theme && theme.space && theme.space[v]) {
        v = util.px(theme.space[v]);
    }
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    &>* {\n      margin-left: ", ";\n    }\n    &>*:first-child {\n      margin-left: 0;\n    }\n  "], ["\n    &>* {\n      margin-left: ", ";\n    }\n    &>*:first-child {\n      margin-left: 0;\n    }\n  "])), v);
};
// TODO: Is there an easy way to say 'apply all of the styles to this styled-component'?
export var Box = styled(tag)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n", " ", "\n", "\n", " ", "\n", " ", " ", " ", "\n", "\n", "\n", "\n", "\n", "\n", "\n", " ", "\n", "\n", " ", " ", " ", " ", " ", "\n"], ["\n", " ", "\n", "\n", " ", "\n", " ", " ", " ", "\n", "\n", "\n", "\n", "\n", "\n", "\n", " ", "\n", "\n", " ", " ", " ", " ", " ", "\n"])), vspace, hspace, space, width, height, minWidth, maxWidth, minHeight, maxHeight, fontSize, fontWeight, color, flex, textAlign, background, borders, borderRadius, boxShadow, position, zIndex, left, top, right, bottom);
export var Flex = styled(Box)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\ndisplay: flex;\n", "\n", "\n", "\n", "\n", "\n"], ["\ndisplay: flex;\n", "\n", "\n", "\n", "\n", "\n"])), alignItems, justifyContent, flexWrap, flexDirection, alignSelf);
export var VFlex = styled(Flex)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n"], ["\n"])));
VFlex.defaultProps = {
    flexDirection: 'column'
};
export var Fill = styled(Box)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\nflex: 1 1 auto;\n"], ["\nflex: 1 1 auto;\n"])));
export var BoxClickable = styled(Box)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\ncursor: pointer;\nuser-select: none;\n"], ["\ncursor: pointer;\nuser-select: none;\n"])));
export var FlexClickable = styled(Flex)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\ncursor: pointer;\nuser-select: none;\n"], ["\ncursor: pointer;\nuser-select: none;\n"])));
export var Span = styled(Box.withComponent(tag.span))(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\ndisplay: inline-block;\n"], ["\ndisplay: inline-block;\n"])));
export var A = styled(function (props) { return React.createElement("a", __assign({ target: '_blank', rel: 'noopener' }, props)); })(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n", " \n", " \n", "\n", "\n", " \n", "\n"], ["\n", " \n", " \n", "\n", "\n", " \n", "\n"])), space, width, fontSize, fontWeight, color, flex);
var Comp = /** @class */ (function (_super) {
    __extends(Comp, _super);
    function Comp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disposers = [];
        _this.autorun = function (view, opts) {
            return _this.disposers.push(autorun(view, opts));
        };
        return _this;
    }
    Comp.prototype.componentWillUnmount = function () {
        for (var _i = 0, _a = this.disposers; _i < _a.length; _i++) {
            var disposer = _a[_i];
            disposer();
        }
    };
    return Comp;
}(React.Component));
export { Comp };
var BoxStack = /** @class */ (function (_super) {
    __extends(BoxStack, _super);
    function BoxStack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxStack.prototype.render = function () {
        var _a = React.Children.toArray(this.props.children), first = _a[0], rest = _a.slice(1);
        if (first == null)
            return null;
        return (React.createElement(Box, { className: css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n        position: relative;\n        &>*:not(:first-child) {\n          position: absolute;\n          top: 0;\n          left: 0;\n        }\n      "], ["\n        position: relative;\n        &>*:not(:first-child) {\n          position: absolute;\n          top: 0;\n          left: 0;\n        }\n      "]))) },
            first,
            rest && React.createElement(BoxStack, null, rest)));
    };
    return BoxStack;
}(React.Component));
export { BoxStack };
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultNode = null;
        return _this;
    }
    Portal.prototype.componentWillUnmount = function () {
        if (this.defaultNode) {
            document.body.removeChild(this.defaultNode);
        }
        this.defaultNode = null;
    };
    Portal.prototype.render = function () {
        if (!canUseDOM) {
            return null;
        }
        if (this.defaultNode == null) {
            this.defaultNode = document.createElement('div');
            document.body.appendChild(this.defaultNode);
        }
        return ReactDOM.createPortal(this.props.children, this.defaultNode);
    };
    return Portal;
}(React.Component));
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disposers = [];
        _this.bodyCss = css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    overflow: hidden;\n  "], ["\n    overflow: hidden;\n  "])));
        return _this;
    }
    Overlay.prototype.componentDidMount = function () {
        var _this = this;
        this.disposers.push(autorun(function () {
            var isOpen = _this.props.isOpen;
            if (isOpen) {
                document.body.classList.add(_this.bodyCss);
            }
            else {
                document.body.classList.remove(_this.bodyCss);
            }
        }));
    };
    Overlay.prototype.componentWillUnmount = function () {
        if (document != null)
            document.body.classList.remove(this.bodyCss);
        for (var _i = 0, _a = this.disposers; _i < _a.length; _i++) {
            var disposer = _a[_i];
            disposer();
        }
    };
    Overlay.prototype.render = function () {
        var _a = this.props, isOpen = _a.isOpen, onClick = _a.onClick, children = _a.children;
        if (!isOpen.get())
            return null;
        return (React.createElement(Portal, null,
            React.createElement(Box, { onClick: onClick, className: css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n          position: fixed;\n          z-index: 99999;\n          right: 0;\n          left: 0;\n          top: 0;\n          bottom: 0;\n        "], ["\n          position: fixed;\n          z-index: 99999;\n          right: 0;\n          left: 0;\n          top: 0;\n          bottom: 0;\n        "]))) }, children)));
    };
    Overlay = __decorate([
        observer
    ], Overlay);
    return Overlay;
}(React.Component));
export { Overlay };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=base.js.map