import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { requestBikeList } from '../store/bike/actions';
import '../App.css';

const CreateRentBike = () => {

    const [name, setName] = useState('')
    const [types, setTypes] = useState('Roadster')
    const [cost, setCost] = useState(0)
    const dispatch = useDispatch()



    const handleCreateBike = (e) => {
        e.preventDefault()
        dispatch(requestBikeList({ name, types, cost }))
    }
    return (
        <>
            <div className="title">
                <h1>Awesome Bike Rental</h1>
            </div>
            <div className="contain">
                <span id="create-text" role='img' aria-label='money-mouth face'>🤑 Create new rent</span>
                <div className="container">
                    <div className="create__rent ">
                        <form className="form-inline" onSubmit={handleCreateBike}>
                            <div className="block">
                                <label htmlFor="name">Bike name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="bike-name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="block">
                                <label htmlFor="type">Bike type</label>
                                <select name="type" id="type"
                                    value={types}
                                    onChange={(e) => setTypes(e.target.value)}
                                >
                                    <option value="Roadster">Roadster</option>
                                    <option value="Mountain bike">Mountain bike</option>
                                    <option value="BMX">BMX</option>
                                </select>
                            </div>
                            <div className="block">
                                <label htmlFor="price">Rent Price</label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    className="rent-price"
                                    value={cost}
                                    onChange={(e) => setCost(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateRentBike
