import axios from 'axios';


let code;

let accessToken;
let refreshToken
let expiresIn

function setAccessToken(newAccessToken){
  accessToken = newAccessToken;
}

export default function Auth(sentCode) {
  let codeChanged;
  let tokenChanged;

  let newRefreshToken;
  let newExpiresIn;

  codeChanged = sentCode == code;


  console.log(code)
  code = sentCode;

  if (codeChanged && sentCode) {
    //console.log(sentCode)
    axios.post('http://localhost:4201/login', {
      code: sentCode,
    }).then(res => {
      accessToken = res.data.accessToken;
      newRefreshToken = res.data.refreshToken;
      newExpiresIn = res.data.expiresIn;

      tokenChanged = refreshToken != newRefreshToken || expiresIn != newExpiresIn;

      if (tokenChanged){
        refreshToken = newRefreshToken;
        expiresIn = newExpiresIn;
      }

      //window.history.pushState({}, null, '/')
      console.log(res.data)

    }).catch((err: any) => {
      // @ts-ignore
      //window.location = '/';
    })

    if (tokenChanged){
      axios.post('http://localhost:4201/refresh', {
        refreshToken,
      }).then(res => {
        refreshToken = res.data.refreshToken;
        expiresIn = res.data.expiresIn;

        //window.history.pushState({}, null, '/')
        console.log(res.data)
      }).catch((err: any) => {
        // @ts-ignore
        window.location = '/';
      })
    }
  }
  return accessToken;
}
