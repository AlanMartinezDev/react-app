
import { useState } from 'react';
import './App.css';


const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


function App() {

  const [llista,setLlista] = useState(PRODUCTS);

  return (
    <div className="App">    
        <FormProducte llista={llista} setLlista={setLlista} /> 
        <ProductTable products={llista} />
    </div>
  );
}


function ProductRow({ product }) {  

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}


function ProductTable({ products }) {
  const rows = [];
  
  products.forEach((product) => {
    rows.push(
      <ProductRow key={product.name} product={product} />
    );   
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}





function FormProducte({llista,setLlista}) {
  
  const [producte, setProducte] = useState( {category: "", price: "", stocked: true, name: ""}, );
  
  const handleChange = (input) =>  {      
    setProducte( {...producte, [input.name]: input.value })
  }

  const handleSave = () => {
    const newprod = {...producte}
    setLlista([...llista, newprod])
  }

  return (
    <>
      <form>
        Name: <input type="text" name="name" value={producte.name} 
                 onChange={ (event) => { handleChange(event.target)  }}/>

        Category: <select name="category" value={producte.category} 
               onChange={ (event) => { handleChange(event.target)  }}>
                    <option>Fruits</option>
                    <option>Vegetables</option>
                  </select>
        
        Price: <input type="text" name="price" value={producte.price} onChange={ (event) => { handleChange(event.target)  }}/>
       
        <input type="button" value="Save" onClick={handleSave}></input>

      </form>
  </>
  )
}

export default App;