import React, {useEffect,useState} from "react";

function Product(props){

    //States  
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

 useEffect( ()=>{
  async function fetchData(){
  const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
   setProducts(data);
   setLoading(false);
  }
  fetchData();
     },[])  
 
// const changeEvent = event =>{
//   setValue(event.target.value);
// }


function Buffer(){
  return(
    <img className="buffer-img" src="https://http.cat/102" alt="Processing"/>
  )
}

function Item(props){
  return(
  <div className="grid-container">
    {
    products.map((item, i) => {
       return(
        <div className="product" key={item.id}>
          <img src={item.image_link} alt={item.name}/>
          <div>
          <h3>{item.name}</h3>
          <a href={item.product_link}>Check Product</a>
          </div>
        </div>
          )
        }
      )
    }
    </div>
  )
}

function BufferProduct(){
  return(
    <div >
      {loading ? <Buffer /> : <Item /> }
      </div>
  )
}
   
return(
  <div >
    <BufferProduct />
    </div>
    )
}

export default Product