import React from 'react';
import styled from 'styled-components';

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
    'border-radius' : '5px',
    'padding' : '10px'
}

class SelectType extends React.Component {
    render() {
        return(
            <Wrapper>
                <TopText>
                    <h3>Najviac mi záleží na útulku</h3>
                    <h4>Nepovinné</h4>
                </TopText>
                <Select>
                    <h3>Útulok</h3>
                    <select style={selector} name="útulky">
                        <option  value="Vyberte útulok zo zoznamu">Vyberte útulok zo zoznamu</option>
                        <option value="útulok">útulok</option>
                    </select>
                </Select>
            </Wrapper>
        )
    }
}

export default SelectType;