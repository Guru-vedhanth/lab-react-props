import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppClass from './AppClass.jsx'
// import './index.css'
import imageData from './components/DataComponent.jsx'

const data = imageData()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 style={{
      textAlign:"center"
    }}>Kalvium gallary</h1>
    <div className='gridContainerStyle'>
      <AppClass id="1" imgUrl={data[0].img}/>
      <AppClass id="2" imgUrl={data[1].img}/>
      <AppClass id="3" imgUrl={data[2].img}/>
      <AppClass id="4" imgUrl={data[3].img}/>
    </div>
  </React.StrictMode>,
)