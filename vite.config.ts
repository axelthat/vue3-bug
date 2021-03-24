import { defineConfig, Plugin } from "vite"
import vue from "@vitejs/plugin-vue"

function vitePlugin() {
    return {
        name: "vite-plugin",
        transform(code, id) {
            if (code.includes("App.scoped.css")) {
                code = code.replace(
                    "App.scoped.css",
                    "App.scoped.css?scopeId=12345"
                )
            }

            return {
                code
            }
        }
    } as Plugin
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vitePlugin()]
})
