import {useEffect} from 'react';
//ASSIGN CLIENT ID
const CLEINT_ID = "72ba859b3f58279e7a1b";

//Forward user to github login screen(passing in the client id)
//User is now in github and logs in
//When user decides to login ... they get forwarded back to localhost:3000
//But localhost:3000
//Use code to get acces token

useEffect(() => {
    const quesryString = window.location.search;
    const urlParams = new URLSearchParams(quesryString);
    const codeParam = urlParams.get("code");
}, []);

function loginWithGithub(){
    //URL defined by github
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLEINT_ID);

    return (
        <div className="GithubAuth">
            <header className="GithubAuth-header"></header>
            <button onClick={loginWithGithub}>Login with Github</button>
        </div>
    )
};
export default loginWithGithub;