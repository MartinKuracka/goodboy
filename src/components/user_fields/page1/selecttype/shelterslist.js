import React from 'react';
import { connect } from 'react-redux';
import {requestLinks} from './selecttype_actions';

const mapStateToProps = (state) => {
    return {
        isPending: state.selectShelter.isPending,
        shelters: state.selectShelter.shelters,
    }
}

class SheltersList extends React.Component {

    
    render() {
        const { isPending, shelters} = this.props;
        if (isPending === false) {
            return (
                <div>
                    { shelters.map(function(shelter) {
                        <option id={shelter.id}>{shelter.name}</option>
                    })}
                </div>
            )
        } else { 
            console.log('fetching')
            return (
            <option> Nahravam Data... </option>
        )}
    }
    // console.log('before if statement array',this.props.shelters);

}

export default connect(mapStateToProps, null)(SheltersList);