import React from 'react'
import SearchUsers from '../components/users/SearchUsers'
import UserResult from '../components/users/UserResult'

function Home() {
  return (
    <section className='d-flex align-items-center justify-content-left py-5'>
      <div >
      <SearchUsers/>
    <UserResult/> 
      </div>
    </section>
  )
}

export default Home
