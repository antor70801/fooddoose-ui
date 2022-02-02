import React, { useState } from 'react';
const DeliveryOptions = () => {
    const [mark, setMark] = useState(false)
    const changehandler = (props) => {
        setMark(props)
    }

    return (
        <div>
            <div className='pb-5 mx-3'>
                <h5 className='fw-bold'>
                    Mark Delivery Options
                </h5>
                {/* <button style={{ backgroundColor: 'rgba(255,255,255,0)' }} class="form-check">
                    <input class="form-check-input" onClick={() => { changehandler(true) }} type="radio" name="exampleRadios" id="exampleRadios1" checked />

                    <label class="form-check-label" htmlFor="exampleRadios1">Today Delivery (<span className='fw-bold'>35.00 ৳</span>)
                    </label>
                </button>
                <button style={{ backgroundColor: 'rgba(255,255,255,0)' }} class="form-check">
                    <input checked onClick={() => { changehandler(false) }} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />


                    <label class="form-check-label" htmlFor="exampleRadios2">
                        Take Away (<span className='fw-bold'>Free</span>)
                    </label>
                </button> */}

                <input checked type="radio" class="btn-check" name="options-outlined" id="warning-outlined" autocomplete="off" />
                <label onClick={() => { changehandler(true) }} class="btn btn-outline-warning" for="warning-outlined">Today Delivery (<span className='fw-bold'>35.00 ৳</span>)</label>

                <input checked type="radio" class="btn-check" name="options-outlined" id="warning-outlined5" autocomplete="off" />
                <label onClick={() => { changehandler(false) }} class="mx-3 btn btn-outline-warning" for="warning-outlined5">   Take Away (<span className='fw-bold'>Free</span>)</label>
                <br />
                <br />

                {
                    mark && <div>
                        <div className='d-flex justify-content-between pt-3'>
                            <h5 className='fw-bold'>
                                Deliver To
                            </h5>
                            <button style={{ backgroundColor: 'rgba(255,255,255,0)' }} className=' fw-bold text-warning' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fas fa-plus"></i> Add
                            </button>
                        </div>

                        <h1 className='border p-3'>    <i class="fas text-warning fa-map-marker-alt"></i> Location: </h1>
                    </div>
                }
            </div>

        </div>
    );
};

export default DeliveryOptions;