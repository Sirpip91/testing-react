import './App.css';

function App() {
  const name = <h1>Bradley</h1>;
  const age = <h2>22</h2>
  const email = <h2>hello@gmail.com</h2>
  return (
    <div className="App">
    <User name="Bradley" age={23} color="Blue"/>
     
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.color}</h1>
    </div>
  );
}
 
export default App;
