import axios from 'axios';

function App() {
  const getData = async () => {
    axios.get("http://localhost:5000/user").then((result) => {
      console.log(result);
    });
  }

  return (
    <button onClick={getData}>
      Click me
    </button>
  );
}

export default App;
