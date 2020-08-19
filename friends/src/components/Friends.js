import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from './utils/axiosWithAuth'


const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then((res) => {
            setFriends(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/friends", form)
        .then((res) => {
            console.log(res)
            setFriends(res.data)
            setForm({
                name: '',
                age: '',
                email: ''
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            {friends.map((friend) => {
                return <h3 key={friend.id} >{friend.name}</h3>
            })}
            <form>
                <label>Name&nbsp;
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                </label>

                <label>Age
                <input
                    type="text"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                />
                </label>

                <label>Email
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                </label>
                <button onClick={addFriend}>Add Friend</button>
            </form>
        </div>
    )

}

export default Friends