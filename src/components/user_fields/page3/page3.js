import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {userAgrees} from './page3_actions';

const mapStateToProps = (state) => {
    return {
        firstName: state.userData.firstName,
        lastName: state.userData.lastName,
        email: state.userData.email,
        phone: state.userData.phone,
        useragrees: state.userData.useragrees,
        contributiontype: state.contributionType.contributiontype,
        shelters: state.selectShelter.shelters,
        shelterID: state.selectShelter.shelterID,
        value: state.selectValue.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userAgreeAction: (e) => dispatch(userAgrees(e))
    }
}

const Wrapper = styled.div `
    display: ${props => props.second ? 'inline-flex' : null};
    margin-top: ${props => props.second ? '30px' : null};
    align-items: baseline;
    position: relative;
    width: 100%;
    justify-content: flex-start;
`
const Text = styled.p `
    font-size: 1rem;
    font-weight: 400;
    color: grey;
`
const Label = styled.label `
    margin-top: 65px;
    font-weight: 600;
    margin-left: ${props => props.checkboxInfo ? '10px' : null }
`
const Input = styled.input `
    font-size: 1rem;
    box-sizing: border-box;
    border: none;
`
const FieldWrap = styled.div `
    margin-top: 20px;
`

class Page3 extends React.Component {

    userThick = (e) => {
        e.target.checked ? this.props.userAgreeAction('yes') : this.props.userAgreeAction('no');
    }

    render() {
        const {firstName, lastName, email, phone,contributiontype, shelterID, value} = this.props;
        var listOfShelters = this.props.shelters.shelters;
        return(
            <Wrapper>
                <Label>Akou formou chcem prispieť
                {contributiontype === 'single' ? <Text>Chcem finančne prispieť konkrétnemu útulku</Text> : <Text>Chcem finančne prispieť celej nadácii</Text>}
                </Label>
                <FieldWrap>
                    <Label>Najviac mi záleží na útulku
                         {shelterID != '' ? <Text>{listOfShelters[Number(shelterID)-1].name}</Text> : <Text>Nebol zvolený</Text> }
                    </Label>
                </FieldWrap>
                
                <FieldWrap>
                    <Label>Suma ktorou chem pomôcť
                         {value.includes('€') ? <Text>{value}</Text> : <Text>{value}€</Text>}
                    </Label>
                </FieldWrap>
                <FieldWrap>
                    <Label>Meno a priezvisko
                         <Text>{firstName} {lastName}</Text>
                    </Label>
                </FieldWrap>
                <FieldWrap>
                    <Label>Emailová adresa
                         <Text>{email}</Text>
                    </Label>
                </FieldWrap>
                <FieldWrap>
                    <Label>Telefónne čislo
                         <Text>{phone}</Text>
                    </Label>
                </FieldWrap>
                <FieldWrap>
                    <Wrapper second>
                        <Input type='checkbox' id='check' checkbox onChange={this.userThick}/>
                        <Label htmlFor='check' checkboxInfo>Súhlasím so spracovaním mojich osobných <a href='#'>údajov</a></Label>
                    </Wrapper>
                </FieldWrap>
            </Wrapper>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3);