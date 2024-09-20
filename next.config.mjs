/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nolatech.ai"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },

  eslint: {
    ignoreDuringBuilds: true // Añade esta línea para ignorar los errores de ESLint en el build
  }
}

export default nextConfig
