import React from 'react'
import Card from './Components/Card'
import Filter from './Components/Filter'
import Header from './Components/Header'
import Table from './Components/Table'

const Home = () => {
  return (
    <div>
        <center>
            <Header/>
            <Table/>
            <Filter/>
            <Card/>
        </center>
    </div>
  )
}

export default Home