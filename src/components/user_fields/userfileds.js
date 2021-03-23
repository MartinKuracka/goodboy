import React from 'react';
import styled from 'styled-components';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import Page3 from './page3/page3';
import { connect } from 'react-redux';
import {pageNumberAction} from './userfields_actions'

const mapStateToProps = (state) => {
    return {
        page: state.pageNumber.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (value) => dispatch(pageNumberAction(value))
    }
}

const Wrapper = styled.div `
    position: relative;
    width: 100%;
`
const ButtonsWrapper = styled.div `
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    margin-top:60px;

`
const ButtonNext = styled.button `
    padding: 15px;
    font-family: 'Hind', sans-serif;
    font-size: font-size: 22px;
    font-weight: 600;
    border-radius: 30%;
    background-color: var(--subtle);
    ${'' /* color: var(--background); */}
`
const ButtonBack = styled.button `
    padding: 15px;
    font-family: 'Hind', sans-serif;
    font-size: font-size: 22px;
    font-weight: 600;
    border-radius: 30%;
    background-color: var(--primary);
    color: var(-background);
`

class UserField extends React.Component {

    selectedPage = (value) => {
        this.props.setPage(value);
    }

    nextPage = () => {
        if (this.props.page === 1) {
            this.props.setPage(2);
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
                    {this.props.page != 1 ? <ButtonBack value='back' onClick={this.backPage}>Späť</ButtonBack> : false}
                    <ButtonNext value='next' onClick={this.nextPage}>Pokračovať</ButtonNext>
                </ButtonsWrapper>
             </Wrapper>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserField);