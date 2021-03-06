[![Build Status](https://travis-ci.org/navarrojava/get-my-local-ip.svg)](https://travis-ci.org/navarrojava/get-my-local-ip)[![codecov.io](https://codecov.io/github/navarrojava/get-my-local-ip/coverage.svg?branch=master)](https://codecov.io/github/navarrojava/get-my-local-ip?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/navarrojava/get-my-local-ip/badge.svg?branch=master)](https://coveralls.io/github/navarrojava/get-my-local-ip?branch=master)
# get-my-local-ip 
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
