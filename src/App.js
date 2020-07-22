import React from 'react'
import "./App.css"
import List from './Components/List.js'

const App = () => {
    return (
        <div className='App'>
            <h1 className='movie-list-title'>The Most Amazing Movie List</h1>
            <List />
        </div>
    )
}

export default App