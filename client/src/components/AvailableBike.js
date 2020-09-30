import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBike, testMethod } from '../store/bike/actions';
import '../App.css';

const AvailableBike = () => {

    const bikes = useSelector(state => state.bike.bikesList)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteBike(id))
    }
    const rentalBikeHandler = (bike) => {
        dispatch(testMethod(bike))
    }
    return (
        <div className="contain">
            <div className="rent-bike">
                <span role='img' aria-label="bicycle">🚲 Available bicyrcle ({bikes ? bikes.length : 0})</span>
                {bikes ? bikes.map(bike => (
                    <div className="bike__list" key={bike._id}>
                        <div className="bile__item">
                            <span>{`${bike.name} / ${bike.types} / ${bike.cost}$`} </span>
                            <button type="submit" className="btn btn-delete"
                                onClick={() => handleDelete(bike._id)}
                            >
                                Delete
                            </button>
                            <button
                                type="submit"
                                className="btn-rent"
                                onClick={() => rentalBikeHandler(bike)}
                            >
                                Rent
                            </button>
                        </div>
                    </div>
                )) : null}

            </div>
        </div>
    )
}

export default AvailableBike
