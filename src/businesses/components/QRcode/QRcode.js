import React from 'react';
import { connect } from 'react-redux'

// docs: https://www.npmjs.com/package/qrcode.react

// SO: https://stackoverflow.com/questions/50158623/make-generated-qr-code-downloadable-on-react-project

// https://medium.com/@zaran.56/how-to-generate-and-download-a-qr-code-image-in-react-a3e924a672f5

var QRCode = require('qrcode.react');

const url = 'https://spot-f43fe.firebaseapp.com/'

const QRcode = (props) => {

    let rest_uid = props.auth.uid
    console.log(url + rest_uid)

    return (<>  
    <QRCode size={200} value={url + rest_uid} />,
    </>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      auth: state.firebase.auth
    }
}
 
export default connect(mapStateToProps, null)(QRcode);