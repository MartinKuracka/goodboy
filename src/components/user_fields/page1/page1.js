import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Contribution from './contribution/contribution';
import SelectType from './selecttype/selecttype';
import SelectAmount from './selectamount/selectamount';

const mapStateToProps = (state) => {
    return {
        contributiontype: state.contributiontype
    }
}


const Wrapper = styled.div `
    position: relative;
    width: 100%;
`

const Page1 = () => {
    return(
        <Wrapper>
            <Contribution />
            <SelectType />
            <SelectAmount />    
        </Wrapper>
    )  
}

export default connect(mapStateToProps, null)(Page1);