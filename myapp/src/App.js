import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
function App() {
  return (
    <div style={{backgroundColor:"",height:"100vh",marginTop:"0"}}>
    <h1 style={{padding:"0" ,textAlign:"center",fontSize:"50px",color:"white" ,fontStyle:"italic"}}>Clock</h1>
    <div className="App">
  <Clock/>
    </div>
    </div>
  );
}

export default App;
