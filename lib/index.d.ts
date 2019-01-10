/// <reference types="node" />
/// <reference types="prop-types" />
/// <reference types="react" />

export declare type ICSSRule = 'initial' | 'inherit' | 'unset';
export declare type ICSSPercentageRule = string;
export declare type ICSSPixelUnitRule = string | number;
export declare type ICSSBaselinePositionRule = 'baseline' | 'last baseline' | 'first baseline';
export declare type ICSSOverflowAndSelfPositionRule = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end' | 'safe center' | 'safe start' | 'safe end' | 'safe self-start' | 'safe self-end' | 'safe flex-start' | 'safe flex-end' | 'unsafe center' | 'unsafe start' | 'unsafe end' | 'unsafe self-start' | 'unsafe self-end' | 'unsafe flex-start' | 'unsafe flex-end';
export declare type ICSSDisplayRule = 'block' | 'inline' | 'run-in' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'ruby' | 'block flow' | 'inline table' | 'flex run-in' | 'list-item' | 'list-item block' | 'list-item inline' | 'list-item flow' | 'list-item flow-root' | 'list-item block flow' | 'list-item block flow-root' | 'flow list-item block' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-row' | 'table-cell' | 'table-column-group' | 'table-column' | 'table-caption' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | 'contents' | 'none' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid';
export declare type IFontWeight = ICSSRule | 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | 100 | '200' | 200 | '300' | 300 | '400' | 400 | '500' | 500 | '600' | 600 | '700' | 700 | '800' | 800 | '900' | 900;
export declare type IMixBlendModes = ICSSRule | 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
export interface IRawFontStyle {
	font?: ICSSRule | string;
	fontFamily?: ICSSRule | string;
	fontKerning?: ICSSRule | string;
	fontSize?: ICSSRule | 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'larger' | 'smaller' | ICSSPixelUnitRule | ICSSPercentageRule;
	fontSizeAdjust?: ICSSRule | 'none' | number;
	fontStretch?: ICSSRule | 'normal' | 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded';
	fontStyle?: ICSSRule | 'normal' | 'italic' | 'oblique';
	fontSynthesis?: ICSSRule | string;
	fontVariant?: ICSSRule | string;
	fontVariantAlternates?: ICSSRule | string;
	fontWeight?: IFontWeight;
}
export interface IFontFace extends IRawFontStyle {
	src?: string;
	unicodeRange?: ICSSRule | string;
	fontFeatureSettings?: string;
}
export interface IRawStyleBase extends IRawFontStyle {
	MsHighContrastAdjust?: ICSSRule | string;
	MozOsxFontSmoothing?: 'none' | 'antialiased' | 'grayscale' | 'subpixel-antialiased';
	WebkitFontSmoothing?: 'none' | 'antialiased' | 'grayscale' | 'subpixel-antialiased';
	WebkitOverflowScrolling?: 'auto' | 'touch';
	alignContent?: ICSSRule | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
	alignItems?: ICSSRule | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	alignSelf?: ICSSRule | 'auto' | 'normal' | 'stretch' | ICSSBaselinePositionRule | ICSSOverflowAndSelfPositionRule;
	alignmentAdjust?: ICSSRule | string;
	alignmentBaseline?: ICSSRule | string;
	animation?: ICSSRule | string;
	animationDelay?: ICSSRule | string;
	animationDirection?: ICSSRule | string;
	animationDuration?: ICSSRule | string;
	animationFillMode?: ICSSRule | 'none' | 'forwards' | 'backwards' | 'both';
	animationIterationCount?: ICSSRule | string;
	animationName?: ICSSRule | string;
	animationPlayState?: ICSSRule | string;
	animationTimingFunction?: ICSSRule | string;
	appearance?: ICSSRule | string;
	backdropFilter?: ICSSRule | string;
	WebkitBackdropFilter?: ICSSRule | string;
	backfaceVisibility?: ICSSRule | string;
	background?: ICSSRule | string;
	backgroundAttachment?: ICSSRule | 'scroll' | 'fixed' | 'local';
	backgroundBlendMode?: ICSSRule | string;
	backgroundClip?: ICSSRule | 'border-box' | 'padding-box' | 'content-box' | 'text';
	backgroundColor?: ICSSRule | string;
	backgroundComposite?: ICSSRule | string;
	backgroundImage?: ICSSRule | string;
	backgroundOrigin?: ICSSRule | string;
	backgroundPosition?: ICSSRule | string;
	backgroundRepeat?: ICSSRule | string;
	backgroundSize?: ICSSRule | string;
	border?: ICSSRule | 0 | string;
	borderBottom?: ICSSRule | ICSSPixelUnitRule;
	borderBottomColor?: ICSSRule | string;
	borderBottomLeftRadius?: ICSSRule | string;
	borderBottomRightRadius?: ICSSRule | string;
	borderBottomStyle?: ICSSRule | string;
	borderBottomWidth?: ICSSRule | ICSSPixelUnitRule;
	borderCollapse?: ICSSRule | string;
	borderColor?: ICSSRule | string;
	borderCornerShape?: ICSSRule | string;
	borderImageSource?: ICSSRule | string;
	borderImageWidth?: ICSSRule | ICSSPixelUnitRule;
	borderLeft?: ICSSRule | ICSSPixelUnitRule;
	borderLeftColor?: ICSSRule | string;
	borderLeftStyle?: ICSSRule | string;
	borderLeftWidth?: ICSSRule | ICSSPixelUnitRule;
	borderRadius?: ICSSRule | ICSSPixelUnitRule;
	borderRight?: ICSSRule | ICSSPixelUnitRule;
	borderRightColor?: ICSSRule | string;
	borderRightStyle?: ICSSRule | string;
	borderRightWidth?: ICSSRule | ICSSPixelUnitRule;
	borderSpacing?: ICSSRule | string;
	borderStyle?: ICSSRule | string;
	borderTop?: ICSSRule | ICSSPixelUnitRule;
	borderTopColor?: ICSSRule | string;
	borderTopLeftRadius?: ICSSRule | string;
	borderTopRightRadius?: ICSSRule | string;
	borderTopStyle?: ICSSRule | string;
	borderTopWidth?: ICSSRule | ICSSPixelUnitRule;
	borderWidth?: ICSSRule | ICSSPixelUnitRule;
	bottom?: ICSSRule | ICSSPixelUnitRule;
	boxDecorationBreak?: ICSSRule | string;
	boxShadow?: ICSSRule | string;
	boxSizing?: ICSSRule | 'border-box' | 'content-box';
	breakAfter?: ICSSRule | string;
	breakBefore?: ICSSRule | string;
	breakInside?: ICSSRule | string;
	clear?: ICSSRule | string;
	clipRule?: ICSSRule | string;
	color?: ICSSRule | string;
	columnCount?: ICSSRule | number | 'auto';
	columnFill?: ICSSRule | string;
	columnGap?: ICSSRule | string;
	columnRule?: ICSSRule | string;
	columnRuleColor?: ICSSRule | string;
	columnRuleWidth?: ICSSRule | ICSSPixelUnitRule;
	columnSpan?: ICSSRule | string;
	columnWidth?: ICSSRule | ICSSPixelUnitRule;
	columns?: ICSSRule | string;
	content?: string;
	counterIncrement?: ICSSRule | string;
	counterReset?: ICSSRule | string;
	cue?: ICSSRule | string;
	cueAfter?: ICSSRule | string;
	cursor?: ICSSRule | string;
	direction?: ICSSRule | string;
	display?: ICSSRule | ICSSDisplayRule;
	fill?: ICSSRule | string;
	fillOpacity?: ICSSRule | number;
	fillRule?: ICSSRule | string;
	filter?: ICSSRule | string;
	flex?: ICSSRule | string | number;
	flexBasis?: ICSSRule | string | number;
	flexDirection?: ICSSRule | 'row' | 'row-reverse' | 'column' | 'column-reverse';
	flexFlow?: ICSSRule | string;
	flexGrow?: ICSSRule | number | string;
	flexShrink?: ICSSRule | number | string;
	flexWrap?: ICSSRule | 'nowrap' | 'wrap' | 'wrap-reverse';
	float?: ICSSRule | string;
	flowFrom?: ICSSRule | string;
	gridArea?: ICSSRule | string;
	gridAutoColumns?: ICSSRule | string;
	gridAutoFlow?: ICSSRule | string;
	gridAutoRows?: ICSSRule | string;
	gridColumn?: ICSSRule | string;
	gridColumnEnd?: ICSSRule | string;
	gridColumnGap?: ICSSRule | string;
	gridColumnStart?: ICSSRule | string;
	gridGap?: ICSSRule | string;
	gridRow?: ICSSRule | string;
	gridRowEnd?: ICSSRule | string;
	gridRowGap?: ICSSRule | string;
	gridRowStart?: ICSSRule | string;
	gridRowPosition?: ICSSRule | string;
	gridTemplate?: ICSSRule | string;
	gridTemplateAreas?: ICSSRule | string;
	gridTemplateColumns?: ICSSRule | string;
	gridTemplateRows?: ICSSRule | string;
	height?: ICSSRule | ICSSPixelUnitRule;
	hyphenateLimitChars?: ICSSRule | string;
	hyphenateLimitLines?: ICSSRule | string;
	hyphenateLimitZone?: ICSSRule | string;
	hyphens?: ICSSRule | string;
	justifyContent?: ICSSRule | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
	justifySelf?: ICSSRule | 'auto' | 'normal' | 'stretch' | ICSSBaselinePositionRule | ICSSOverflowAndSelfPositionRule | 'left' | 'right' | 'safe left' | 'safe right' | 'unsafe left' | 'unsafe right';
	left?: ICSSRule | ICSSPixelUnitRule;
	letterSpacing?: ICSSRule | string;
	lineHeight?: ICSSRule | 'normal' | ICSSPixelUnitRule | ICSSPercentageRule;
	listStyle?: ICSSRule | string;
	listStyleImage?: ICSSRule | string;
	listStylePosition?: ICSSRule | string;
	listStyleType?: ICSSRule | string;
	margin?: ICSSRule | ICSSPixelUnitRule;
	marginBottom?: ICSSRule | ICSSPixelUnitRule;
	marginLeft?: ICSSRule | ICSSPixelUnitRule;
	marginRight?: ICSSRule | ICSSPixelUnitRule;
	marginTop?: ICSSRule | ICSSPixelUnitRule;
	marqueeDirection?: ICSSRule | string;
	marqueeStyle?: ICSSRule | string;
	mask?: ICSSRule | string;
	maskBorder?: ICSSRule | string;
	maskBorderRepeat?: ICSSRule | string;
	maskBorderSlice?: ICSSRule | string;
	maskBorderSource?: ICSSRule | string;
	maskBorderWidth?: ICSSRule | ICSSPixelUnitRule;
	maskClip?: ICSSRule | string;
	maskOrigin?: ICSSRule | string;
	maxFontSize?: ICSSRule | ICSSPixelUnitRule;
	maxHeight?: ICSSRule | ICSSPixelUnitRule;
	maxWidth?: ICSSRule | ICSSPixelUnitRule;
	minHeight?: ICSSRule | ICSSPixelUnitRule;
	minWidth?: ICSSRule | ICSSPixelUnitRule;
	mixBlendMode?: ICSSRule | IMixBlendModes;
	opacity?: ICSSRule | number | string;
	order?: ICSSRule | number;
	orphans?: ICSSRule | number;
	outline?: ICSSRule | 0 | string;
	outlineColor?: ICSSRule | string;
	outlineOffset?: ICSSRule | string;
	overflow?: ICSSRule | 'auto' | 'hidden' | 'scroll' | 'visible';
	overflowStyle?: ICSSRule | string;
	overflowWrap?: ICSSRule | 'normal' | 'break-word';
	overflowX?: ICSSRule | 'auto' | 'hidden' | 'scroll' | 'visible';
	overflowY?: ICSSRule | 'auto' | 'hidden' | 'scroll' | 'visible';
	padding?: ICSSRule | ICSSPixelUnitRule;
	paddingBlockEnd?: ICSSRule | ICSSPixelUnitRule;
	paddingBlockStart?: ICSSRule | ICSSPixelUnitRule;
	paddingLeft?: ICSSRule | ICSSPixelUnitRule;
	paddingBottom?: ICSSRule | ICSSPixelUnitRule;
	paddingInlineEnd?: ICSSRule | ICSSPixelUnitRule;
	paddingInlineStart?: ICSSRule | ICSSPixelUnitRule;
	paddingRight?: ICSSRule | ICSSPixelUnitRule;
	paddingTop?: ICSSRule | ICSSPixelUnitRule;
	pageBreakAfter?: ICSSRule | string;
	pageBreakBefore?: ICSSRule | string;
	pageBreakInside?: ICSSRule | string;
	pause?: ICSSRule | string;
	pauseAfter?: ICSSRule | string;
	pauseBefore?: ICSSRule | string;
	perspective?: ICSSRule | string;
	perspectiveOrigin?: ICSSRule | string;
	pointerEvents?: ICSSRule | string;
	position?: ICSSRule | 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
	quotes?: ICSSRule | string;
	regionFragment?: ICSSRule | string;
	resize?: ICSSRule | 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline';
	restAfter?: ICSSRule | string;
	restBefore?: ICSSRule | string;
	right?: ICSSRule | ICSSPixelUnitRule;
	shapeImageThreshold?: ICSSRule | string;
	shapeInside?: ICSSRule | string;
	shapeMargin?: ICSSRule | string;
	shapeOutside?: ICSSRule | string;
	speak?: ICSSRule | string;
	speakAs?: ICSSRule | string;
	stroke?: ICSSRule | string;
	strokeLinecap?: ICSSRule | 'butt' | 'round' | 'square';
	strokeOpacity?: ICSSRule | number;
	strokeWidth?: ICSSRule | ICSSPixelUnitRule;
	tabSize?: ICSSRule | string;
	tableLayout?: ICSSRule | string;
	textAlign?: ICSSRule | string;
	textAlignLast?: ICSSRule | string;
	textDecoration?: ICSSRule | string;
	textDecorationColor?: ICSSRule | string;
	textDecorationLine?: ICSSRule | string;
	textDecorationSkip?: ICSSRule | string;
	textDecorationStyle?: ICSSRule | string;
	textEmphasis?: ICSSRule | string;
	textEmphasisColor?: ICSSRule | string;
	textEmphasisStyle?: ICSSRule | string;
	textHeight?: ICSSRule | string;
	textIndent?: ICSSRule | string;
	textOverflow?: ICSSRule | string;
	textOverline?: ICSSRule | string;
	textOverlineColor?: ICSSRule | string;
	textOverlineMode?: ICSSRule | string;
	textOverlineStyle?: ICSSRule | string;
	textOverlineWidth?: ICSSRule | ICSSPixelUnitRule;
	textRendering?: ICSSRule | string;
	textShadow?: ICSSRule | string;
	textTransform?: ICSSRule | string;
	textUnderlinePosition?: ICSSRule | string;
	textUnderlineStyle?: ICSSRule | string;
	top?: ICSSRule | ICSSPixelUnitRule;
	touchAction?: ICSSRule | string;
	transform?: ICSSRule | string;
	transformOrigin?: ICSSRule | string;
	transformOriginZ?: ICSSRule | string;
	transformStyle?: ICSSRule | string;
	transition?: ICSSRule | string;
	transitionDelay?: ICSSRule | string;
	transitionDuration?: ICSSRule | string;
	transitionProperty?: ICSSRule | string;
	transitionTimingFunction?: ICSSRule | string;
	unicodeBidi?: ICSSRule | string;
	userFocus?: ICSSRule | string;
	userInput?: ICSSRule | string;
	userSelect?: ICSSRule | 'none' | 'auto' | 'text' | 'all' | 'contain';
	verticalAlign?: ICSSRule | string;
	visibility?: ICSSRule | string;
	voiceBalance?: ICSSRule | string;
	voiceDuration?: ICSSRule | string;
	voiceFamily?: ICSSRule | string;
	voicePitch?: ICSSRule | string;
	voiceRange?: ICSSRule | string;
	voiceRate?: ICSSRule | string;
	voiceStress?: ICSSRule | string;
	voiceVolume?: ICSSRule | string;
	whiteSpace?: ICSSRule | string;
	widows?: ICSSRule | number;
	width?: ICSSRule | ICSSPixelUnitRule;
	wordBreak?: ICSSRule | string;
	wordSpacing?: ICSSRule | string;
	wordWrap?: ICSSRule | string;
	wrapFlow?: ICSSRule | string;
	wrapMargin?: ICSSRule | string;
	writingMode?: ICSSRule | string;
	zIndex?: ICSSRule | 'auto' | number;
	zoom?: ICSSRule | 'auto' | number | ICSSPercentageRule;
}
export declare type IRawStyle = IRawStyleBase & {
	displayName?: string;
	selectors?: {
		[key: string]: IStyle;
	};
};
export declare type IStyleBase = IRawStyle | string | false | null | undefined;
export interface IStyleBaseArray extends Array<IStyle> {
}
export declare type IStyle = IStyleBase | IStyleBaseArray;
export declare type IStyleFunction<TStylesProps, TStyleSet extends IStyleSet<TStyleSet>> = (props: TStylesProps) => Partial<TStyleSet>;
export declare type IStyleFunctionOrObject<TStylesProps, TStyleSet extends IStyleSet<TStyleSet>> = IStyleFunction<TStylesProps, TStyleSet> | Partial<TStyleSet>;
export declare type Diff<T extends keyof any, U extends keyof any> = ({
	[P in T]: P;
} & {
	[P in U]: never;
} & {
	[x: string]: never;
})[T];
export declare type Omit<U, K extends keyof U> = Pick<U, Diff<keyof U, K>>;
export declare type __MapToFunctionType<T> = Extract<T, Function> extends never ? (...args: any[]) => Partial<T> : Extract<T, Function>;
export declare type IStyleSet<TStyleSet extends IStyleSet<TStyleSet>> = {
	[P in keyof Omit<TStyleSet, 'subComponentStyles'>]: IStyle;
} & {
	subComponentStyles?: {
		[P in keyof TStyleSet['subComponentStyles']]: IStyleFunctionOrObject<any, IStyleSet<any>>;
	};
};
export declare type IConcatenatedStyleSet<TStyleSet extends IStyleSet<TStyleSet>> = {
	[P in keyof Omit<TStyleSet, 'subComponentStyles'>]: IStyle;
} & {
	subComponentStyles?: {
		[P in keyof TStyleSet['subComponentStyles']]: IStyleFunction<any, IStyleSet<any>>;
	};
};
export declare type IProcessedStyleSet<TStyleSet extends IStyleSet<TStyleSet>> = {
	[P in keyof Omit<TStyleSet, 'subComponentStyles'>]: string;
} & {
	subComponentStyles: {
		[P in keyof TStyleSet['subComponentStyles']]: __MapToFunctionType<TStyleSet['subComponentStyles'][P]>;
	};
};
export declare function concatStyleSets<TStyleSet extends IStyleSet<TStyleSet>>(styleSet: TStyleSet | false | null | undefined): IConcatenatedStyleSet<TStyleSet>;
export declare function concatStyleSets<TStyleSet1 extends IStyleSet<TStyleSet1>, TStyleSet2 extends IStyleSet<TStyleSet2>>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined): IConcatenatedStyleSet<TStyleSet1 & TStyleSet2>;
export declare function concatStyleSets<TStyleSet1 extends IStyleSet<TStyleSet1>, TStyleSet2 extends IStyleSet<TStyleSet2>, TStyleSet3 extends IStyleSet<TStyleSet3>>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined, styleSet3: TStyleSet3 | false | null | undefined): IConcatenatedStyleSet<TStyleSet1 & TStyleSet2 & TStyleSet3>;
export declare function concatStyleSets<TStyleSet1 extends IStyleSet<TStyleSet1>, TStyleSet2 extends IStyleSet<TStyleSet2>, TStyleSet3 extends IStyleSet<TStyleSet3>, TStyleSet4 extends IStyleSet<TStyleSet4>>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined, styleSet3: TStyleSet3 | false | null | undefined, styleSet4: TStyleSet3 | false | null | undefined): IConcatenatedStyleSet<TStyleSet1 & TStyleSet2 & TStyleSet3 & TStyleSet4>;
export declare function concatStyleSets<TStyleSet1 extends IStyleSet<TStyleSet1>, TStyleSet2 extends IStyleSet<TStyleSet2>, TStyleSet3 extends IStyleSet<TStyleSet3>, TStyleSet4 extends IStyleSet<TStyleSet4>>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined, styleSet3: TStyleSet3 | false | null | undefined, styleSet4: TStyleSet4 | false | null | undefined): IConcatenatedStyleSet<TStyleSet1 & TStyleSet2 & TStyleSet3 & TStyleSet4>;
export declare function concatStyleSets<TStyleSet1 extends IStyleSet<TStyleSet1>, TStyleSet2 extends IStyleSet<TStyleSet2>, TStyleSet3 extends IStyleSet<TStyleSet3>, TStyleSet4 extends IStyleSet<TStyleSet4>, TStyleSet5 extends IStyleSet<TStyleSet5>>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined, styleSet3: TStyleSet3 | false | null | undefined, styleSet4: TStyleSet4 | false | null | undefined, styleSet5: TStyleSet5 | false | null | undefined): IConcatenatedStyleSet<TStyleSet1 & TStyleSet2 & TStyleSet3 & TStyleSet4 & TStyleSet5>;
export declare function concatStyleSets<TStyleSet1 extends IStyleSet<TStyleSet1>, TStyleSet2 extends IStyleSet<TStyleSet2>, TStyleSet3 extends IStyleSet<TStyleSet3>, TStyleSet4 extends IStyleSet<TStyleSet4>, TStyleSet5 extends IStyleSet<TStyleSet5>, TStyleSet6 extends IStyleSet<TStyleSet6>>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined, styleSet3: TStyleSet3 | false | null | undefined, styleSet4: TStyleSet4 | false | null | undefined, styleSet5: TStyleSet5 | false | null | undefined, styleSet6: TStyleSet6 | false | null | undefined): IConcatenatedStyleSet<TStyleSet1 & TStyleSet2 & TStyleSet3 & TStyleSet4 & TStyleSet5 & TStyleSet6>;
export declare function concatStyleSets(...styleSets: (IStyleSet<any> | false | null | undefined)[]): IConcatenatedStyleSet<any>;
export declare function extractStyleParts(...args: (IStyle | IStyle[] | false | null | undefined)[]): {
	classes: string[];
	objects: IStyleBaseArray;
};
export declare function fontFace(font: IFontFace): void;
export interface IVendorSettings {
	isWebkit?: boolean;
	isMoz?: boolean;
	isMs?: boolean;
	isOpera?: boolean;
}
export declare function getVendorSettings(): IVendorSettings;
export declare function setVendorSettings(vendorSettings?: IVendorSettings): void;
export declare function keyframes(timeline: {
	[key: string]: {};
}): string;
export declare function mergeStyles(...args: (IStyle | IStyleBaseArray | false | null | undefined)[]): string;
export declare function mergeStyleSets<TStyleSet extends IStyleSet<TStyleSet>>(styleSet: TStyleSet | false | null | undefined): IProcessedStyleSet<TStyleSet>;
export declare function mergeStyleSets<TStyleSet1 extends IStyleSet<TStyleSet1>, TStyleSet2 extends IStyleSet<TStyleSet2>>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined): IProcessedStyleSet<TStyleSet1 & TStyleSet2>;
export declare function mergeStyleSets<TStyleSet1 extends IStyleSet<TStyleSet1>, TStyleSet2 extends IStyleSet<TStyleSet2>, TStyleSet3 extends IStyleSet<TStyleSet3>>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined, styleSet3: TStyleSet3 | false | null | undefined): IProcessedStyleSet<TStyleSet1 & TStyleSet2 & TStyleSet3>;
export declare function mergeStyleSets<TStyleSet1 extends IStyleSet<TStyleSet1>, TStyleSet2 extends IStyleSet<TStyleSet2>, TStyleSet3 extends IStyleSet<TStyleSet3>, TStyleSet4 extends IStyleSet<TStyleSet4>>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined, styleSet3: TStyleSet3 | false | null | undefined, styleSet4: TStyleSet4 | false | null | undefined): IProcessedStyleSet<TStyleSet1 & TStyleSet2 & TStyleSet3 & TStyleSet4>;
export declare function mergeStyleSets(...styleSets: Array<IStyleSet<any> | undefined | false | null>): IProcessedStyleSet<any>;
export declare function renderStatic(onRender: () => string, namespace?: string): {
	html: string;
	css: string;
};
export declare const InjectionMode: {
	none: 0;
	insertNode: 1;
	appendChild: 2;
};
export declare type InjectionMode = typeof InjectionMode[keyof typeof InjectionMode];
export interface IStyleSheetConfig {
	injectionMode?: InjectionMode;
	defaultPrefix?: string;
	namespace?: string;
	onInsertRule?: (rule: string) => void;
}
export declare class Stylesheet {
	private _lastStyleElement?;
	private _styleElement?;
	private _rules;
	private _preservedRules;
	private _config;
	private _rulesToInsert;
	private _counter;
	private _keyToClassName;
	private _onResetCallbacks;
	private _classNameToArgs;
	static getInstance(): Stylesheet;
	constructor(config?: IStyleSheetConfig);
	setConfig(config?: IStyleSheetConfig): void;
	onReset(callback: () => void): void;
	getClassName(displayName?: string): string;
	cacheClassName(className: string, key: string, args: IStyle[], rules: string[]): void;
	classNameFromKey(key: string): string | undefined;
	argsFromClassName(className: string): IStyle[] | undefined;
	insertedRulesFromClassName(className: string): string[] | undefined;
	insertRule(rule: string, preserve?: boolean): void;
	getRules(includePreservedRules?: boolean): string;
	reset(): void;
	resetKeys(): void;
	private _getStyleElement;
	private _createStyleElement;
}
export declare function serializeRuleEntries(ruleEntries: {
	[key: string]: string | number;
}): string;
export interface IRegistration {
	className: string;
	key: string;
	args: IStyle[];
	rulesToInsert: string[];
}
export declare function styleToRegistration(...args: IStyle[]): IRegistration | undefined;
export declare function applyRegistration(registration: IRegistration, classMap?: {
	[key: string]: string;
}): void;
export declare function styleToClassName(...args: IStyle[]): string;
export declare function kebabRules(rulePairs: (string | number)[], index: number): void;
export declare function prefixRules(rulePairs: (string | number)[], index: number): void;
export declare function provideUnits(rulePairs: (string | number)[], index: number): void;
export declare function _msSetRTL(isRTL: boolean): void;
export declare function _msGetRTL(): boolean;
export declare function rtlifyRules(rulePairs: (string | number)[], index: number): void;
export interface IAnimationStyles {
	slideRightIn10: IRawStyle;
	slideRightIn20: IRawStyle;
	slideRightIn40: IRawStyle;
	slideRightIn400: IRawStyle;
	slideLeftIn10: IRawStyle;
	slideLeftIn20: IRawStyle;
	slideLeftIn40: IRawStyle;
	slideLeftIn400: IRawStyle;
	slideUpIn10: IRawStyle;
	slideUpIn20: IRawStyle;
	slideDownIn10: IRawStyle;
	slideDownIn20: IRawStyle;
	slideRightOut10: IRawStyle;
	slideRightOut20: IRawStyle;
	slideRightOut40: IRawStyle;
	slideRightOut400: IRawStyle;
	slideLeftOut10: IRawStyle;
	slideLeftOut20: IRawStyle;
	slideLeftOut40: IRawStyle;
	slideLeftOut400: IRawStyle;
	slideUpOut10: IRawStyle;
	slideUpOut20: IRawStyle;
	slideDownOut10: IRawStyle;
	slideDownOut20: IRawStyle;
	scaleUpIn100: IRawStyle;
	scaleDownIn100: IRawStyle;
	scaleUpOut103: IRawStyle;
	scaleDownOut98: IRawStyle;
	fadeIn100: IRawStyle;
	fadeIn200: IRawStyle;
	fadeIn400: IRawStyle;
	fadeIn500: IRawStyle;
	fadeOut100: IRawStyle;
	fadeOut200: IRawStyle;
	fadeOut400: IRawStyle;
	fadeOut500: IRawStyle;
	rotate90deg: IRawStyle;
	rotateN90deg: IRawStyle;
}
export interface IAnimationVariables {
	easeFunction1: string;
	easeFunction2: string;
	durationValue1: string;
	durationValue2: string;
	durationValue3: string;
	durationValue4: string;
}
export interface IEffects {
	elevation4: IRawStyle;
	elevation8: IRawStyle;
	elevation16: IRawStyle;
	elevation64: IRawStyle;
	roundedCorner2: number;
}
export interface IFabricConfig {
	fontBaseUrl?: string;
	mergeStyles?: IStyleSheetConfig;
}
export interface IFontStyles {
	tiny: IRawStyle;
	xSmall: IRawStyle;
	small: IRawStyle;
	smallPlus: IRawStyle;
	medium: IRawStyle;
	mediumPlus: IRawStyle;
	large: IRawStyle;
	xLarge: IRawStyle;
	xxLarge: IRawStyle;
	superLarge: IRawStyle;
	mega: IRawStyle;
}
export interface IPalette {
	themeDarker: string;
	themeDark: string;
	themeDarkAlt: string;
	themePrimary: string;
	themeSecondary: string;
	themeTertiary: string;
	themeLight: string;
	themeLighter: string;
	themeLighterAlt: string;
	black: string;
	blackTranslucent40: string;
	neutralDark: string;
	neutralPrimary: string;
	neutralPrimaryAlt: string;
	neutralSecondary: string;
	neutralSecondaryAlt: string;
	neutralTertiary: string;
	neutralTertiaryAlt: string;
	neutralQuaternary: string;
	neutralQuaternaryAlt: string;
	neutralLight: string;
	neutralLighter: string;
	neutralLighterAlt: string;
	accent: string;
	white: string;
	whiteTranslucent40: string;
	yellow: string;
	yellowLight: string;
	orange: string;
	orangeLight: string;
	orangeLighter: string;
	redDark: string;
	red: string;
	magentaDark: string;
	magenta: string;
	magentaLight: string;
	purpleDark: string;
	purple: string;
	purpleLight: string;
	blueDark: string;
	blueMid: string;
	blue: string;
	blueLight: string;
	tealDark: string;
	teal: string;
	tealLight: string;
	greenDark: string;
	green: string;
	greenLight: string;
}
export interface ISemanticTextColors {
	bodyText: string;
	bodyTextChecked: string;
	bodySubtext: string;
	actionLink: string;
	actionLinkHovered: string;
	link: string;
	linkHovered: string;
	disabledText: string;
	disabledBodyText: string;
	disabledSubtext: string;
	disabledBodySubtext: string;
	errorText: string;
	warningText: string;
	inputText: string;
	inputTextHovered: string;
	inputPlaceholderText: string;
	buttonText: string;
	buttonTextHovered: string;
	buttonTextChecked: string;
	buttonTextCheckedHovered: string;
	buttonTextPressed: string;
	buttonTextDisabled: string;
	primaryButtonText: string;
	primaryButtonTextHovered: string;
	primaryButtonTextPressed: string;
	primaryButtonTextDisabled: string;
	accentButtonText: string;
	listText: string;
	listTextColor: string;
}
export interface ISemanticColors extends ISemanticTextColors {
	bodyBackground: string;
	bodyStandoutBackground: string;
	bodyFrameBackground: string;
	bodyFrameDivider: string;
	bodyDivider: string;
	disabledBackground: string;
	focusBorder: string;
	variantBorder: string;
	variantBorderHovered: string;
	defaultStateBackground: string;
	errorBackground: string;
	blockingBackground: string;
	warningBackground: string;
	warningHighlight: string;
	successBackground: string;
	inputBorder: string;
	smallInputBorder: string;
	inputBorderHovered: string;
	inputBackground: string;
	inputBackgroundChecked: string;
	inputBackgroundCheckedHovered: string;
	inputForegroundChecked: string;
	inputFocusBorderAlt: string;
	buttonBackground: string;
	buttonBackgroundChecked: string;
	buttonBackgroundHovered: string;
	buttonBackgroundCheckedHovered: string;
	buttonBackgroundDisabled: string;
	buttonBackgroundPressed: string;
	buttonBorder: string;
	buttonBorderDisabled: string;
	primaryButtonBackground: string;
	primaryButtonBackgroundHovered: string;
	primaryButtonBackgroundPressed: string;
	primaryButtonBackgroundDisabled: string;
	primaryButtonBorder: string;
	accentButtonBackground: string;
	menuBackground: string;
	menuDivider: string;
	menuIcon: string;
	menuHeader: string;
	menuItemBackgroundHovered: string;
	menuItemBackgroundPressed: string;
	menuItemText: string;
	menuItemTextHovered: string;
	listBackground: string;
	listText: string;
	listItemBackgroundHovered: string;
	listItemBackgroundChecked: string;
	listItemBackgroundCheckedHovered: string;
	listHeaderBackgroundHovered: string;
	listHeaderBackgroundPressed: string;
	menuItemBackgroundChecked: string;
}
export interface ISpacing {
	s2: string;
	s1: string;
	m: string;
	l1: string;
	l2: string;
}
export declare type ISchemeNames = 'default' | 'neutral' | 'soft' | 'strong';
export interface IScheme {
	palette: IPalette;
	fonts: IFontStyles;
	semanticColors: ISemanticColors;
	isInverted: boolean;
	disableGlobalClassNames: boolean;
	spacing: ISpacing;
	effects: IEffects;
}
export interface ITheme extends IScheme {
	schemes?: {
		[P in ISchemeNames]?: IScheme;
	};
}
export declare type IPartialTheme = {
	palette?: Partial<IPalette>;
	fonts?: Partial<IFontStyles>;
	defaultFontStyle?: IRawStyle;
	semanticColors?: Partial<ISemanticColors>;
	isInverted?: boolean;
	disableGlobalClassNames?: boolean;
	spacing?: Partial<ISpacing>;
	effects?: Partial<IEffects>;
	schemes?: {
		[P in ISchemeNames]?: IScheme;
	};
};
export declare const AnimationClassNames: {
	[key in keyof IAnimationStyles]?: string;
};
export declare const FontClassNames: {
	[key in keyof IFontStyles]?: string;
};
export interface IColorClassNames {
	themeDarker: string;
	themeDarkerHover: string;
	themeDarkerBackground: string;
	themeDarkerBackgroundHover: string;
	themeDarkerBorder: string;
	themeDarkerBorderHover: string;
	themeDark: string;
	themeDarkHover: string;
	themeDarkBackground: string;
	themeDarkBackgroundHover: string;
	themeDarkBorder: string;
	themeDarkBorderHover: string;
	themeDarkAlt: string;
	themeDarkAltHover: string;
	themeDarkAltBackground: string;
	themeDarkAltBackgroundHover: string;
	themeDarkAltBorder: string;
	themeDarkAltBorderHover: string;
	themePrimary: string;
	themePrimaryHover: string;
	themePrimaryBackground: string;
	themePrimaryBackgroundHover: string;
	themePrimaryBorder: string;
	themePrimaryBorderHover: string;
	themeSecondary: string;
	themeSecondaryHover: string;
	themeSecondaryBackground: string;
	themeSecondaryBackgroundHover: string;
	themeSecondaryBorder: string;
	themeSecondaryBorderHover: string;
	themeTertiary: string;
	themeTertiaryHover: string;
	themeTertiaryBackground: string;
	themeTertiaryBackgroundHover: string;
	themeTertiaryBorder: string;
	themeTertiaryBorderHover: string;
	themeLight: string;
	themeLightHover: string;
	themeLightBackground: string;
	themeLightBackgroundHover: string;
	themeLightBorder: string;
	themeLightBorderHover: string;
	themeLighter: string;
	themeLighterHover: string;
	themeLighterBackground: string;
	themeLighterBackgroundHover: string;
	themeLighterBorder: string;
	themeLighterBorderHover: string;
	themeLighterAlt: string;
	themeLighterAltHover: string;
	themeLighterAltBackground: string;
	themeLighterAltBackgroundHover: string;
	themeLighterAltBorder: string;
	themeLighterAltBorderHover: string;
	black: string;
	blackHover: string;
	blackBackground: string;
	blackBackgroundHover: string;
	blackBorder: string;
	blackBorderHover: string;
	blackTranslucent40: string;
	blackTranslucent40Hover: string;
	blackTranslucent40Background: string;
	blackTranslucent40BackgroundHover: string;
	blackTranslucent40Border: string;
	blackTranslucent40BorderHover: string;
	neutralDark: string;
	neutralDarkHover: string;
	neutralDarkBackground: string;
	neutralDarkBackgroundHover: string;
	neutralDarkBorder: string;
	neutralDarkBorderHover: string;
	neutralPrimary: string;
	neutralPrimaryHover: string;
	neutralPrimaryBackground: string;
	neutralPrimaryBackgroundHover: string;
	neutralPrimaryBorder: string;
	neutralPrimaryBorderHover: string;
	neutralPrimaryAlt: string;
	neutralPrimaryAltHover: string;
	neutralPrimaryAltBackground: string;
	neutralPrimaryAltBackgroundHover: string;
	neutralPrimaryAltBorder: string;
	neutralPrimaryAltBorderHover: string;
	neutralSecondary: string;
	neutralSecondaryHover: string;
	neutralSecondaryBackground: string;
	neutralSecondaryBackgroundHover: string;
	neutralSecondaryBorder: string;
	neutralSecondaryBorderHover: string;
	neutralSecondaryAlt: string;
	neutralSecondaryAltHover: string;
	neutralSecondaryAltBackground: string;
	neutralSecondaryAltBackgroundHover: string;
	neutralSecondaryAltBorder: string;
	neutralSecondaryAltBorderHover: string;
	neutralTertiary: string;
	neutralTertiaryHover: string;
	neutralTertiaryBackground: string;
	neutralTertiaryBackgroundHover: string;
	neutralTertiaryBorder: string;
	neutralTertiaryBorderHover: string;
	neutralTertiaryAlt: string;
	neutralTertiaryAltHover: string;
	neutralTertiaryAltBackground: string;
	neutralTertiaryAltBackgroundHover: string;
	neutralTertiaryAltBorder: string;
	neutralTertiaryAltBorderHover: string;
	neutralQuaternary: string;
	neutralQuaternaryHover: string;
	neutralQuaternaryBackground: string;
	neutralQuaternaryBackgroundHover: string;
	neutralQuaternaryBorder: string;
	neutralQuaternaryBorderHover: string;
	neutralQuaternaryAlt: string;
	neutralQuaternaryAltHover: string;
	neutralQuaternaryAltBackground: string;
	neutralQuaternaryAltBackgroundHover: string;
	neutralQuaternaryAltBorder: string;
	neutralQuaternaryAltBorderHover: string;
	neutralLight: string;
	neutralLightHover: string;
	neutralLightBackground: string;
	neutralLightBackgroundHover: string;
	neutralLightBorder: string;
	neutralLightBorderHover: string;
	neutralLighter: string;
	neutralLighterHover: string;
	neutralLighterBackground: string;
	neutralLighterBackgroundHover: string;
	neutralLighterBorder: string;
	neutralLighterBorderHover: string;
	neutralLighterAlt: string;
	neutralLighterAltHover: string;
	neutralLighterAltBackground: string;
	neutralLighterAltBackgroundHover: string;
	neutralLighterAltBorder: string;
	neutralLighterAltBorderHover: string;
	white: string;
	whiteHover: string;
	whiteBackground: string;
	whiteBackgroundHover: string;
	whiteBorder: string;
	whiteBorderHover: string;
	whiteTranslucent40: string;
	whiteTranslucent40Hover: string;
	whiteTranslucent40Background: string;
	whiteTranslucent40BackgroundHover: string;
	whiteTranslucent40Border: string;
	whiteTranslucent40BorderHover: string;
	yellow: string;
	yellowHover: string;
	yellowBackground: string;
	yellowBackgroundHover: string;
	yellowBorder: string;
	yellowBorderHover: string;
	yellowLight: string;
	yellowLightHover: string;
	yellowLightBackground: string;
	yellowLightBackgroundHover: string;
	yellowLightBorder: string;
	yellowLightBorderHover: string;
	orange: string;
	orangeHover: string;
	orangeBackground: string;
	orangeBackgroundHover: string;
	orangeBorder: string;
	orangeBorderHover: string;
	orangeLight: string;
	orangeLightHover: string;
	orangeLightBackground: string;
	orangeLightBackgroundHover: string;
	orangeLightBorder: string;
	orangeLightBorderHover: string;
	orangeLighter: string;
	orangeLighterHover: string;
	orangeLighterBackground: string;
	orangeLighterBackgroundHover: string;
	orangeLighterBorder: string;
	orangeLighterBorderHover: string;
	redDark: string;
	redDarkHover: string;
	redDarkBackground: string;
	redDarkBackgroundHover: string;
	redDarkBorder: string;
	redDarkBorderHover: string;
	red: string;
	redHover: string;
	redBackground: string;
	redBackgroundHover: string;
	redBorder: string;
	redBorderHover: string;
	magentaDark: string;
	magentaDarkHover: string;
	magentaDarkBackground: string;
	magentaDarkBackgroundHover: string;
	magentaDarkBorder: string;
	magentaDarkBorderHover: string;
	magenta: string;
	magentaHover: string;
	magentaBackground: string;
	magentaBackgroundHover: string;
	magentaBorder: string;
	magentaBorderHover: string;
	magentaLight: string;
	magentaLightHover: string;
	magentaLightBackground: string;
	magentaLightBackgroundHover: string;
	magentaLightBorder: string;
	magentaLightBorderHover: string;
	purpleDark: string;
	purpleDarkHover: string;
	purpleDarkBackground: string;
	purpleDarkBackgroundHover: string;
	purpleDarkBorder: string;
	purpleDarkBorderHover: string;
	purple: string;
	purpleHover: string;
	purpleBackground: string;
	purpleBackgroundHover: string;
	purpleBorder: string;
	purpleBorderHover: string;
	purpleLight: string;
	purpleLightHover: string;
	purpleLightBackground: string;
	purpleLightBackgroundHover: string;
	purpleLightBorder: string;
	purpleLightBorderHover: string;
	blueDark: string;
	blueDarkHover: string;
	blueDarkBackground: string;
	blueDarkBackgroundHover: string;
	blueDarkBorder: string;
	blueDarkBorderHover: string;
	blueMid: string;
	blueMidHover: string;
	blueMidBackground: string;
	blueMidBackgroundHover: string;
	blueMidBorder: string;
	blueMidBorderHover: string;
	blue: string;
	blueHover: string;
	blueBackground: string;
	blueBackgroundHover: string;
	blueBorder: string;
	blueBorderHover: string;
	blueLight: string;
	blueLightHover: string;
	blueLightBackground: string;
	blueLightBackgroundHover: string;
	blueLightBorder: string;
	blueLightBorderHover: string;
	tealDark: string;
	tealDarkHover: string;
	tealDarkBackground: string;
	tealDarkBackgroundHover: string;
	tealDarkBorder: string;
	tealDarkBorderHover: string;
	teal: string;
	tealHover: string;
	tealBackground: string;
	tealBackgroundHover: string;
	tealBorder: string;
	tealBorderHover: string;
	tealLight: string;
	tealLightHover: string;
	tealLightBackground: string;
	tealLightBackgroundHover: string;
	tealLightBorder: string;
	tealLightBorderHover: string;
	greenDark: string;
	greenDarkHover: string;
	greenDarkBackground: string;
	greenDarkBackgroundHover: string;
	greenDarkBorder: string;
	greenDarkBorderHover: string;
	green: string;
	greenHover: string;
	greenBackground: string;
	greenBackgroundHover: string;
	greenBorder: string;
	greenBorderHover: string;
	greenLight: string;
	greenLightHover: string;
	greenLightBackground: string;
	greenLightBackgroundHover: string;
	greenLightBorder: string;
	greenLightBorderHover: string;
}
export declare const ColorClassNames: IColorClassNames;
export declare const AnimationVariables: IAnimationVariables;
export declare const AnimationStyles: IAnimationStyles;
export declare const DefaultPalette: IPalette;
export declare const DefaultFontStyles: IFontStyles;
export declare function registerDefaultFontFaces(baseUrl: string): void;
export declare namespace FontSizes {
	const mini: string;
	const xSmall: string;
	const small: string;
	const smallPlus: string;
	const medium: string;
	const mediumPlus: string;
	const icon: string;
	const large: string;
	const xLarge: string;
	const xxLarge: string;
	const superLarge: string;
	const mega: string;
}
export declare namespace FontWeights {
	const light: IFontWeight;
	const semilight: IFontWeight;
	const regular: IFontWeight;
	const semibold: IFontWeight;
	const bold: IFontWeight;
}
export declare namespace IconFontSizes {
	const xSmall: string;
	const small: string;
	const medium: string;
	const large: string;
}
export declare function createFontStyles(localeCode: string | null): IFontStyles;
export declare function getFocusStyle(theme: ITheme, inset?: number, position?: 'relative' | 'absolute', highContrastStyle?: IRawStyle | undefined, borderColor?: string, outlineColor?: string, isFocusedOnly?: boolean): IRawStyle;
export declare function focusClear(): IRawStyle;
export declare const hiddenContentStyle: IRawStyle;
declare function _continuousPulseAnimationDouble(beaconColorOne: string, beaconColorTwo: string, innerDimension: string, outerDimension: string, borderWidth: string): string;
declare function _continuousPulseAnimationSingle(beaconColorOne: string, beaconColorTwo: string, innerDimension: string, outerDimension: string, borderWidth: string): string;
declare function _createDefaultAnimation(animationName: string, delayLength?: string): IRawStyle;
export declare const PulsingBeaconAnimationStyles: {
	continuousPulseAnimationDouble: typeof _continuousPulseAnimationDouble;
	continuousPulseAnimationSingle: typeof _continuousPulseAnimationSingle;
	createDefaultAnimation: typeof _createDefaultAnimation;
};
export declare type GlobalClassNames<IStyles> = Record<keyof IStyles, string>;
export declare function getGlobalClassNames<T>(classNames: GlobalClassNames<T>, theme: ITheme, disableGlobalClassNames?: boolean): Partial<GlobalClassNames<T>>;
export declare class Async {
	private _timeoutIds;
	private _immediateIds;
	private _intervalIds;
	private _animationFrameIds;
	private _isDisposed;
	private _parent;
	private _onErrorHandler;
	private _noop;
	constructor(parent?: object, onError?: (e: any) => void);
	dispose(): void;
	setTimeout(callback: () => void, duration: number): number;
	clearTimeout(id: number): void;
	setImmediate(callback: () => void): number;
	clearImmediate(id: number): void;
	setInterval(callback: () => void, duration: number): number;
	clearInterval(id: number): void;
	throttle<T extends Function>(func: T, wait?: number, options?: {
		leading?: boolean;
		trailing?: boolean;
	}): T | (() => void);
	debounce<T extends Function>(func: T, wait?: number, options?: {
		leading?: boolean;
		maxWait?: number;
		trailing?: boolean;
	}): ICancelable<T> & (() => void);
	requestAnimationFrame(callback: () => void): number;
	cancelAnimationFrame(id: number): void;
	protected _logError(e: any): void;
}
export declare type ICancelable<T> = {
	flush: () => T;
	cancel: () => void;
	pending: () => boolean;
};
export declare class AutoScroll {
	private _events;
	private _scrollableParent;
	private _scrollRect;
	private _scrollVelocity;
	private _timeoutId;
	constructor(element: HTMLElement);
	dispose(): void;
	private _onMouseMove;
	private _onTouchMove;
	private _computeScrollVelocity;
	private _startScroll;
	private _incrementScroll;
	private _stopScroll;
}
export interface IEventRecord {
	target: any;
	eventName: string;
	parent: any;
	callback: (args?: any) => void;
	elementCallback?: (...args: any[]) => void;
	objectCallback?: (args?: any) => void;
	useCapture: boolean;
}
export interface IEventRecordsByName {
	[eventName: string]: IEventRecordList;
}
export interface IEventRecordList {
	[id: string]: IEventRecord[] | number;
	count: number;
}
export interface IDeclaredEventsByName {
	[eventName: string]: boolean;
}
export declare class EventGroup {
	private static _uniqueId;
	private _parent;
	private _eventRecords;
	private _id;
	private _isDisposed;
	static raise(target: any, eventName: string, eventArgs?: any, bubbleEvent?: boolean): boolean | undefined;
	static isObserved(target: any, eventName: string): boolean;
	static isDeclared(target: any, eventName: string): boolean;
	static stopPropagation(event: any): void;
	private static _isElement;
	constructor(parent: any);
	dispose(): void;
	onAll(target: any, events: {
		[key: string]: (args?: any) => void;
	}, useCapture?: boolean): void;
	on(target: any, eventName: string, callback: (args?: any) => void, useCapture?: boolean): void;
	off(target?: any, eventName?: string, callback?: (args?: any) => void, useCapture?: boolean): void;
	raise(eventName: string, eventArgs?: any, bubbleEvent?: boolean): boolean | undefined;
	declare(event: string | string[]): void;
}
export interface IDisposable {
	dispose: () => void;
}
export declare type ISettingsMap<T> = {
	[P in keyof T]?: string;
};
export declare function warnDeprecations<P>(componentName: string, props: P, deprecationMap: ISettingsMap<P>): void;
export declare function warnMutuallyExclusive<P>(componentName: string, props: P, exclusiveMap: ISettingsMap<P>): void;
export declare function warnConditionallyRequiredProps<P>(componentName: string, props: P, requiredProps: string[], conditionalPropName: string, condition: boolean): void;
export declare function warn(message: string): void;
export declare function setWarningCallback(warningCallback?: (message: string) => void): void;
export declare type IRefObject<T> = React.RefObject<T> | RefObject<T> | ((ref: T | null) => void);
export declare type RefObject<T> = {
	(component: T | null): void;
	current: T | null;
	value: T | null;
};
export declare function createRef<T>(): RefObject<T>;
export interface IBaseProps<T = any> {
	componentRef?: IRefObject<T>;
}
export declare class BaseComponent<TProps extends IBaseProps = {}, TState = {}> extends React.Component<TProps, TState> {
	static onError: ((errorMessage?: string, ex?: any) => void);
	protected _skipComponentRefResolution: boolean;
	private __async;
	private __events;
	private __disposables;
	private __resolves;
	private __className;
	constructor(props: TProps, context?: any);
	componentDidUpdate(prevProps: TProps, prevState: TState): void;
	componentDidMount(): void;
	componentWillUnmount(): void;
	readonly className: string;
	protected readonly _disposables: IDisposable[];
	protected readonly _async: Async;
	protected readonly _events: EventGroup;
	protected _resolveRef(refName: string): (ref: React.ReactNode) => React.ReactNode;
	protected _updateComponentRef(currentProps: IBaseProps, newProps?: IBaseProps): void;
	protected _warnDeprecations(deprecationMap: ISettingsMap<TProps>): void;
	protected _warnMutuallyExclusive(mutuallyExclusiveMap: ISettingsMap<TProps>): void;
	protected _warnConditionallyRequiredProps(requiredProps: string[], conditionalPropName: string, condition: boolean): void;
	private _setComponentRef;
}
export declare function nullRender(): JSX.Element | null;
export declare function provideContext<TContext, TProps>(contextTypes: PropTypes.ValidationMap<TContext>, mapPropsToContext: (props: TProps) => TContext): React.ComponentType<TProps>;
export declare type Settings = {
	[key: string]: any;
};
export declare type SettingsFunction = (settings: Settings) => Settings;
export interface ICustomizations {
	settings: Settings;
	scopedSettings: {
		[key: string]: Settings;
	};
	inCustomizerContext?: boolean;
}
export declare class Customizations {
	static reset(): void;
	static applySettings(settings: Settings): void;
	static applyScopedSettings(scopeName: string, settings: Settings): void;
	static getSettings(properties: string[], scopeName?: string, localSettings?: ICustomizations): any;
	static observe(onChange: () => void): void;
	static unobserve(onChange: () => void): void;
	private static _raiseChange;
}
export interface ICustomizerContext {
	customizations: ICustomizations;
}
export declare const CustomizerContext: React.Context<ICustomizerContext>;
export declare type ICustomizerProps = IBaseProps & Partial<{
	settings: Settings | SettingsFunction;
	scopedSettings: Settings | SettingsFunction;
}> & {
	contextTransform?: (context: Readonly<ICustomizerContext>) => ICustomizerContext;
};
export declare class Customizer extends BaseComponent<ICustomizerProps> {
	private _changeCount;
	componentDidMount(): void;
	componentWillUnmount(): void;
	render(): React.ReactElement<{}>;
	private _onCustomizationChange;
}
export declare function mergeCustomizations(props: ICustomizerProps, parentContext: ICustomizerContext): ICustomizerContext;
export declare function mergeSettings(oldSettings?: Settings, newSettings?: Settings | SettingsFunction): Settings;
export interface IDelayedRenderProps extends React.Props<{}> {
	delay?: number;
}
export interface IDelayedRenderState {
	isRendered: boolean;
}
export declare class DelayedRender extends React.Component<IDelayedRenderProps, IDelayedRenderState> {
	static defaultProps: {
		delay: number;
	};
	private _timeoutId;
	constructor(props: IDelayedRenderProps);
	componentDidMount(): void;
	componentWillUnmount(): void;
	render(): React.ReactElement<{}> | null;
}
export interface IPerfData {
	duration: number;
	timeStamp: number;
}
export interface IPerfMeasurement {
	totalDuration: number;
	count: number;
	all: IPerfData[];
}
export interface IPerfSummary {
	[key: string]: IPerfMeasurement;
}
export declare class FabricPerformance {
	static summary: IPerfSummary;
	private static _timeoutId;
	static measure(name: string, func: () => void): void;
	static reset(): void;
	static setPeriodicReset(): void;
}
export interface IChangeDescription {
	key: string;
	oldValue: any;
	value: any;
}
export interface IChangeEventCallback {
	__id__?: string;
	(changeDescription?: IChangeDescription): void;
}
export declare class GlobalSettings {
	static getValue<T>(key: string, defaultValue?: T | (() => T)): T;
	static setValue<T>(key: string, value: T): T;
	static addChangeListener(cb: IChangeEventCallback): void;
	static removeChangeListener(cb: IChangeEventCallback): void;
}
export declare type IClassNames<T> = {
	[key in keyof T]: string;
};
export declare type IComponentAsProps<T> = T & {
	defaultRender?: React.ComponentType<T>;
};
export declare type IComponentAs<T> = React.ComponentType<IComponentAsProps<T>>;
export interface IPoint {
	x: number;
	y: number;
}
export interface IRectangle {
	left: number;
	top: number;
	width: number;
	height: number;
	right?: number;
	bottom?: number;
}
export interface IRenderComponent<TProps> {
	children: (props: TProps) => JSX.Element;
}
export interface IRenderFunction<P> {
	(props?: P, defaultRender?: (props?: P) => JSX.Element | null): JSX.Element | null;
}
export interface ISize {
	width: number;
	height: number;
}
export declare const KeyCodes: {
	backspace: 8;
	tab: 9;
	enter: 13;
	shift: 16;
	ctrl: 17;
	alt: 18;
	pauseBreak: 19;
	capslock: 20;
	escape: 27;
	space: 32;
	pageUp: 33;
	pageDown: 34;
	end: 35;
	home: 36;
	left: 37;
	up: 38;
	right: 39;
	down: 40;
	insert: 45;
	del: 46;
	zero: 48;
	one: 49;
	two: 50;
	three: 51;
	four: 52;
	five: 53;
	six: 54;
	seven: 55;
	eight: 56;
	nine: 57;
	a: 65;
	b: 66;
	c: 67;
	d: 68;
	e: 69;
	f: 70;
	g: 71;
	h: 72;
	i: 73;
	j: 74;
	k: 75;
	l: 76;
	m: 77;
	n: 78;
	o: 79;
	p: 80;
	q: 81;
	r: 82;
	s: 83;
	t: 84;
	u: 85;
	v: 86;
	w: 87;
	x: 88;
	y: 89;
	z: 90;
	leftWindow: 91;
	rightWindow: 92;
	select: 93;
	zero_numpad: 96;
	one_numpad: 97;
	two_numpad: 98;
	three_numpad: 99;
	four_numpad: 100;
	five_numpad: 101;
	six_numpad: 102;
	seven_numpad: 103;
	eight_numpad: 104;
	nine_numpad: 105;
	multiply: 106;
	add: 107;
	subtract: 109;
	decimalPoint: 110;
	divide: 111;
	f1: 112;
	f2: 113;
	f3: 114;
	f4: 115;
	f5: 116;
	f6: 117;
	f7: 118;
	f8: 119;
	f9: 120;
	f10: 121;
	f11: 122;
	f12: 123;
	numlock: 144;
	scrollLock: 145;
	semicolon: 186;
	equalSign: 187;
	comma: 188;
	dash: 189;
	period: 190;
	forwardSlash: 191;
	graveAccent: 192;
	openBracket: 219;
	backSlash: 220;
	closeBracket: 221;
	singleQuote: 222;
};
export declare type KeyCodes = number;
export declare class Rectangle {
	top: number;
	bottom: number;
	left: number;
	right: number;
	constructor(left?: number, right?: number, top?: number, bottom?: number);
	readonly width: number;
	readonly height: number;
	equals(rect: Rectangle): boolean;
}
export declare function mergeAriaAttributeValues(...ariaAttributes: (string | undefined)[]): string | undefined;
export declare function findIndex<T>(array: T[], cb: (item: T, index: number) => boolean): number;
export declare function find<T>(array: T[], cb: (item: T, index: number) => boolean): T | undefined;
export declare function createArray<T>(size: number, getItem: (index: number) => T): T[];
export declare function toMatrix<T>(items: T[], columnCount: number): T[][];
export declare function removeIndex<T>(array: T[], index: number): T[];
export declare function replaceElement<T>(array: T[], newElement: T, index: number): T[];
export declare function addElementAtIndex<T>(array: T[], index: number, itemToAdd: T): T[];
export declare function flatten<T>(array: (T | T[])[]): T[];
export declare function arraysEqual<T>(array1: T[], array2: T[]): boolean;
export interface IAsAsyncOptions<TProps> {
	load: () => Promise<React.ReactType<TProps>>;
	onLoad?: () => void;
	onError?: (error: Error) => void;
}
export declare function asAsync<TProps>(options: IAsAsyncOptions<TProps>): React.ComponentType<TProps & {
	asyncPlaceholder?: React.ReactType;
}>;
export declare function assertNever(x: never): never;
export declare function autobind<T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): {
	configurable: boolean;
	get(): T;
	set(newValue: any): void;
} | void;
export declare function classNamesFunction<TStyleProps extends {}, TStyleSet extends IStyleSet<TStyleSet>>(): (getStyles: IStyleFunctionOrObject<TStyleProps, TStyleSet> | undefined, styleProps?: TStyleProps) => IProcessedStyleSet<TStyleSet>;
export interface IDictionary {
	[className: string]: boolean;
}
export interface ISerializableObject {
	toString?: () => string;
}
export declare type ICssInput = string | ISerializableObject | IDictionary | null | undefined | boolean;
export declare function css(...args: ICssInput[]): string;
export declare function customizable(scope: string, fields: string[], concatStyles?: boolean): <P>(ComposedComponent: React.ComponentType<P>) => any;
export declare const DATA_PORTAL_ATTRIBUTE = "data-portal-element";
export declare function setVirtualParent(child: HTMLElement, parent: HTMLElement): void;
export declare function getVirtualParent(child: HTMLElement): HTMLElement | undefined;
export declare function getParent(child: HTMLElement, allowVirtualParents?: boolean): HTMLElement | null;
export declare function getChildren(parent: HTMLElement, allowVirtualChildren?: boolean): HTMLElement[];
export declare function elementContains(parent: HTMLElement | null, child: HTMLElement | null, allowVirtualParents?: boolean): boolean;
export declare function setSSR(isEnabled: boolean): void;
export declare function getWindow(rootElement?: Element | null): Window | undefined;
export declare function getDocument(rootElement?: HTMLElement | null): Document | undefined;
export declare function getRect(element: HTMLElement | Window | null): IRectangle | undefined;
export declare function setPortalAttribute(element: HTMLElement): void;
export declare function portalContainsElement(target: HTMLElement, parent?: HTMLElement): boolean;
export declare function findElementRecursive(element: HTMLElement | null, matchFunction: (element: HTMLElement) => boolean): HTMLElement | null;
export declare function elementContainsAttribute(element: HTMLElement, attribute: string): string | null;
export declare function getFirstFocusable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean): HTMLElement | null;
export declare function getLastFocusable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean): HTMLElement | null;
export declare function getFirstTabbable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean): HTMLElement | null;
export declare function getLastTabbable(rootElement: HTMLElement, currentElement: HTMLElement, includeElementsInFocusZones?: boolean): HTMLElement | null;
export declare function focusFirstChild(rootElement: HTMLElement): boolean;
export declare function getPreviousElement(rootElement: HTMLElement, currentElement: HTMLElement | null, checkNode?: boolean, suppressParentTraversal?: boolean, traverseChildren?: boolean, includeElementsInFocusZones?: boolean, allowFocusRoot?: boolean, tabbable?: boolean): HTMLElement | null;
export declare function getNextElement(rootElement: HTMLElement, currentElement: HTMLElement | null, checkNode?: boolean, suppressParentTraversal?: boolean, suppressChildTraversal?: boolean, includeElementsInFocusZones?: boolean, allowFocusRoot?: boolean, tabbable?: boolean): HTMLElement | null;
export declare function isElementVisible(element: HTMLElement | undefined | null): boolean;
export declare function isElementTabbable(element: HTMLElement, checkTabIndex?: boolean): boolean;
export declare function isElementFocusZone(element?: HTMLElement): boolean;
export declare function isElementFocusSubZone(element?: HTMLElement): boolean;
export declare function doesElementContainFocus(element: HTMLElement): boolean;
export declare function shouldWrapFocus(element: HTMLElement, noWrapDataAttribute: 'data-no-vertical-wrap' | 'data-no-horizontal-wrap'): boolean;
export declare function focusAsync(element: HTMLElement | {
	focus: () => void;
} | undefined | null): void;
export declare function hoistMethods(destination: any, source: any, exclusions?: string[]): string[];
export declare function unhoistMethods(source: any, methodNames: string[]): void;
export declare function hoistStatics<TSource, TDest>(source: TSource, dest: TDest): TDest;
export declare const IsFocusVisibleClassName = "ms-Fabric--isFocusVisible";
export declare function initializeFocusRects(window?: Window): void;
export declare function getInitials(displayName: string | undefined | null, isRtl: boolean, allowPhoneInitials?: boolean): string;
export declare function isDirectionalKeyCode(which: number): boolean;
export declare function addDirectionalKeyCode(which: number): void;
export declare function getLanguage(): string | null;
export declare function setLanguage(language: string, avoidPersisting?: boolean): void;
export declare function getDistanceBetweenPoints(point1: IPoint, point2: IPoint): number;
export declare type FitMode = 'contain' | 'cover';
export interface IFitContentToBoundsOptions {
	contentSize: ISize;
	boundsSize: ISize;
	mode: FitMode;
	maxScale?: number;
}
export declare function fitContentToBounds(options: IFitContentToBoundsOptions): ISize;
export declare function calculatePrecision(value: number | string): number;
export declare function precisionRound(value: number, precision: number, base?: number): number;
export declare function setMemoizeWeakMap(weakMap: any): void;
export declare function resetMemoizations(): void;
export declare function memoize<T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): {
	configurable: boolean;
	get(): T;
};
export declare function memoizeFunction<T extends (...args: any[]) => RET_TYPE, RET_TYPE>(cb: T, maxCacheSize?: number): T;
export declare function merge<T = {}>(target: Partial<T>, ...args: (Partial<T> | null | undefined | false)[]): T;
export declare const isIOS: () => boolean;
export declare function shallowCompare<TA, TB>(a: TA, b: TB): boolean;
export declare function assign(target: any, ...args: any[]): any;
export declare function filteredAssign(isAllowed: (propName: string) => boolean, target: any, ...args: any[]): any;
export declare function getId(prefix?: string): string;
export declare function resetIds(counter?: number): void;
export declare function mapEnumByName<T>(theEnum: any, callback: (name?: string, value?: string | number) => T | undefined): (T | undefined)[] | undefined;
export declare function values<T>(obj: any): T[];
export declare function isMac(reset?: boolean): boolean;
export declare function hasHorizontalOverflow(element: HTMLElement): boolean;
export declare function hasVerticalOverflow(element: HTMLElement): boolean;
export declare function hasOverflow(element: HTMLElement): boolean;
export declare const baseElementEvents: string[];
export declare const baseElementProperties: string[];
export declare const htmlElementProperties: string[];
export declare const anchorProperties: string[];
export declare const buttonProperties: string[];
export declare const divProperties: string[];
export declare const inputProperties: string[];
export declare const textAreaProperties: string[];
export declare const imageProperties: string[];
export declare function getNativeProps<T>(props: {}, allowedPropNames: string[], excludedPropNames?: string[]): T;
export declare function getResourceUrl(url: string): string;
export declare function setBaseUrl(baseUrl: string): void;
export declare function getRTL(): boolean;
export declare function setRTL(isRTL: boolean, persistSetting?: boolean): void;
export declare function getRTLSafeKeyCode(key: number): number;
export declare const DATA_IS_SCROLLABLE_ATTRIBUTE = "data-is-scrollable";
export declare const allowScrollOnElement: (element: HTMLElement, events: EventGroup) => void;
export declare function disableBodyScroll(): void;
export declare function enableBodyScroll(): void;
export declare function getScrollbarWidth(): number;
export declare function findScrollableParent(startingElement: HTMLElement | null): HTMLElement | null;
export interface IPropsWithStyles<TStyleProps, TStyleSet extends IStyleSet<TStyleSet>> {
	styles?: IStyleFunctionOrObject<TStyleProps, TStyleSet>;
}
export interface ICustomizableProps {
	scope: string;
	fields?: string[];
}
export declare function styled<TComponentProps extends IPropsWithStyles<TStyleProps, TStyleSet>, TStyleProps, TStyleSet extends IStyleSet<TStyleSet>>(Component: React.ComponentClass<TComponentProps> | React.StatelessComponent<TComponentProps>, baseStyles: IStyleFunctionOrObject<TStyleProps, TStyleSet>, getProps?: (props: TComponentProps) => Partial<TComponentProps>, customizable?: ICustomizableProps): (props: TComponentProps) => JSX.Element;
export declare function getThemedContext(context: ICustomizerContext, scheme?: ISchemeNames, theme?: ITheme): ICustomizerContext;
export declare const ThemeSettingName = "theme";
export declare function getTheme(depComments?: boolean): ITheme;
export declare function registerOnThemeChangeCallback(callback: (theme: ITheme) => void): void;
export declare function removeOnThemeChangeCallback(callback: (theme: ITheme) => void): void;
export declare function loadTheme(theme: IPartialTheme, depComments?: boolean): ITheme;
export declare function createTheme(theme: IPartialTheme, depComments?: boolean): ITheme;
export declare const HighContrastSelector = "@media screen and (-ms-high-contrast: active)";
export declare const HighContrastSelectorWhite = "@media screen and (-ms-high-contrast: black-on-white)";
export declare const HighContrastSelectorBlack = "@media screen and (-ms-high-contrast: white-on-black)";
export declare const ScreenWidthMinSmall = 320;
export declare const ScreenWidthMinMedium = 480;
export declare const ScreenWidthMinLarge = 640;
export declare const ScreenWidthMinXLarge = 1024;
export declare const ScreenWidthMinXXLarge = 1366;
export declare const ScreenWidthMinXXXLarge = 1920;
export declare const ScreenWidthMaxSmall: number;
export declare const ScreenWidthMaxMedium: number;
export declare const ScreenWidthMaxLarge: number;
export declare const ScreenWidthMaxXLarge: number;
export declare const ScreenWidthMaxXXLarge: number;
export declare const ScreenWidthMinUhfMobile = 768;
export declare function getScreenSelector(min: number, max: number): string;
export declare const normalize: IRawStyle;
export declare const noWrap: IRawStyle;
export declare function getFadedOverflowStyle(theme: ITheme, color?: keyof ISemanticColors | keyof IPalette, direction?: 'horizontal' | 'vertical', width?: string | number, height?: string | number): IRawStyle;
export declare namespace ZIndexes {
	const Nav: number;
	const ScrollablePane: number;
	const FocusStyle: number;
	const Coachmark: number;
	const Layer: number;
	const KeytipLayer: number;
}
export declare function buildClassMap<T>(styles: T): {
	[key in keyof T]?: string;
};
export interface IIconSubset {
	fontFace?: IFontFace;
	icons: {
		[key: string]: string | JSX.Element;
	};
	style?: IRawStyle;
}
export interface IIconSubsetRecord extends IIconSubset {
	isRegistered?: boolean;
	className?: string;
}
export interface IIconRecord {
	code: string | undefined;
	subset: IIconSubsetRecord;
}
export interface IIconOptions {
	disableWarnings: boolean;
	warnOnMissingIcons?: boolean;
}
export declare function registerIcons(iconSubset: IIconSubset, options?: Partial<IIconOptions>): void;
export declare function unregisterIcons(iconNames: string[]): void;
export declare function registerIconAlias(iconName: string, mappedToName: string): void;
export declare function getIcon(name?: string): IIconRecord | undefined;
export declare function setIconOptions(options: Partial<IIconOptions>): void;
export declare function getIconClassName(name: string): string;
export interface IStyleableComponentProps<TViewProps, TStyleSet extends IStyleSet<TStyleSet>> {
	styles?: IStyleFunctionOrObject<TViewProps, TStyleSet>;
	theme?: ITheme;
}
export interface IStyledProps<TTheme> {
	theme: TTheme;
}
export declare type IStateComponentProps<TComponentProps, TViewProps> = TComponentProps & {
	renderView: React.StatelessComponent<TViewProps>;
};
export declare type IStateComponentType<TComponentProps, TViewProps> = React.ComponentType<IStateComponentProps<TComponentProps, TViewProps>>;
export declare type IViewComponentProps<TViewProps, TProcessedStyleSet> = TViewProps & {
	classNames: TProcessedStyleSet;
};
export declare type IViewComponent<TViewProps, TProcessedStyleSet> = React.StatelessComponent<IViewComponentProps<TViewProps, TProcessedStyleSet>>;
export interface IComponentOptions<TComponentProps, TViewProps, TStyleSet extends IStyleSet<TStyleSet>, TStatics = {}> {
	displayName: string;
	fields?: string[];
	styles?: IStyleFunctionOrObject<TViewProps & IStyledProps<ITheme>, TStyleSet>;
	view: IViewComponent<TViewProps, IProcessedStyleSet<TStyleSet>>;
	state?: IStateComponentType<TComponentProps, TViewProps>;
	statics?: TStatics;
}
export declare type IComponent<TComponentProps, TViewProps, TStyleSet extends IStyleSet<TStyleSet>, TStatics = {}> = IComponentOptions<TComponentProps, TViewProps, TStyleSet, TStatics> & Required<Pick<IComponentOptions<TComponentProps, TComponentProps, TStyleSet, TStatics>, 'state'>>;
export declare type IStatelessComponent<TComponentProps, TStyleSet extends IStyleSet<TStyleSet>, TStatics = {}> = IComponentOptions<TComponentProps, TComponentProps, TStyleSet, TStatics>;
export declare function createComponent<TComponentProps, TViewProps, TStyleSet extends IStyleSet<TStyleSet>, TStatics = {}>(component: IComponent<TComponentProps, TViewProps, TStyleSet, TStatics>): React.StatelessComponent<TComponentProps> & TStatics;
export declare function createStatelessComponent<TComponentProps, TStyleSet extends IStyleSet<TStyleSet>, TStatics = {}>(component: IStatelessComponent<TComponentProps, TStyleSet, TStatics>): React.StatelessComponent<TComponentProps> & TStatics;
export interface IThemeProviderProps {
	scheme?: ISchemeNames;
	theme?: ITheme;
}
export declare const ThemeProvider: React.StatelessComponent<IThemeProviderProps>;
export declare function setVersion(packageName: string, packageVersion: string): void;
export declare function addVariants(theme: ITheme): void;
export declare const VariantThemeType: {
	None: 0;
	Neutral: 1;
	Soft: 2;
	Strong: 3;
};
export declare type VariantThemeType = typeof VariantThemeType[keyof typeof VariantThemeType];
export declare function getVariant(theme: IPartialTheme, variant: VariantThemeType): ITheme;
export declare function getNeutralVariant(theme: IPartialTheme): ITheme;
export declare function getSoftVariant(theme: IPartialTheme): ITheme;
export declare function getStrongVariant(theme: IPartialTheme): ITheme;