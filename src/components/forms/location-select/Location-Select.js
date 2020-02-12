import React from 'react';
import Select from 'react-select';
import { LOCATION_OPTIONS } from '../../../config/locations';

const LocationSelect = (props) => {
  return (
    <Select
      options={LOCATION_OPTIONS}
      value={props.selectedState}
      id="state"
      name="state"
      onChange={props.selectOnChange}
    />
  );
};

export default LocationSelect;
