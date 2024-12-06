import { defineConfig } from "vite";

export default defineConfig({
    server:{
        port: 3000
    },

    rollupOptions:{
        input :{
            index: 'index.html',
            blog: "sub-pages/blog.html",
            contact: "sub-pages/contact.html"
        }
    }
})