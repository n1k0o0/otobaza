const autorestart = true
const watch = false
const maxMemoryRestart = '512M'

module.exports = {
  apps: [
    {
      name: 'otobaza_dev',
      script: '/usr/share/nginx/html/otobaza/node_modules/nuxt/bin/nuxt.js build && source /usr/share/nginx/html/otobaza/mac-prod.sh && /usr/share/nginx/html/otobaza/node_modules/nuxt/bin/nuxt.js start',
      instances: 'max',
      autorestart,
      watch,
      max_memory_restart: maxMemoryRestart,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
