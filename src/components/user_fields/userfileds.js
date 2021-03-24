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
        value: state.selectValue.value
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
        const {contributiontype, page, shelterID, value} = this.props;
        if (contributiontype === 'single' && (shelterID === '' || value === '')) {
            console.log('vyplnte prosim pozadovane polia');
            return (false);
        } else if (contributiontype === 'whole' && value === '') {
            console.log('zvolte prosim sumu prispevku');
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