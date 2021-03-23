import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        page: state.pageNumber.page
    }
}


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
            { this.props.page === 1 ? <Text>Vyberte si možnosť, ako chcete pomôcť</Text> 
                : this.props.page === 2 ? <Text>Potrebujeme od Vás zopár informácií</Text> 
                    : <Text>Skontrolujte si zadané údaje</Text> 
            }                
            </div>
            
        )
    }
}

export default connect(mapStateToProps)(Header);