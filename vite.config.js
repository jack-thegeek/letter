import {defineConfig} from "vite";
import {VitePWA as pwa} from "vite-plugin-pwa";
import manifest from "./manifest.json";
import vue from "@vitejs/plugin-vue";
import path from "path";
import components from 'unplugin-vue-components/vite'
import {VarletUIResolver, NaiveUiResolver} from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        pwa({
            strategies: "injectManifest",
            srcDir: "",
            filename: "service-worker.js",
            manifest,
        }),
        components({
            resolvers: [VarletUIResolver(), NaiveUiResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        //css预处理
        preprocessorOptions: {
            scss: {
                /*
                引入var.scss全局预定义变量
                '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
                 */
                additionalData: '@import "@/assets/scss/main.scss";'
            }
        }
    },
    base: './',
    build: {
        outDir: './docs'
    }
});
