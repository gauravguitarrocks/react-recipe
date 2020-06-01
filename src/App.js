import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './App.css';

const App =()=>{
  const APP_ID = 'b3de9b53';
  const APP_KEY = '21294abf9afc2c697a575ffce266cb68';
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getQuery = e =>{
    e.preventDefault();
    setQuery(search);
  }

  return(<div className="App">
    <form className="search-form" onSubmit={getQuery}>
      <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
      <button type="submit" className="search-button">Search</button>
    </form>
    <div className="recipes">
    {recipes.map(recipe =>(
      <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
    ))}
    </div>
  </div>);
};

export default App;