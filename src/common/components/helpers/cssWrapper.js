var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from "react";
export var CssClassWrapper = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("span", __assign({}, { className: className }), children));
};
//# sourceMappingURL=cssWrapper.js.map