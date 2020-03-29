import React from 'react';
import { connect } from 'react-redux'
import store from '../../../store/store'
// docs: https://www.npmjs.com/package/qrcode.react

var QRCode = require('qrcode.react');

const url = 'https://spot-f43fe.firebaseapp.com/'

const QRcode = (props) => {

    let rest_uid = props.auth.uid
    console.log(url + rest_uid)

    return (<>  
    <QRCode value={url + rest_uid} />,
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