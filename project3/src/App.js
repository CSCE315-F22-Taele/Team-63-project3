import axios from 'axios';

function App() {
  const getData = async () => {
    axios.get("http://localhost:5000/supply").then((result) => {
      console.log(result);
    });

    axios.get("http://localhost:5000/food").then((result) =>{
      console.log(result);
    });

    axios.get("http://localhost:5000/order").then((result)=>{
      console.log(result);
    });
}

  // const postData = async() => {
  //   axios.post('http://localhost:5000/food')
  // }

  return (
    <button onClick={getData}>
      Click me
    </button>
  );
}

export default App;
