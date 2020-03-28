import React from 'react';

// docs: https://www.npmjs.com/package/qrcode.react

var QRCode = require('qrcode.react');

const QRcode = () => {
    return (<>  
    <QRCode value="http://facebook.github.io/react/" />,
    </>
    );
}
 
export default QRcode;