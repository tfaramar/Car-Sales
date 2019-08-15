import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  //moved initial state to reducer
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={props.addFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//map state to props that are passed into App, and can be shared with the child components
const mapStateToProps = state => {
  console.log('this is the state', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(
  mapStateToProps,
   { addFeature, removeFeature }
  )(App);
