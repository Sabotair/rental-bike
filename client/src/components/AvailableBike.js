import React from 'react'
import '../App.css';

const AvailableBike = () => {
    return (
        <div className="contain">
            <div className="rent-bike">
                <span role='img' aria-label="bicycle">🚲 Available bicyrcle (3)</span>
                <div className="bike__list">
                    <div className="bile__item">
                        <span>SuperFast bicyrcle / Custom / 12.99$ </span>
                        <button type="submit" className="btn">
                            Submit
                        </button>
                        <button type="submit" className="btn-rent">
                            Rent
                        </button>
                    </div>
                </div>
                <div className="bike__list">
                    <div className="bile__item">
                        <span >SuperFast bicyrcle / Custom / 12.99$ </span>
                        <button type="submit" className="btn">
                            Submit
                        </button>
                        <button type="submit" className="btn-rent">
                            Rent
                        </button>
                    </div>
                </div>
                <div className="bike__list">
                    <div className="bile__item">
                        <span >SuperFast bicyrcle / Custom / 12.99$ </span>
                        <button type="submit" className="btn">
                            Submit
                          </button>
                        <button type="submit" className="btn-rent">
                            Rent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvailableBike
