import './App.css';
import UserForm from "./components/UserForm";
import {Register, RegisterForm} from "./components/RegisterForm";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <div className="App">
        <UserForm/>
        {/*<UserLogin />*/}
    </div>
  );
}

export default App;
