import * as React from "react";
interface ElementProps {
    child: Node;
}
export declare class ElementContainer extends React.Component<ElementProps, any> {
    render(): JSX.Element;
    shouldComponentUpdate(nextProps: any): boolean;
    componentDidUpdate(prevProps: any): void;
    componentDidMount(): void;
    _updateChild(prevProps: any): void;
}
export {};
