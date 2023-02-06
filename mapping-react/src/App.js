import "./App.css"; // import css
import React from "react";

function App() {
  const products = [
    { name: "xbox", price: "400€", image: "https://picsum.photos/300/200" },
    {
      name: "PlayStation",
      price: "550€",
      image: "https://picsum.photos/300/200",
    },
    { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
  ];

  return (
    // you cannot have siblings inside of the jsx, only one div, you use React.Fragment, but you have to first import it, or an empty <></>
    <React.Fragment>
      <div className="App">
        {products.map((item, i) => (
          <div key={i} className="mainDiv">
            <img src={item.image} alt="pic" />
            <p>{item.name}</p> <p>{item.price}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
