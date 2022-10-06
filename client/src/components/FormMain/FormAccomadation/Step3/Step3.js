import React, {useState} from 'react';
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

const Step3 = ({formData, setFormData}) => {

  const[address, setAddress] = useState('')
  const[coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  })

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log('lll', ll)
    setAddress(value);
    setCoordinates(ll);
    setFormData({...formData, address: value, latlng:ll})

  }


  return (
    <div>


      <p> lat {formData.latlng.lat}</p>
      <p> lat {formData.latlng.lng}</p>
      <p> Address {formData.address}</p>
      {/* <p> lat {coordinates.lat}</p>
      <p> lat {coordinates.lng}</p>
      <p> Address {address}</p> */}

<PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div key={suggestions.description}>
            <input 
              {...getInputProps({
                placeholder: !formData.address? 'Search Places ...' : formData.address,
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div 
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>


    </div>
  )
}

export default Step3

