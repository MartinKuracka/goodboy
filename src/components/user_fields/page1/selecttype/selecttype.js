import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SheltersList from './shelterslist';

const mapStateToProps = (state) => {
    return {
        isPending: state.isPending,
        shelters: state.shelters,
        error: state.error,
        contributiontype: state.contributionType.contributiontype
    }
}

const Wrapper = styled.div `
    position:relative;
    width: 100%;
    margin-top: 50px;
`;

const TopText = styled.div `
    display: flex;
    justify-content: space-between;
`
const Select = styled.div `
    width: 100%;
    margin-top: 10px;
    padding: 15px;
    border: var(--border);
    border-radius: var(--radius);
    box-sizing: border-box;
`;

class SelectType extends React.Component {
    render() {
        return(
            <Wrapper>
                <TopText>
                    <h3>Najviac mi záleží na útulku</h3>
                    {this.props.contributiontype === 'single'
                        ? <h4>Povinné</h4>
                        : <h4>Nepovinné</h4>
                    }
                </TopText>
                <Select>
                    <h3>Útulok</h3>
                    <SheltersList />
                </Select>
            </Wrapper>
        )
    }
}

export default connect(mapStateToProps, null)(SelectType);