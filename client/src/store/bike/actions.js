import axios from 'axios'

export const CREATE_AVAILABLE_BIKE = 'CREATE_AVAILABLE_BIKE'
export const GET_BIKES = 'GET_BIKES'
export const CREATE_RENTAL_BIKE = 'CREATE_RENTAL_BIKE'
export const GET_RENTAL_BIKES = 'GET_RENTAL_BIKES'

export const createAvailableBike = (bike) => ({
  type: CREATE_AVAILABLE_BIKE,
  payload: bike,
})
export const getBikes = (bike) => ({
  type: GET_BIKES,
  payload: bike,
})

export const createRentalBike = (bike) => ({
  type: CREATE_RENTAL_BIKE,
  payload: bike,
})
export const getRentalBikes = (bike) => ({
  type: GET_RENTAL_BIKES,
  payload: bike,
})

export const requestBikeList = (obj) => async (dispatch) => {
  const res = await axios.post('/bike', obj)
  dispatch(createAvailableBike(res.data))
}
export const getBikeList = () => async (dispatch) => {
  const res = await axios.get('/bike')
  dispatch(getBikes(res.data))
}
export const deleteBike = (id) => async (dispatch) => {
  const resDeleted = await axios.delete(`/bike/${id}`)
  if (!resDeleted) {
    return
  }
  dispatch(getBikeList())
}

export const requestRentalBikeList = (obj) => async (dispatch) => {
  const res = await axios.post('/rental', obj)
  dispatch(createRentalBike(res.data))
}
export const getRentalBikeList = () => async (dispatch) => {
  const res = await axios.get('/rental')
  dispatch(getRentalBikes(res.data))
}
export const deleteRentalBike = (id) => async (dispatch) => {
  await axios.delete(`/rental/${id}`)
  dispatch(getRentalBikes())
}

//  Пример 1
// export const moveFromAvailableBikeToRental = (id) => async (dispatch) => {
//     const res = await axios.delete(`/bike/${id}`)
//     await dispatch(requestRentalBikeList(res.data))
//     dispatch(getRentalBikeList())
//     dispatch(getBikeList())
// }

// Пример 2
export const testMethod = ({ _id, name, types, cost }) => async (dispatch) => {
  const res = await axios.post(`/bike/rental/${_id}`, { name, types, cost })
  dispatch(createRentalBike(res.data))
  dispatch(getBikeList())
}

export const moveFromRentalBikeToAvailable = (id) => async (dispatch) => {
  const res = await axios.delete(`/rental/${id}`)
  await dispatch(requestBikeList(res.data))
  dispatch(getBikeList())
  dispatch(getRentalBikeList())
}
