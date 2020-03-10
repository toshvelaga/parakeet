import React from 'react';

const styles = {
    backgroundColor: '#0378d8', 
    border: 'none',
    borderRadius: '3px',
    color: 'white',
    width: '43%',
    padding: '15px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '.9rem',
    cursor: 'pointer',
    // margin: '2.3rem'
}

const NavButton = (props) => {
    return (<button style={styles}>
        {props.name}
    </button>);
}
 
export default NavButton;