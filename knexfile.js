

module.exports = {

  development: {
    client: 'pg',
    connection: {
      //  host:''',
       port: 5432,
       user: 'me',
       password:'me',
       database:'receipesapi',
      charset:'utf8'
    },
    migrations:{
      directory: './database/migrations',
    },
    seeds:{
      directory: './database/seeds'
    }
  },

}
