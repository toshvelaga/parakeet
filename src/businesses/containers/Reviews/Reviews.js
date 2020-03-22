import React, { Component } from 'react';
import './Reviews.css';
import StarRateIcon from '@material-ui/icons/StarRate';

// https://codepen.io/toshvelaga/pen/vYYLdbV

class Reviews extends Component {
    state = {  }
    render() { 
        const reviewData = {
        data1 : {
            text: "Great service!",
            rating: 4,
            date: '3/20/20',
            email: 'toshvelaga@gmail.com'
        },
        data2 : {
            text: "The service could use improvement. I was very dissapointed.",
            rating: 2,
            date: '3/20/20',
            email: 'igor@gmail.com'
        }
        }

        const n = reviewData.data1.rating;

        function Star(n) {
            if (n < 4) {
                return <StarRateIcon style={{color: '#f40054', fontSize: '2rem'}}/>
            } else 
            return <StarRateIcon style={{color: '#0378d8', fontSize: '2rem'}}/>
        }

        return (<>
        <div className="review">
            <div className="top_row">
                <span style={{float: 'left'}} className="rating">
                    {[...Array(n)].map((e, i) => <span key={i}>
                        {Star(n)}
                    </span>)}
                </span>
                <span style={{float: 'right'}} className="date">{reviewData.data1.date}</span>
            </div>
            <p style={{marginTop:'3rem', textAlign: 'left'}}>{reviewData.data1.text} {"––"} {reviewData.data1.email} </p>
        </div>
      </>);
    }
}
 
export default Reviews;