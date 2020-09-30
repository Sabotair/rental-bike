import React, { Fragment, useEffect } from 'react';
import AvailableBike from './components/AvailableBike';
import CreateRentBike from './components/CreateRentBike';
import RentBike from './components/RentBike';
import { getBikeList, getRentalBikeList } from './store/bike/actions'
import { useDispatch } from 'react-redux'
import './App.css';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBikeList())
    dispatch(getRentalBikeList())
  }, [dispatch])

  return (

    <Fragment>
      <CreateRentBike />
      <RentBike />
      <AvailableBike />
    </Fragment>
  );
}

export default App;
