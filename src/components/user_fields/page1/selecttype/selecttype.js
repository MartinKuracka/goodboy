import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {requestLinks, selectShelter} from './selecttype_actions';
import SheltersList from './shelterslist';

const mapStateToProps = (state) => {
    return {
        isPending: state.isPending,
        shelters: state.shelters,
        error: state.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selected: (id) => dispatch(selectShelter(id)),
        selectLink: () => dispatch(requestLinks())
    }
}

const Wrapper = styled.div `
    position:relative;
    width: 100%;
    margin-top: 40px;
`;

const TopText = styled.div `
    display: flex;
    justify-content: space-between;
`
const Select = styled.div `
    width: 100%;
    margin-top: 40px;
    padding: 15px;
    border: var(--border);
    border-radius: var(--radius);
    box-sizing: border-box;
`;

const selector = {
    'width': '100%',
    'border' : '0px'
}

var sheltersList = [];

class SelectType extends React.Component {

    componentDidMount() {
        this.props.selectLink();
    }

    sendId = (e) => {
        const id = e.target[e.target.selectedIndex].id;
        this.props.selected(id)
    }

    render() {
        return(
            <Wrapper>
                <TopText>
                    <h3>Najviac mi záleží na útulku</h3>
                    <h4>Nepovinné</h4>
                </TopText>
                <Select>
                    <h3>Útulok</h3>
                    <select style={selector} name="útulky" onChange={this.sendId}>
                        <option id='0'>Vyberte útulok zo zoznamu</option>
                        <option id='1'>dalsi</option>
                        <SheltersList />
                    </select>
                </Select>
            </Wrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectType);