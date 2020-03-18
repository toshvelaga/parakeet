import React from 'react';

const Sorrymessage = () => {
    return (<>
    <div style={{
        margin: 'auto', 
        width: '80%', 
        color: '#fb7171', 
        textAlign: 'left', 
        fontSize: '1.5rem'
        }}>
    <p>
        Sorry to hear! 
        <span role="img" aria-label="sad-face"> 😞</span>
    </p>
    <p>
        <span style={{textDecoration: 'underline'}}>How can we do better?</span>
    </p>
    </div>
    
    </>);
}
 
export default Sorrymessage;