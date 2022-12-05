import { sveltekit } from '@sveltejs/kit/vite';

const config = {
        
	plugins: [sveltekit()],
    server: {
    
        clientPort:4173,
        strickPort:true,
        protocol: "ws",
        port: 4000,
        hmr: {
            port: 9001
            
        }
    }
    
};

export default config;
