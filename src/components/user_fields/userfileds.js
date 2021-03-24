import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import Page3 from './page3/page3';
import { connect } from 'react-redux';
import {pageNumberAction} from './userfields_actions'

const mapStateToProps = (state) => {
    return {
        page: state.pageNumber.page,
        contributiontype: state.contributionType.contributiontype,
        shelterID: state.selectShelter.shelterID,
        value: state.selectValue.value,
        firstName: state.userData.firstName,
        lastName: state.userData.lastName,
        email: state.userData.email,
        phone: state.userData.phone,
        useragrees: state.userData.useragrees
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (value) => dispatch(pageNumberAction(value))
    }
}

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    width: 100%;
    height:100%;
`
const ButtonsWrapper = styled.div `
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    margin-top:60px;
`
const buttonDiv = styled.div `
    width: 50%;
    align-content: ${props => props.secondary ? 'start' : 'end'}
`

const Button = styled.button `
    padding: 10px 15px;
    width: 8rem;
    font-family: 'Hind', sans-serif;
    font-size: 15px;
    font-weight: 600;
    border-radius: 25px;
    border: 2px solid;
    background-color: ${props => props.secondary ? 'var(--background)' : 'var(--primary)'};
    color: ${props => props.secondary ? 'var(--primary)' : 'var(--background)'};
`
class UserField extends React.Component {

    validatePage1 = () => {
        const {contributiontype, shelterID, value} = this.props;
        if (contributiontype === 'single' && (shelterID === '' || value === '')) {
            console.log('vyplnte prosim pozadovane polia');
            return (false);
        } else if (contributiontype === 'whole' && value === '') {
            console.log('zvolte prosim sumu prispevku');
            return (false);
        }
        return (true);
    }

    validatePage2 = () => {
        const {firstName,lastName, email, phone, useragrees} = this.props;
        const mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const phoneformat = /([+]?\d{1,3}[. \s]?)?(\d{12}?)/g;
        if (!(firstName.length <= 20 && firstName.length >= 2) && firstName.length != 0) {
            console.log('meno musi mat 2 az 20 znakov');
            return (false);
        } else if (!(lastName.length <= 30 && lastName.length >= 2) || lastName.length === 0) {
            console.log('priezvisko musi mat 2 az 30 znakov');
            return (false);
        } else if (email.length === 0 || !email.match(mailformat)) {
            console.log('prosim vlozte platny e-mail');
            return (false);
        } else if (phone.length === 0 || !phone.match(phoneformat)) {
            console.log('prosim zadajte platne telefonne cislo');
            return (false);
        }
        return (true);
    }


    selectedPage = (value) => {
        this.props.setPage(value);
    }

    nextPage = () => {
        if (this.props.page === 1) {
            if (this.validatePage1() === true) {
                this.props.setPage(2);
            }
        } else if (this.props.page === 2) {
            if (this.validatePage2() === true) {
                console.log('form validated')
                this.props.setPage(3);
            }
        }
    }

    backPage = () => {
        if (this.props.page != 1 ) {
            this.props.setPage(this.props.page -1);
        }
    }

    render() {
        return(
            <Wrapper>
                {this.props.page === 1
                    ? <Page1/>
                    : this.props.page === 2
                        ? <Page2 />
                        : <Page3 />
                }
                <ButtonsWrapper>
                    <buttonDiv>
                       {this.props.page != 1 ? <Button value='back' onClick={this.backPage} secondary>Späť</Button> : false}
                    </buttonDiv>
                    <buttonDiv>
                        <Button value='next' onClick={this.nextPage}>Pokračovať</Button>
                    </buttonDiv>
                </ButtonsWrapper>
             </Wrapper>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserField);