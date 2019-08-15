import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = (props) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

//map state to props that are passed into App
const mapStateToProps = state => {
  console.log('this is the state', state);
  return {
    car: state.car
  }
}


export default connect(
  mapStateToProps,
  {}
  )(AddedFeatures);
