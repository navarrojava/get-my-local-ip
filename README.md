# get-my-local-ip [![Build Status](https://travis-ci.org/navarrojava/get-my-local-ip.svg)](https://travis-ci.org/navarrojava/get-my-local-ip)
This module gives you your local ip, to be used primarily with hybrid development, 
where your localhost should be replaced by your local ip, this module helps you to automate this process.



##example use:

* With Webpack:
 
 
 `let localIp = require('get-my-local-ip');`
 
``` ...
 
   module: {
         preLoaders: [
             {
                 test: /\.jsx?$/,
                 loader: 'string-replace',
                 query: {
                     multiple: [
                         {search: 'localhost', replace: localIp.address},
                         {search: '0.0.0.0', replace: localIp.address}
                     ]
                 }
             }
         ],
         loaders: ....
     }
```