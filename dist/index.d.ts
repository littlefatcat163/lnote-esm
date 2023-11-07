declare function esm(): {
    __dirname: string;
    __cacheDirname: string;
    defaultCachePath: string;
    templatePath: string;
};
declare function getCache(): string;
declare function setCache(value: string): void;

export { esm as default, getCache, setCache };
