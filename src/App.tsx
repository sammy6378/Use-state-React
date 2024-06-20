import { useState } from 'react'
import './App.scss'
import { arrJokes } from './jokes/jokes'


function App() {

const [jokes,setJoke] = useState(arrJokes);

function updateJoke(id:number,rate:number){
  const newJokes = jokes.map(joke => {
    if(joke.id === id){ 
      return {...joke,rate:rate}
    }
    return joke;
  })
  setJoke(newJokes)
}

function addJoke(e:any){
  e.preventDefault()
  const newJoke = {id: jokes.length + 1,joke: e.target[0].value,rate:0}
  setJoke([...jokes,newJoke])
}

  return (
    <div className='container'>
      <div className="input">
        <form onSubmit={addJoke}>
          <input type="text" />
          <button>Add Joke</button>
          </form>
        </div>
      {
        
      jokes && jokes.map(joke =>{
        return(
          <div className="jokes">
            <div className="joke-text">{joke.joke}</div>
            <div className="rating">Rating: {joke.rate}</div>
            <div className="rates-btn">
              <button onClick={() => updateJoke(joke.id,joke.rate + 1)}>+</button>
              <button onClick={() => updateJoke(joke.id, joke.rate - 1)}>-</button>
            </div>
          </div>
        )
      })
      }
    </div>  
  )
}


export default App
