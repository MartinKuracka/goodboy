import React from 'react';
import styled from 'styled-components';

const Text = styled.h1 `
    margin-top: 50px;
    font-size: 46px;
    font-weight: 600;
    line-height: 1;
`

class Header extends React.Component{
    render() {
        return(
            <div>
                <Text>Vyberte si možnosť, ako chcete pomôcť</Text>
            </div>
            
        )
    }
}

export default Header;