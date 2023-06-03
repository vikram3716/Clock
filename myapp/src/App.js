import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import FormPropsTextFields from './Mi'
import Chakra from './Chakra';
function App() {
  return (
    <div style={{backgroundColor:"",height:"100vh",marginTop:"0"}}>
    <h1 style={{padding:"0" ,textAlign:"center",fontSize:"50px",color:"rgb(237,69,101)" ,fontStyle:"italic",fontFamily:"inherit"}}>Real Time Clock</h1>
    <div className="App">
  <Clock/>
  <br/>
  
  <SignIn />
  <FormPropsTextFields />
    </div>
    </div>
  );
}

export default App;
