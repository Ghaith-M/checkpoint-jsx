
import './App.css';
import img from "./img/img.jpeg"

function App() {
  return (
    <div className="App">
<div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={img} alt="imageSrc"/>
          <br />
          <img src="../img.jpeg" alt="imgPublic"/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
      </div>
  )};


export default App;
