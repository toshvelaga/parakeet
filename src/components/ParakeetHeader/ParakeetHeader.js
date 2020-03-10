import React from 'react';

const styles = {
    backgroundColor: "#0378d8",
    width: '100%', 
    height: "25%",
    paddingTop: '.4rem',
    paddingBottom: '.4rem',
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: '100'
}

const ParakeetHeader = () => {
    return (<div style={styles}>
        <h1 style={{textAlign: "center"}}>Parakeet</h1>
    </div>);
}
 
export default ParakeetHeader;