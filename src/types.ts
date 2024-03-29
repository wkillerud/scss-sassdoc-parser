export type ContextType =
	| "unknown"
	| "function"
	| "mixin"
	| "placeholder"
	| "variable"
	| "css";

export interface Context {
	type: ContextType;
	name: string;
	code: string;
	value?: string;
	scope?: "private" | "global";
	line: Range;
}

export type Example = {
	type?: string;
	description?: string;
	code: string;
};

export type File = {
	path: string;
	name: string;
};

export type Link = {
	url: string;
	caption?: string;
};

export type Parameter = {
	name: string;
	type?: string;
	default?: string;
	description?: string;
};

export type Property = {
	path: string;
	type?: string;
	name?: string;
	default?: string;
	description?: string;
};

export type Require = {
	name: string;
	type: string;
	autofill?: boolean;
	description?: string;
	external?: boolean;
	url?: string;
	item?: ParseResult;
	context?: Context;
};

export type Range = {
	start: number;
	end: number;
};

export type Return = {
	type: string;
	description?: string;
};

export type See = {
	name: string;
	type?: string;
	description?: string;
	context?: Context;
};

export type Since = {
	version?: string;
	description?: string;
};

export type UsedBy = {
	description: string;
	context: Context;
};

export interface ParseResult {
	access?: "public" | "private" | "auto";
	alias?: string | string[];
	aliased?: string[];
	author?: string[];
	commentRange: Range;
	content?: string;
	context: Context;
	deprecated?: string;
	description: string;
	example?: Example[];
	file?: File;
	group?: string[];
	ignore?: string[];
	link?: Link[];
	/**
	 * The value of the name annotation if set, or the name of the function/mixin/variable as declared in the code.
	 */
	name?: string;
	output?: string;
	parameter?: Parameter[];
	property?: Property[];
	require?: Require[];
	return?: Return;
	see?: ParseResult[];
	since?: Since[];
	throws?: string[];
	todo?: string[];
	type?: string[];
	usedBy?: ParseResult[];
}
