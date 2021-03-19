import React from 'react';

const SheltersList = (sheltersList) => {
    var shelters = sheltersList.sheltersList;
    console.log(shelters);
    if (sheltersList.length != 0) {
        return (
            <div>
                { shelters.map(function(shelter) {
                    <option id={shelter.id}>{shelter.name}</option>
                })}
            </div>
        )
    } else { return (
        <option> Nahravam Data... </option>
    )}
}

export default SheltersList;