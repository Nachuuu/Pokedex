const [ pokeData, setPoke ] = useState([]);
useEffect(() => {
  //https://pokeapi.co/api/v2/pokemon/?limit=151
  fetch('https://pokeapi.co/api/v2/pokemon/charizard')
  .then(response => response.json())
  .then(data => setPoke(data));
}, []);

console.log(pokeData);

return (

  <Tarjeta key={pokeData.id} name={pokeData.name} num={pokeData.id} img={pokeData.sprites.front_default} />

)






const getData = async () => {
  const api = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
  const data = await api.json();

  if(data !== undefined){
    setPoke(data)
    return (<Tarjeta key={pokeData.id} name={pokeData.name} num={pokeData.id} img={pokeData.sprites.front_default} />)
  } else {
    return <h1>NO data</h1>
  }
}

