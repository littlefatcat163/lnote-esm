import fs from 'fs'
import path from 'path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export default function esm() {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const __cacheDirname = '.cache'
    const DEFAULT_FN = 'lnote'
    const defaultCachePath = path.join(__dirname, __cacheDirname, DEFAULT_FN)
    return {
        __dirname,
        __cacheDirname,
        defaultCachePath,
    }
}

const { defaultCachePath } = esm()

export function getCache() {
    return fs.readFileSync(defaultCachePath, 'utf-8')
}

export function setCache(value) {
    fs.writeFileSync(defaultCachePath, value)
}
