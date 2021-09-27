import React from 'react';

const Member = (props) => {
    console.log(props.Member)
    const {id, name, profession, salary, country, img} = props.Member;
    return (

        <div className="card-group col">
            <div className="card p-3 rounded-3 shadow-lg border border-light">
                <img className='card-img-top w-75 mx-auto rounded-circle' src={img} alt="" />
                <div className="card-body text-center">
                    <h3 className="text-muted text-center">{name}</h3>
                    <h6>Profession: <small className='fw-normal'>{profession}</small></h6>
                   
                    <h6 className='fw-normal'>Charges:<span className='text-danger '> $</span><small className='fw-bold' >{salary}</small > Per Project</h6>
                    
                    <h6>Id: <small className='fw-normal'>{id}</small></h6>
                    <h6>Country: <small className='fw-normal'>{country}</small></h6>
                    <button onClick={() => props.addCartHandler(props.Member)} className='btn btn-primary w-75'> <span className='m-2'><i className="fas fa-phone-alt text-light"></i></span>Contact</button>

                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

        </div>
   
    );

};

export default Member;