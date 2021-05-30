import axios from 'axios';


export default class Auth {
  accessToken;
  refreshToken
  expiresIn




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

        //window.history.pushState({}, null, '/')
        console.log(res.data)

      }).catch((err: any) => {
        // @ts-ignore
        window.location = '/';
      })
    }
    /*if (this.refreshToken && this.expiresIn) {
      const interval = setInterval(() => {
        axios
          .post("http://localhost:3001/refresh", {
            refreshToken,
          })
          .then(res => {
            this.accessToken = res.data.accessToken
            this.expiresIn = res.data.expiresIn
          })
          .catch(() => {
            // @ts-ignore
            window.location = "/"
          })
      }, (this.expiresIn - 60) * 1000)

      return () => clearInterval(interval)
    }*/
  }
}
