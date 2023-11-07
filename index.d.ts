/// <reference types="node" />

declare module 'lnote-esm' {
    type LnoteEsmPath = {
        __dirname: string
        __cacheDirname: string
        defaultCachePath: string
    }
    export default function esm(): LnoteEsmPath
    export function getCache(): string
    export function setCache(value: string): void
}

/* type LnoteEsmPath = {
    __dirname: string
    __cacheDirname: string
    defaultCachePath: string
}
export default function esm(): LnoteEsmPath
export function getCache(): string
export function setCache(value: string): void */