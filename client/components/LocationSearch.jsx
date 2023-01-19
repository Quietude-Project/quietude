import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from "react-places-autocomplete";
import MapContainer from "./MapContainer.jsx";

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    this.props.searchCoffeeShops(address);
    this.props.setShowMap(true);

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
        this.props.setGeocode(latLng);
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div className="searchBar">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.searchCoffeeShops(this.state.address);
                  this.props.setShowMap(true);
                }}
                className="mt-20"
              >
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: '"bg-secondary-500 rounded-lg py-1 px-4"',
                  })}
                />
                <button>Submit</button>
              </form>

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
    );
  }
}

export default LocationSearch;