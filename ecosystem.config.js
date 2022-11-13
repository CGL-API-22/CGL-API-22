module.exports = {
  apps : [{
    script: 'src/index.ts',
    instances: "max",
    env: {
      NODE_ENV: 'development'
    }
    ,
    env_production: {
      NODE_ENV: "production",
    }
  }],
};
