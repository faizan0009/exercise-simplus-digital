import * as React from "react"
import axios from "axios"
import { withRouter, Redirect } from 'react-router-dom';


const css = `body { padding: 2em; }


/* Shared */
.loginBtn {
  box-sizing: border-box;
  position: relative;
  /* width: 13em;  - apply for fixed size */
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #FFF;
}
.loginBtn:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 100%;
}
.loginBtn:focus {
  outline: none;
}
.loginBtn:active {
  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);
}


/* Google */
.loginBtn--google {
  /*font-family: "Roboto", Roboto, arial, sans-serif;*/
  background: #DD4B39;
}
.loginBtn--google:before {
  border-right: #BB3F30 1px solid;
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;
}
.loginBtn--google:hover,
.loginBtn--google:focus {
  background: #E74B37;
}`

export class Login extends React.Component<any, any>{


    getUrlParameter(name):any {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    code = (c) => {
		axios({
			method: 'post',
			url: 'http://localhost:3002/api/v1/microservice/code',
			data: {
				code:c
			},
		  }).then((response) => {
        sessionStorage.setItem("googleData", JSON.stringify(response.data.response));
        window.location.replace('/');
		  })
			.catch((error) => {
			  console.log(error);
			});
		
		};

    componentDidMount = () => {
        let params = this.getUrlParameter('code');
        this.code(params);
    }
    render(){	

		return (
			        <div style={{textAlign:"center"}}>
                <a href={this.props.link}>
                  <button className="loginBtn loginBtn--google">
                    Login with Google
                  </button>
                </a>
                <style>
                  {css}
                </style>
              </div>
                )
	}

}

export default withRouter(Login);