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
  const pushFood = () =>{
    axios.post("http://localhost:5000/insertfood",{
      foodId: 69,
      foodItem: 'Tokyo Revenger',
      price: 69.69,
      supply: 'chicken',
    }).then(() =>{
      console.log("Success");
    });
  }

  const pushOrder = () =>{
    axios.post("http://localhost:5000/insertorder",{
      orderId:11232,
      foodId:3,
      quantity:4,
      orderdate: "2022-10-31",
      amount: 50,
    }).then(()=>{
      console.log("Success");
    })
  }

  return (
    <><button onClick={getData}>
      Click me
    </button><button onClick={pushFood}>
        Testing the function
      </button>
      <button onClick={pushOrder}>
        Test the pushSupply
      </button>
      
      </>
  );
  
}

export default App;
