// src/index.ts
import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
function esm() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const __cacheDirname = ".cache";
  const DEFAULT_FN = "lnote";
  const defaultCachePath2 = path.join(__dirname, "../", __cacheDirname, DEFAULT_FN);
  const templatePath = path.join(__dirname, "../", "template");
  return {
    __dirname,
    __cacheDirname,
    defaultCachePath: defaultCachePath2,
    templatePath
  };
}
var { defaultCachePath } = esm();
function getCache() {
  return fs.readFileSync(defaultCachePath, "utf-8");
}
function setCache(value) {
  fs.writeFileSync(defaultCachePath, value);
}
export {
  esm as default,
  getCache,
  setCache
};
