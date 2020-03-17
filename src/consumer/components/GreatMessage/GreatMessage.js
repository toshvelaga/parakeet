import React from 'react';

const Greatmessage = () => {
    return (<>
    <div style={{
        margin: 'auto', 
        width: '80%', 
        color: '#0378d8', 
        textAlign: 'left', 
        fontSize: '1.5rem'
        }}>
    <p>
        Great to hear! 
        <span role="img" aria-label="smiley-face"> 😀</span>
    </p>
    <p>
        <span style={{textDecoration: 'underline'}}>What did we do well?</span>
    </p>
    </div>
    
    </>);
}
 
export default Greatmessage;