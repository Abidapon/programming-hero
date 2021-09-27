import React, { useEffect, useState } from 'react';
import Mycart from '../cart/Mycart';
import Member from '../Member/Member';
import './main.css'

const Main = () => {
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('./Members.JSON')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])

    const addCartHandler = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
    }
    return (
        <div className="main-container d-flex p-5 bg-light">

            <div className="cart-container text col-md-3 me-5">
            <Mycart cart={cart}></Mycart>
            </div>

            <div className="member-container text row row-cols-md-3 col-md-9 g-4">
                {
                    members.map((member) => <Member  addCartHandler={addCartHandler} key={member.id} Member={member}></Member>)
                }
            </div>   
        </div>
    );
};

export default Main;