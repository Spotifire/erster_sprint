import axios from 'axios';


export default class Auth {
  accessToken;
  refreshToken
  expiresIn


  getExpiration(){
    return this.expiresIn;
  }

  getAuth(sentCode) {
    let codeChanged = sentCode != localStorage.getItem("code");

    localStorage.setItem("code", sentCode);

    if (codeChanged) {
      axios.post('http://localhost:4201/login', {
        code: sentCode,
      }).then(res => {
        this.accessToken = res.data.accessToken;
        this.refreshToken = res.data.refreshToken;
        this.expiresIn = res.data.expiresIn;

        localStorage.setItem("accessToken", this.accessToken)
        localStorage.setItem("refreshToken", this.refreshToken)

        //window.history.pushState({}, null, '/')
        console.log(res.data)

      }).catch((err: any) => {
        // @ts-ignore
        window.location = '/';
      })
    }
  }

  refresh(){
    let refreshToken = localStorage.getItem("refreshToken");

    axios
      .post("http://localhost:4201/refresh", {
        refreshToken,
      })
      .then(res => {
        this.accessToken = res.data.accessToken
        this.expiresIn = res.data.expiresIn

        console.log(res)

        localStorage.setItem("accessToken", this.accessToken)
      })
      .catch(() => {
        // @ts-ignore
        //window.location = "/"
      })
  }
}
