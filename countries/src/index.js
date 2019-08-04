import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
  const [countries,setCountries] = useState([])
  const [filter,setFilter] = useState('')
  const [weather,setWeather] = useState(null)

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const selection = (code) => {
    setCountries(countries.filter(countries => countries.alpha2Code === code))
  }

  const Weather = ({city}) => {
    useEffect(() => {
      axios
        .get(`http://api.apixu.com/v1/current.json?key=0c91a09fdacc43e78a692810190408&q=${city.toLowerCase()}`)
        .then(response => {
          setWeather(response.data.current)
        })
    }, [city])

    if ( !weather ) return null;
    return (
      <>
      <h3>Weather in {city}</h3>
      <p><strong>Temprature:</strong> {weather.temp_c} Celsius</p>
      <img src={weather.condition.icon} alt={weather.condition.text} />
      <p><strong>Wind: </strong> {weather.wind_kph} KPH direction {weather.wind_dir} </p>
      </>
    )
  }



  const CountryDetails = () => (
    <>
    <h1>{countries[0].name}</h1>
    <p>Capital {countries[0].capital}</p>
    <p>Population {countries[0].population}</p>
    <h3>Languages</h3>
    <ul>{countries[0].languages.map(lang => <li key={lang.name}>{lang.name}</li>)}</ul>
    <img src={countries[0].flag} width='200px' alt='flag'/>
    <Weather city={countries[0].capital}/>
    </>
  )

  const CountryList = () => (
    <ul>
      {countries.map(countries => <div key={countries.alpha2Code}>
                                    {countries.name}
                                    <button onClick={() => selection(countries.alpha2Code)}>
                                      Show
                                    </button>
                                  </div>
                    )
      }
    </ul>
  )




  const Show = () => {
    if(countries.length>10) {
      return <p>Too many matches, Specify another filter</p>
    }
    else if (countries.length ===1) return <CountryDetails />
    else return <CountryList />
  }


  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${filter.toLowerCase()}`)
      .then(response => {
        setCountries(response.data)
      })
  }, [filter])


  return (
    <div>
    find countries <input value={filter} onChange={handleFilter}/>
    <Show />
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));
