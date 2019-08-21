import React, { useState } from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosAuth'
import FriendForm from './Form';




 function Friends(props){
    const [list, setList] = useState([]);

    // console.log(credentials, 'creds')
const getData = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/friends', list)
    .then(res=> {setList(res.data)})
    .catch(err => console.log(err))
    // console.log(props, 'props')


}

    getData();

    return (
        <>
        <h1>Hello World</h1>
        <FriendForm submitFriend={getData} />
        <div>

        {
                list.map(friend => {
                    return <div key={friend.id}>{friend.name}</div>
                })
            }
        </div>
        </>
    )
}

export default Friends;