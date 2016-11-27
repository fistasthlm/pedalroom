exports.config = {
   npm: {
      enabled: true
   },

   sourceMaps: true,
   overrides: {
      production: {
         sourceMaps: true
      }
   },

   plugins: {
      babel: {
         presets: ['es2015', 'react'],
         pattern: /\.(es6|jsx|js)$/
      },
      sass: {
         precision: 8
      }
   },

   files: {
      javascripts: {
         joinTo: 'javascripts/pedalroom.js'
      },
      stylesheets: {
         joinTo: 'stylesheets/pedalroom.css'
      }
   },

   server: {
      hostname: '0.0.0.0',
      port: 4444,
      run: true
   }
};
