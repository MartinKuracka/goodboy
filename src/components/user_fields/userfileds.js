import React from 'react';
import styled from 'styled-components';
import Page1 from './page1/page1';
// import Page2 from './page2/page2';
// import Page3 from './page3/page3';

const Wrapper = styled.div `
    position: relative;
    width: 100%;
`

class UserField extends React.Component {
    render() {
        return(
            <Wrapper>
                <Page1 />
                 {/* <Page2 />
                <Page3 /> */}
            </Wrapper>

        )
    }
}

export default UserField;