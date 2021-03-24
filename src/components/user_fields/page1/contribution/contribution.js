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
    cursor: pointer;
    width:50%;
    padding: 15px;
    background-color: ${({ active }) => active ? 'var(--primary)' : 'var(--background)'};
    border-radius: 24px 0px 0px 24px;
    border: var(--border_primary);
    color: ${({ active }) => active ? 'var(--background)' : 'black'};
`;

const Option2 = styled.div `
    cursor: pointer;
    width:50%;
    padding: 15px;
    background-color: ${({ active }) => active ? "var(--primary)" : "var(--background)"};
    overflow: hidden;
    border-radius: 0px 24px  24px 0px;
    border: var(--border_primary);
    color: ${({ active }) => active ? 'var(--background)' : 'black'};
`;

const Image = styled.img `
    border-radius: 50%;
    background-color: var(--subtle)
`

const Text = styled.p `
    font-weight:600;
    font-size: 1.2rem;
`

class Contribution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activeOption1: false,
          activeOption2: true,
        };
      }

    option1 = (e) => {
        this.setState({
            activeOption1: true,
            activeOption2: false,
        });
        this.props.contributionValue('single');
        
    }

    option2 = (e) => {
        this.setState({
            activeOption1: false,
            activeOption2: true,
        });
        this.props.contributionValue('whole');
        
    }

    render() {
            return (
                <Container>
                <Option1 id='1' onClick={this.option1} active={this.state.activeOption1}>
                    <Image src={Icon1}/>
                    <Text>Chcem finančne prispieť konkrétnemu útulku</Text>
                </Option1>
                <Option2 id='2' onClick={this.option2} active={this.state.activeOption2}>
                    <Image src={Icon2}/>
                    <Text>Chcem finančne prispieť celej nadácii</Text>
                </Option2>
            </Container>
            )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contribution);