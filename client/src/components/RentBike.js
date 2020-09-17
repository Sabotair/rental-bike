import React from 'react'
import '../App.css';

const RentBike = () => {
    return (
        <div className="contain">
            <div className="rent-bike">
                <span role='img' aria-label='starface'>🤩 Your rent (Total 12.99$)</span>
                <div className="bike__list">
                    <span >SuperFast bicyrcle / Custom / 12.99$ </span>
                    <button type="submit" className="btn-cancel">
                        Cancel rent
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RentBike
