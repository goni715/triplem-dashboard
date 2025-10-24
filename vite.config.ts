import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// import path from "path";
 
 
export default defineConfig({
  plugins: [react()],
  // build: {
  //   outDir: 'dist',
  //   chunkSizeWarningLimit: 2500,
  // },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
  // server: {
  //   //host: '13.53.182.102',  
  //   host: '0.0.0.0',
  //   port: 5173   
  // },
  // preview: { 
  //   allowedHosts: ['dashboard.triplemcompany.com', '16.16.183.92', "www.dashboard.triplemcompany.com"],  
  // },
})