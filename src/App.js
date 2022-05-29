
import LoginButton from './components/loginbutton';
import LogoutButton from './components/logoutButton';
import './App.css';
import Profile from './components/Profile';
// import { useAuth0 } from "@auth0/auth0-react";

function App() {
  // const { isLoading } = useAuth0();

  // if( isLoading) return <div>Loading...</div> 

  return (
        <div className="App">
          
          <LoginButton/>  
          <LogoutButton/>
          <Profile/>

       </div>
    
  );
}

export default App;
