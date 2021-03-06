export interface CommandOptions {
    prefix?: string;
    locale: string;
    dest: string;
    sources: Array<string>;
    patterns: Array<string>;
    keys: Array<string>;
    format?: string;
    verbose?: boolean;
    clean?: boolean;
    replace?: boolean;
}
