import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Axios from 'axios'


function App() {
  const [id, setId] = useState(0)
 const [name, setName] = useState('')
 const [country, setCountry] = useState('')
 const [list, setList] = useState([])
 const [loading, setLoading] = useState(false)



 const getList = () => {
  setLoading(true);
  setTimeout(() => {
    Axios.get('http://localhost:3030/scholarships')
      .then((response) => {
        setList(response.data);
        setLoading(false);
        console.log(response.data);
        console.log(list);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, 1000);
};


  return (
    <div className="App">
      <button onClick={getList}>GETLIST</button>
    </div>
  )
}

export default App
