import * as React from 'react';
import { IObservableValue } from 'mobx';
import { IReactionPublic } from 'mobx';
import { IAutorunOptions } from 'mobx/lib/internal';
export declare const canUseDOM: boolean;
export declare class Space extends React.Component {
    render(): string;
}
export declare const Box: any;
export declare const Flex: any;
export declare const VFlex: any;
export declare const Fill: any;
export declare const BoxClickable: any;
export declare const FlexClickable: any;
export declare const Span: any;
export declare const A: any;
export declare class Comp<P = {}, S = {}> extends React.Component<P, S> {
    disposers: any[];
    autorun: (view: (r: IReactionPublic) => any, opts?: IAutorunOptions) => number;
    componentWillUnmount(): void;
}
export declare class BoxStack extends React.Component {
    render(): any;
}
export declare class Overlay extends React.Component<{
    isOpen: IObservableValue<boolean>;
    onClick: (e: any) => void;
}> {
    disposers: any[];
    bodyCss: string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
