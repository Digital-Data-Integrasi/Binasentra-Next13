/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        apiLogin:'http://192.168.18.191:8081',
        NEXTAUTH_SECRET: 'gusti',
        API_CLAIM: 'http://localhost:3001'
    }
}

module.exports = nextConfig
