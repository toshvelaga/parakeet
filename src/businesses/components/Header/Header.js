import React from 'react';

const styles = {
    backgroundColor: "#0378d8",
    width: '100%', 
    paddingTop: '.4rem',
    paddingBottom: '.4rem',
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: '100'
}

const Header = () => {
    return (<div style={styles}>
        <h1 style={{textAlign: "center"}}>Parakeet</h1>
    </div>);
}
 
export default Header;