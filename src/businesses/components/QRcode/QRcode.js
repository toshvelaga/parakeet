import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

// docs: https://www.npmjs.com/package/qrcode.react
// https://medium.com/@zaran.56/how-to-generate-and-download-a-qr-code-image-in-react-a3e924a672f5

var QRCode = require("qrcode.react");

const url = "https://spot-f43fe.firebaseapp.com/";

const QRcode = (props) => {
	let rest_uid = props.auth.uid;

	const downloadQR = () => {
		const canvas = document.getElementById("qrcode");
		const pngUrl = canvas
			.toDataURL("image/png")
			.replace("image/png", "image/octet-stream");
		let downloadLink = document.createElement("a");
		downloadLink.href = pngUrl;
		downloadLink.download = "qrcode.png";
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	};

	return (
		<>
			<QRCode size={200} id="qrcode" value={url + rest_uid} />,
			<Button
				onClick={downloadQR}
				style={{ width: "80%", marginTop: "2rem" }}
				variant="outlined"
				color="primary"
			>
				Export QR Code
			</Button>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
	};
};

export default connect(mapStateToProps, null)(QRcode);
