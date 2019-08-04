import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
  const [countries,setCountries] = useState([])
  const [filter,setFilter] = useState('')

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const show = () => {
    if(countries.length>10) {
      return <p>Too many matches, Specify another filter</p>
    }
    else if (countries.length===1) {
      return (
        <>
        <h1>{countries[0].name}</h1>
        <p>Capital {countries[0].capital}</p>
        <p>Population {countries[0].population}</p>
        <h3>Languages</h3>
        <ul>{countries[0].languages.map(lang => <li>{lang.name}</li>)}</ul>
        <img src={countries[0].flag} width='200px' />
        </>
      )
    }
    else {
      return countries.map(countries => <p>{countries.name}</p>)
    }
  }
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${filter}`)
      .then(response => {
        setCountries(response.data)
      })
  }, [filter])


  return (
    <div>
    find countries <input value={filter} onChange={handleFilter}/>
    {show()}
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));
