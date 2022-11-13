module.exports = {
  apps : [{
    script: 'src/index.ts',
    watch: '.',
    env: {
      NODE_ENV: 'production'
  }
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/main',
      repo : 'GIT_REPOSITORY',
      path : '/',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
