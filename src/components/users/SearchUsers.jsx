import React, { useContext, useState } from 'react'
import { Button, Col, Form, InputGroup } from 'react-bootstrap'
import GithubContext from '../context/github/GithubContext'
import SweetAlert2 from 'react-sweetalert2';
function SearchUsers() {
  const [swalProps, setSwalProps] = useState({});
    const [text, setText] = useState('')
    const [massage, setmassage] = useState('')
    const { users, SearchUser,clearUser } = useContext(GithubContext)
    const handleChange = (e) => setText(e.target.value)
  
    const handleSubmit =  (e) => {
      e.preventDefault()
  
      if (text === '') {
        setmassage("Please enter something")
        setSwalProps({
          show: true,
          title: 'Please enter something',icon: 'error',
      });
      } else {
        SearchUser(text)
            setmassage("")
        setText('')
      }}
  return (
    <>
      <form  onSubmit={handleSubmit} className='row align-items-center mb-3'>
     <InputGroup size="lg" className="mb-3">
        <Form.Control
        onChange={handleChange}
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={text}
        />
        <Button variant="dark" type='submit' id="button-addon2" >
          Search
        </Button>
        {users.length >  0 && (
        <Button onClick={clearUser} variant="danger" type='submit' id="button-addon2" >
          Clear
        </Button>
      )}
      </InputGroup> 
        <Form.Text className="text-danger">
         {massage}
        </Form.Text>

     

      </form><SweetAlert2 {...swalProps} />
    
    </>
  )
}

export default SearchUsers
