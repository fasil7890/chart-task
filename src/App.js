import React from 'react'

import "./App.css"
import ChartComponent from './components/ChartComponent'
import jsonData from './data.json';

const App = () => {
  return (
    <div className='app'>
    <div className='app-title'>
    <h1 className='app-text'>Chart Task</h1>
    </div>
    <div className='app-chart'>
      <ChartComponent  transactions={jsonData.transactions}/>
    </div>
    </div>
  )
}

export default App