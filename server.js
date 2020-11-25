const express = require('express')
var nconf = require('nconf').argv().env()
const app = express()

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging') {
  nconf.file('env/development.json');
  nconf.defaults({
    'NODE_ENV': 'development'
  })
}

const port = nconf.get('PORT') || 80



app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.get('/healthCheck', function (req, res) {
	return res.json({message: 'all good...'})
})
