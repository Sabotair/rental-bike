import React, { Fragment } from 'react';
import AvailableBike from './components/AvailableBike';
import CreateRentBike from './components/CreateRentBike';
import RentBike from './components/RentBike';
import './App.css';

function App() {
  return (

    <Fragment>
      <CreateRentBike />
      <RentBike />
      <AvailableBike />
    </Fragment>
  );
}

export default App;
