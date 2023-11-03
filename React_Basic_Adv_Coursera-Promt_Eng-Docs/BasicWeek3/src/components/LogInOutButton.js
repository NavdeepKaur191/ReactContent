import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LogInOutButton(props){
 
  if (props.isLoggedIn){
    return <LogoutButton />
  }else{
    return <LoginButton />
  }
};
export default LogInOutButton;