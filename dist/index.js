"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => esm,
  getCache: () => getCache,
  setCache: () => setCache
});
module.exports = __toCommonJS(src_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
// var import_node_path = require("path");
// var import_node_url = require("url");
// var import_meta = {};
function esm() {
  // const __filename = (0, import_node_url.fileURLToPath)(import_meta.url);
  // const __dirname = (0, import_node_path.dirname)(__filename);
  const __cacheDirname = ".cache";
  const DEFAULT_FN = "lnote";
  const defaultCachePath2 = import_path.default.join(__dirname, "../", __cacheDirname, DEFAULT_FN);
  return {
    __dirname,
    __cacheDirname,
    defaultCachePath: defaultCachePath2
  };
}
var { defaultCachePath } = esm();
function getCache() {
  return import_fs.default.readFileSync(defaultCachePath, "utf-8");
}
function setCache(value) {
  import_fs.default.writeFileSync(defaultCachePath, value);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCache,
  setCache
});
