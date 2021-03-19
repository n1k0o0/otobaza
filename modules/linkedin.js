const querystring = require('querystring')
const fetch = require('node-fetch')
module.exports = function linkedinSocialLoginCallback () {
  this.addServerMiddleware({
    path: '/linkedin-callback',
    async handler (req, res, next) {
      const query = querystring.parse(req.url.replace('/?', ''))

      const url = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${query.code}&redirect_uri=https://otobaza.com/login-callback?type=linkedin&client_id=787shaglwhhfuv&client_secret=xTf4VyHEpHOtS1bO`
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      const data = {}
      await fetch(url, { method: 'POST', headers: headers, body: data })
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(json))
          res.end()
        })
    }
  })
}
