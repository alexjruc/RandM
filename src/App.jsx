import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getRandomNumber } from './utils/randomNumber'
import Location from './components/Location'
import ResidentsList from './components/ResidentsList'
import Header from './components/Header'



function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <main className='bg-[url("/bg.png")] bg-cover bg-center z-0 w-full min-h-screen font-body'>
      <Header />
      <Location location={location} setLocation={setLocation}/>
      <ResidentsList residents={location?.residents ?? []}/>
    </main>
  )
}

export default App
