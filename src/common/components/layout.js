var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import styled from 'react-emotion';
export var Wrapper = styled('div')({
    padding: 40,
    background: '#f7df1e',
    textAlign: 'center'
});
export var FillFlex = styled('div')({
    display: 'flex',
    flex: '1',
    width: '100%',
    height: '100%',
});
export var Row = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'row',
    justifyContent: 'stretch'
});
export var HorizontalStretch = styled('div')({
    display: "flex",
    flex: "auto",
    flexDirection: "row",
    justifyContent: "stretch",
});
export var VerticalStretch = styled('div')({
    display: "flex",
    flex: "1 1 auto",
    height: "100%",
    flexDirection: "column",
    justifyContent: "stretch"
});
export var FillParent = styled('div')({
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
});
export var CssClassWrapper = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement("span", __assign({}, { className: className }), children));
};
/*
import styled from 'styled-components';

export const FillFlex =  styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const HorizontalStretch = styled.div`
  display: flex;
  flex: auto;
  flex-direction: row;
  justify-content: stretch;
`;

export const VerticalStretch = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  flex-direction: column;
  justify-content: stretch;
`;

export const FillParent = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Row = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: stretch;
`
*/ 
//# sourceMappingURL=layout.js.map