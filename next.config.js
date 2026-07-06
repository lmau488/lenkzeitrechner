/** @type {import('next').NextConfig} */

// Sicherheits-Header (bewusst AdSense-kompatibel: keine script-src/default-src-Beschraenkung,
// die Google-Anzeigen brechen wuerde). CSP nur mit sicheren, nicht-brechenden Direktiven.
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Content-Security-Policy', value: "base-uri 'self'; object-src 'none'; frame-ancestors 'self'; upgrade-insecure-requests" },
];

const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
    ];
  },
};

module.exports = nextConfig;
