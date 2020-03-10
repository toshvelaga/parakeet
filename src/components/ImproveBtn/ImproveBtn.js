import React from 'react';
import './ImproveBtn.css';

// binding functions through props: https://stackoverflow.com/questions/48407785/react-pass-function-to-child-component

const ImproveBtn = (props) => {
    return (<>
        <button className="ImproveBtn">
            {props.name}
        </button>
    </>);
}
 
export default ImproveBtn;