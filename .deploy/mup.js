module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: 'dbis-styleexplorer.uibk.ac.at',
      username: 'thibault',
      pem: 'C:/Users/thibault/.ssh/id_rsa'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'style_explorer',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'https://dbis-styleexporer.uibk.ac.at',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  },

  // (Optional)
  // Use the proxy to setup ssl or to route requests to the correct
  // app when there are several apps

  /*proxy: {
     domains: 'dbis-styleexporer.uibk.ac.at',

    ssl: {
       // Enable Let's Encrypt
       letsEncryptEmail: 'email@dbis-styleexporer.uibk.ac.at',
       //forceSSL: true
     }
  }*/
};
