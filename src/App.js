import './App.css';

function App() {
  const nayoks = ['Jasim','Deepjol','BappaRaz']	
  return (
	<div className="App">
		<header className="App-header">
			<h1 style={{color:'red'}}>Dynamic / Static [Fixed] Data Passing</h1><hr></hr>
			{/*====>>Componenet Call [Start]*/}
				<Nayok name={nayoks[0]} age="56"></Nayok>
				<Nayok name='Salman Sha'></Nayok>
				<Nayok name={nayoks[2]}></Nayok>
				<Nayok></Nayok>
			{/*====>>Componenet Call [End]*/}
		</header>
	</div>
  );
}
//========>>Create Component [Start]
function Nayok(props){
	return (
		<div>
			<h1>Ami Khol Nayok: <span style={{color: 'rgb(123, 3, 252)'}}>{props.name || 'Elias Kanchon'}</span> </h1>
			<h3>I have done 5 movies in <span style={{color:'rgba(88, 156, 59)'}}>{props.age || 20}</span> years </h3>
		</div>
	)
}
//========>>Create Component [End]

export default App;
