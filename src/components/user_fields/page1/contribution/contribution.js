import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Icon1 from '../../../../img/icon1.png';
import Icon2 from '../../../../img/icon2.png';
import {selectType} from './cont_actions';

const mapStateToProps = (state) => {
    return {
        contributiontype: state.contributiontype
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        contributionValue: (e) => dispatch(selectType(e))
    }
}

const Container = styled.div `
    width: 100%;
    height: 180px;
    margin-top: 30px;
    display: flex;
`;

const Option1 = styled.div `
    width:50%;
    padding: 15px;
    background-color: ${props => props.active ? 'var(--primary)' : 'var(--background)'};
    border-radius: 24px 0px 0px 24px;
    border: var(--border_primary);
`;

const Option2 = styled.div `
    width:50%;
    padding: 15px;
    background-color: ${props => props.state = 'active' ? 'var(--primary)' : 'var(--background)'};
    overflow: hidden;
    border-radius: 0px 24px  24px 0px;
    border: var(--border_primary);
    color: white;
`;

const Image = styled.img `
    border-radius: 50%;
    background-color: var(--subtle)
`

const Text = styled.p `
    color: ${props => props.active ? 'var(--on_primary)' : "black"};
`


class Contribution extends React.Component {
    // contributionType = (e) => {
    //     console.log('contribution type', e)
    // }

    option1 = () => {
        this.props.contributionValue('single');
    }

    option2 = () => {
        this.props.contributionValue('whole');
    }

    render() {
        return(
            <Container>
                <Option1 onClick={this.option1}>
                    <Image src={Icon1}/>
                    <Text>Chcem finančne prispieť konkrétnemu útulku</Text>
                </Option1>
                <Option2 onClick={this.option2}>
                    <Image src={Icon2}/>
                    <Text>Chcem finančne prispieť celej nadácii</Text>
                </Option2>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contribution);