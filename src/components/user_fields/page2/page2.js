import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {userName, userSurname, userEmail, userPhone} from './page2_actions';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const mapStateToProps = (state) => {
    return {
        firstName: state.userData.firstName,
        lastName: state.userData.lastName,
        email: state.userData.email,
        phone: state.userData.phone,
        useragrees: state.userData.useragrees
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (e) => dispatch(userName(e.target.value)),
        updateSurname: (e) => dispatch(userSurname(e.target.value)),
        updateEmail: (e) => dispatch(userEmail(e.target.value)),
        updatePhone: (e) => dispatch(userPhone(e)),
    }
}

const Wrapper = styled.div `
    display: ${props => props.second ? 'inline-flex' : null};
    margin-top: ${props => props.second ? '30px' : null};
    align-items: baseline;
    position: relative;
    width: 100%;
    justify-content: flex-start;
`

const Form = styled.form `
    position: relative;
`
const Text = styled.p `
    margin-top: 40px;
    font-size: 1.1rem;
    font-weight: 800;
`
const Label = styled.label `
    font-weight: 600;
    margin-left: ${props => props.checkboxInfo ? '10px' : null }
`

const InputEl = styled.div `
    margin-top:10px;
    padding: 10px 15px 10px 20px;
    border: var(--border);
    border-radius: var(--radius);
`
const Input = styled.input `
    width: ${props => props.checkbox ? 'auto' : '100%' };
    font-size: 1rem;
    box-sizing: border-box;
    border: none;

    &:focus {
        outline:none;
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
 `

const phonestyle = {
    width: '100%',
    fontSize: '1rem',
    boxSizing: 'border-box',
    border: 'none',
};

class Page2 extends React.Component {

    render() {
        return(
            <Wrapper>
                <Text>O vás</Text>
                <Form>
                    <InputEl>
                        <Label>Meno
                            <Input type='name' id='name' name='name'
                                placeholder='Vaše meno'
                                minlenght='2'
                                maxlenght='20'
                                autoFocus
                                onChange={this.props.updateName} />
                        </Label>
                    </InputEl>
                    <InputEl>
                        <Label>Priezvisko
                            <Input type='text' id='name' name='surname'
                                placeholder='Zadajte Vaše priezvisko'
                                minlenght='2'
                                maxlenght='30'
                                onChange={this.props.updateSurname} />
                        </Label>
                    </InputEl>
                    <InputEl>
                        <Label>E-mailová adresa
                            <Input type='email' id='name' name='email' 
                                placeholder='Zadajte Váš e-mail'
                                onChange={this.props.updateEmail} />
                        </Label>
                    </InputEl>
                    <InputEl>
                        <Label>Telefónne číslo
                            <PhoneInput inputStyle={phonestyle} 
                                onlyCountries={['sk', 'cz']} 
                                country={'sk'} 
                                type='phone' 
                                id='phone'
                                onChange={this.props.updatePhone}
                            />
                        </Label>
                    </InputEl>
                    <Wrapper second>
                        
                    </Wrapper>
    
                </Form>
            </Wrapper>
        )
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Page2);

