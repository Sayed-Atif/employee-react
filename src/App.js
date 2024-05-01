import './App.css'
// import './index.css'
// import EmployeeList from './components/EmployeeList'
// import EmployeeListItem from './components/EmployeeListItem'
import EmployeePage from './components/EmployeePage'
// import Header from './components/Header'
import HomePage from './components/HomePage'
// import SearchBar from './components/SearchBar'


import React from 'react'
function App() {
  const topics = ["Employee Directory", "Employee"]
  return (
    <div className="App">
    <HomePage title={topics[0]}/>
    <EmployeePage title={topics[1]}/>
  </div>
  )
}



export default App