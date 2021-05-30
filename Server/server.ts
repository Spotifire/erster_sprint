const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req: any, res: any) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:4200',
    clientId: '454d352b3fd84985bea141355d73c17b',
    clientSecret: '23866bfe7ef8402691cac92307233686'
  })

  spotifyApi.authorizationCodeGrant(code).then((data: any) => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in
    })
  }).catch((err: any) => {
    console.log(err)
    res.sendStatus(400)
  })
})

app.post('/refresh', (req : any, res : any) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:4200',
    clientId: '454d352b3fd84985bea141355d73c17b',
    clientSecret: '23866bfe7ef8402691cac92307233686',
    refreshToken
  })

  spotifyApi.refreshAccessToken().then(
      (data : any) => {
        res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn
        })

        spotifyApi.setAccessToken(data.body['access_token']);
      }).catch((err : any) => {
    console.log(err);
    res.sendStatus(400)
  })
})

app.listen(4201)

