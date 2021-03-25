import React from 'react';
import { connect } from 'react-redux';
import {requestLinks, selectShelter2} from './selecttype_actions';


const mapStateToProps = (state) => {
    return {
        isPending: state.selectShelter.isPending,
        shelters: state.selectShelter.shelters,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selected: (id) => dispatch(selectShelter2(id)),
        request: () => dispatch(requestLinks())
    }
}

class SheltersList extends React.Component {

    selector = {
        'width': '100%',
        'border' : '0px'
    }

    componentDidMount() {
        this.props.request();
    }


    sendId = (e) => {
        console.log(e);
        const id = e.target[e.target.selectedIndex].id;
        this.props.selected(Number(id))
    }

    render() {
        // const { isPending, shelters} = this.props;
        if (this.props.isPending === false) {
            var listOfShelters = this.props.shelters.shelters;
            console.log('Is array??', Array.isArray(listOfShelters), listOfShelters)
            return (
                <div>
                    <select style={this.selector} name="útulky" onChange={this.sendId}>
                    <option >Vyberte útulok so zoznamu</option>
                    { listOfShelters.map((shelter, i) => (
                        <option key={i} id={shelter.id}>{shelter.name}</option>
                    ))}
                    </select>
                </div>
            )
        } else if (this.props.isPending === true) {
            console.log('fetching')
            return (
                <select style={this.selector} name="útulky" onChange={this.sendId}>
                    <option id='0'> Nahravam Data... </option>
                </select>
        )}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SheltersList);