import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ["@monaco-editor/react"],
    exclude: ["monaco-editor"]
  },
  build: {
    commonjsOptions: {
      ignoreDynamicRequires: true, // To avoid issues with dynamic imports.
    }
  }
});
