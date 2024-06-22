import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    build: {
        chunkSizeWarningLimit: 1000, // 调整警告限制为 1000 kB
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': {//获取了路径中包含了api的请求
                target: 'http://47.120.31.153:8085',//后台服务所在的源
                changeOrigin: true,//修改源
                rewrite: (path) => path.replace(/^\/api/, '')//api替换为空字符串
            }
        }
    },
})


