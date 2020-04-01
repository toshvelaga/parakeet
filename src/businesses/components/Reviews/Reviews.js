import React from 'react';
import './Reviews.css';
import StarRateIcon from '@material-ui/icons/StarRate';

// https://codepen.io/toshvelaga/pen/vYYLdbV

const Reviews = (props) => {
    
   function Star(n) {
       if (n < 4) {
           return <StarRateIcon style={{color: '#f40054', fontSize: '2rem'}}/>
       } else 
       return <StarRateIcon style={{color: '#ffca2c', fontSize: '2rem'}}/>
   }

    return (
        <div className="review">
            <div className="top_row">
                <span style={{float: 'left'}} className="rating">
                    {[...Array(props.n)].map((e, i) => <span key={i}>
                        {Star(props.n)} 
                    </span>)} 
                </span>
                <span style={{float: 'right'}} className="date">{props.date}</span>
            </div>
            <p style={{marginTop:'3rem', textAlign: 'left'}}>{props.review} {"––"} {props.email} </p>
        </div>
        );
    }
 
export default Reviews;




