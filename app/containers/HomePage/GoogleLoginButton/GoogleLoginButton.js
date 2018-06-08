import React from 'react';
import GoogleLogin from 'react-google-login';

export default class GoogleLoginButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }
        return (
            <div className="text-center">
            <GoogleLogin
            clientId="309750495515-o0h9hp03r51fqk6g5l25vhd93v2h26vo.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            />
            </div>
        );
    }
}