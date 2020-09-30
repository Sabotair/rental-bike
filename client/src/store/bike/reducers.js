import { CREATE_AVAILABLE_BIKE, GET_BIKES, CREATE_RENTAL_BIKE, GET_RENTAL_BIKES } from './actions'

const defaultState = {
    bikesList: [],
    rentalBike: []
}


export const bikeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_AVAILABLE_BIKE:
            return { ...state, bikesList: [...state.bikesList, action.payload] }
        case GET_BIKES:
            return { ...state, bikesList: action.payload }
        case CREATE_RENTAL_BIKE:
            return { ...state, rentalBike: [...state.rentalBike, action.payload] }
        case GET_RENTAL_BIKES:
            return { ...state, rentalBike: action.payload }
        default:
            return state
    }
}
