import React, { Component } from 'react';
import ParakeetHeader from '../../../src/components/ParakeetHeader/ParakeetHeader'
import StarRatingComponent from 'react-star-rating-component';
import './Rating.css'

// documentation: https://www.npmjs.com/package/react-star-rating-component
// Additional docs for half-star implementation: https://github.com/voronianski/react-star-rating-component/blob/master/example/index.js

class Rating extends Component {
    state = { rating: 5 }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() { 
        const { rating } = this.state;

        return (<>
            <ParakeetHeader />
            <p style={{fontSize: '1.5rem'}}>How was your experience?</p>

            <div>
                <StarRatingComponent className={"Stars"}
                name="rate1" 
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        </>);
    }
}
 
export default Rating;