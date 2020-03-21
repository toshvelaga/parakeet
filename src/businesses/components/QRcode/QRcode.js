import React from 'react';

var QRCode = require('qrcode.react');

const QRcode = () => {
    return (<>  
    <QRCode value="http://facebook.github.io/react/" />,
    </>
    );
}
 
export default QRcode;