// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///students'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
