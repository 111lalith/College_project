import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  
  // CRITICAL ADDITION: This tells Vite to resolve react and react-dom 
  // ONLY to the top-level installation, eliminating duplicates.
  resolve: {
    alias: {
      'react': 'C:/Users/Lenovo/Documents/GitHub/project/vite-project/node_modules/react',
      'react-dom': 'C:/Users/Lenovo/Documents/GitHub/project/vite-project/node_modules/react-dom',
    },
  },
})