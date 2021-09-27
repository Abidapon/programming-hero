import React from 'react';
const Mycart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const member of cart) {
        total = total + member.salary;
    }
    const { length } = props.cart;
    return (
        // Cart Section 
        <div className='bg-primary p-5 text-white stickyness shadow-lg rounded'>
            <h3 className='text-warning'>Dev Cart : </h3>
            <h6>You have selected: {length} Developers</h6>
            <h6>Total Cost Will be: ${total}</h6>
            <ul>
                {
                    cart.map(member => <li key={member.id}><h4>{member.name}</h4></li>)
                }
            </ul>
            <button className='btn btn-danger text-light rounded fw-bold shadow-lg border border-secondary'>Hire them</button>
        </div>
    );
};

export default Mycart;