import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Routes, Outlet } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import About from './Components/About'

const tahoePeaks = [
  { name: "Freel", elevation: 10891 },
  { name: "Monument", elevation: 10067 },
  { name: "Pyramid", elevation: 9983 },
  { name: "Tallac", elevation: 9735 }
];

// renderItem = helps to render an inidividual list item
// renderEmpty = what is display if list is empty
function List({data, renderItem, renderEmpty}) {
  return !data.length ? renderEmpty : 
  <ul>
    {data.map((item) => 
      <li key={item.name}>
        {renderItem(item)}
      </li>
    )}
  </ul>
}

const Home = () => <h2>Home Page</h2>;



function App() {

  const [data, setData] = useState(null);
  const [aPIError, setAPIError] = useState(null);
  const [loading, setLoading] = useState(false);

  // fetch using the promise syntax. The return of the line .then is attached to becomes the parameter
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://api.github.com/users/andrew-william-miller`)
  //   .then(response => response.json())
  //   .then(data => setData(data))
  //   .then(() => setLoading(false))
  //   .catch(setAPIError);
  // }, []);

  useEffect(() => {
    if(data !== null) {
      console.log("API Data Loaded: ", data);
    }
  }, [data]);

  const GitHubUser = ({ name, email, avatar }) => {
    return (
      <div>
        <h1>{name}</h1>
        <p>Email: {email || "swishy42@gmail.com"}</p> {/* Display the hardcoded email if email is null */}
        <img src={avatar} style={{height: '150px'}} alt={`Avatar of ${name}`} />
      </div>
    )
  }
  // <pre>{JSON.stringify(data, null, 2)}</pre>

  // if(true) return <h1>Test</h1>;

  return (
      <BrowserRouter>
          <Nav />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* A footer could be rendered here */ }
      </BrowserRouter>
  )
}

export default App

/* 
const [count, setCount] = useState(0)

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


                <h1>Data</h1>
          { loading && 
            <h1>LOADING API DATA</h1>
          }
          { error && 
            <pre>{aPIError}</pre>
          }
          {data && 
            <GitHubUser name={data.name} email={data.email} avatar={data.avatar_url}  />
          }

                    {/* Using a React Fragment in the renderItem inline function *///}
    //    <List data={tahoePeaks} renderEmpty={<p>This List is Empty</p>} renderItem={item => <>{item.name} - {item.elevation} ft.  </>} />

