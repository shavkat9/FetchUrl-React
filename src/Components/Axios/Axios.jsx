import React, { useEffect,  useState} from 'react';
import axios from 'axios';
import  ReactDOM  from 'react-dom';

function Axios() {
    const [ users, setUsers] = useState([])

    useEffect(() => {
        // fetchUsersPromise()
        fetchUsersAsync()
    }, [])
    const fetchUsersPromise = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((result) => {
                setUsers(result.data)
            })
            .catch(e => console.log(e))
    }

    const fetchUsersAsync = async () => {
        try{
            const result = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(result.data)
        }catch(e) {
          console.log(e)
        } 
    }
    console.log(users)

  return (
    <div className='App'>
        <h1>Hello Box</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
    </div>
  );
}

export default Axios