import React, {useState} from 'react';

const FriendForm = ({submitFriend}) => {

    const [friend, setFriend] = useState({ name: '', email: '', age: ''});
    const handleChange = event => setFriend({...friend, [event.target.name]: event.target.value})
    const handleSubmit = event => {
        event.preventDefault();
        submitFriend(friend);
    }
    
    return (<div>

<form onSubmit ={handleSubmit}>
            <input 
            type ="text" 
            name="name"
            placeholder="name" 
            value={friend.name} 
            onChange={handleChange} />

<input 
            type ="text" 
            name="email"
            placeholder="email" 
            value={friend.email} 
            onChange={handleChange} />

<input 
            type ="text" 
            name="age"
            placeholder="age" 
            value={friend.age} 
            onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>

    </div>)
}

export default FriendForm;