import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { moveFromRentalBikeToAvailable } from '../store/bike/actions';
import '../App.css';

const RentBike = () => {

    const dispatch = useDispatch()
    const rentalBike = useSelector(state => state.bike.rentalBike)

    const availibleBikeHandler = (id) => {
        dispatch(moveFromRentalBikeToAvailable(id))
    }
    return (
        <div className="contain" >
            <div className="rent-bike">
                <span role='img' aria-label='starface'>🤩 Your rent ({rentalBike.reduce((total, bike) => total + bike.cost, 0)}$)</span>
                {
                    rentalBike.map(bike => (
                        <div className="bike__list" key={bike._id}>
                            <span > {`${bike.name} / ${bike.types} / ${bike.cost}$`} </span>
                            <button type="submit" className="btn-cancel"
                                onClick={() => availibleBikeHandler(bike._id)}
                            >
                                Cancel rent
                                </button>
                        </div>))}
            </div>
        </div>
    )
}

export default RentBike
