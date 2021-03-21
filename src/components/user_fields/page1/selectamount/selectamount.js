import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {selectAmount} from './selectamount_actions'

const mapStateToProps = (state) => {
    return {
        value: state.selectValue.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (value) => dispatch(selectAmount(value)),
    }
}

const Text =  styled.h3 `
    margin-top: 20px;
`

const Wrapper = styled.div `
    margin-top: 10px;
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
`
const Amount = styled.input `
    font-family: 'Hind', sans-serif;
    font-size: 22px;
    font-weight: 600;
    padding: 15px;
    min-width: 10%;
    max-width: 15%;
    margin-right: 10px;
    border: var(--border);
    border-radius: var(--radius);
    text-align: center;
    background-color: var(--background)
`
class SelectAmount extends React.Component {

    userinput = (value) => {
        this.props.updateValue(value);
    }

    render() {
        return(
            <div>
                <Text>Suma, ktorou chem prispieť</Text>
                <Wrapper>
                    <Amount type='button' value='5€' onChange={this.userinput}></Amount>
                    <Amount type='button' value='10€' onChange={this.userinput}></Amount>
                    <Amount type='button' value='20€' onChange={this.userinput}></Amount>
                    <Amount type='button' value='30€' onChange={this.userinput}></Amount>
                    <Amount type='button' value='50€' onChange={this.userinput}></Amount>
                    <Amount type='button' value='100€' onChange={this.userinput}></Amount>
                    <Amount type='number' onChange={this.userinput} placeholder='_____€'></Amount>
                </Wrapper>
            </div>
           
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAmount);