import React from 'react';
import { connect } from 'react-redux';
import {requestLinks} from './selecttype_actions';

const mapStateToProps = (state) => {
    return {
        isPending: state.isPending,
        shelters: state.shelters,
    }
}

class SheltersList extends React.Component {

    
    render() {
        const { isPending, shelters} = this.props;
        if (isPending === false) {
            console.log('loaded')
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
}

export default connect(mapStateToProps, null)(SheltersList);