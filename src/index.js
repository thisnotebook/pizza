import React from "react";
import ReactDOM from "react-dom";
import './index.css'
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




function App(){
  return <div className="container">
    <Header/>
    <Menu/>
    <Footer/>
    </div>
    
}

 
function Header(){
 // const styles = {color:"purple" ,fontSize: "48px", textTransform:  "uppercase"};
  const styles = {};
  return (
    <header className="header">
<h1> Boneyphant Pizza Co.</h1>
    </header>
  );
  //seond way
 //return <h1 style={{color:"red" ,fontSize: "48px", textTransform:  "uppercase"}}> Boneyphant Pizza Co.</h1>
}
function Menu(){
  const pizzas = pizzaData;
 //const pizzas = [];

 
  const numPizzas = pizzas.length;
return (<main className="menu">
  <h2> Our Menu</h2>

 {numPizzas> 0 ?   (
 <>  
     <p   > 
 Authentic italian cuisine. 6 creative dishes to choose from.
  all from our stone oven, all organic, all delicious.
</p>
<ul className="pizzas">
{    pizzas.map((pizza)=>(
  <Pizza pizzaobj = {pizza}/>
)
    )}
  </ul>
</>
) : (
    <p>we're out of stock. Please come later :)</p>
  )}



   
</main>);
}

function Pizza(props){
  return <li className={`pizza ${props.pizzaobj.soldOut ? "sold-out" : ""}` }>
    <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name}/> 
    <div>
    <h3>{props.pizzaobj.name}</h3>
<p>{props.pizzaobj.ingredients}</p>
<span>{props.pizzaobj.soldOut ? "Sold Out" : props.pizzaobj.price}</span>
    </div>

  </li>;
}

function Footer(){
  
   const hour = new Date().getHours();
   const openhour = 12;
   const closeHour = 22;
   const isopen = hour>=openhour && hour <= closeHour;


  //with jsx
  //footer is just a element

  // conditional  statement 
return (<footer className="footer">
 
       {isopen ? (
       <div className="order">
       <p> we're open until {closeHour}.00. Come visit or order online.</p>
      <button className="btn">Order</button>
      
      </div> 
       ) :(
        <p>see you soon. Its closing time</p>
       )}
  </footer>);
  //this is wothout jsx
   //return  React.createElement("footer", null, "wr're currently open")
}




const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<App />);  

///10 tak complete


/*
//one by one

function Header(){
 // const styles = {color:"purple" ,fontSize: "48px", textTransform:  "uppercase"};
  const styles = {};
  return (
    <header className="header">
<h1> Boneyphant Pizza Co.</h1>
    </header>
  );
  //seond way
 //return <h1 style={{color:"red" ,fontSize: "48px", textTransform:  "uppercase"}}> Boneyphant Pizza Co.</h1>
}
function Menu(){
return (<main className="menu">
  <h2> Our Menu</h2>
  <Pizza className="pizzas"
  name="Pizza Spinaci"
  ingredients="Tomato, mozarella, spinach, and ricotta cheese"
  photoName="pizzas/spinaci.jpg"
  price="10"/>
  <Pizza 
  name="Pizza Prosciutto"
  ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
  photoName="pizzas/prosciutto.jpg"
  price="18"/>
  <Pizza 
  name="Pizza Salamino"
  ingredients="Tomato, mozarella, and pepperoni"
  photoName="pizzas/salamino.jpg"
  price="15"/>
  <Pizza 
  name="Pizza Funghi"
  ingredients="Tomato, mozarella, mushrooms, and onion"
  photoName="pizzas/funghi.jpg"
  price="12"/>
  <Pizza 
  name="Focaccia"
  ingredients="Bread with italian olive oil and rosemary"
  photoName="pizzas/focaccia.jpg"
  price="6"/>
   
</main>);
}

function Pizza(props){
  return <div className="pizza">
    <img src={props.photoName} alt={props.name}/> 
    <div>
    <h3>{props.name}</h3>
<p>{props.ingredients}</p>
<span>{props.price}</span>
    </div>

  </div>;
}

function Footer(){
  //with jsx
  //footer is just a element
return <footer>{new Date().toLocaleTimeString()}. we're currently open</footer>
  //this is wothout jsx
   //return  React.createElement("footer", null, "wr're currently open")
}




const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<App />); 
*/


