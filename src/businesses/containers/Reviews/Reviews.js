import React, { Component } from 'react';
import './Reviews.css'

// https://codepen.io/toshvelaga/pen/vYYLdbV

class Reviews extends Component {
    state = {  }
    render() { 
        return (<>
        <div class="review">
        <div class="review__score">
          <span class="score">4</span>
          <span>&nbsp;/&nbsp;5&nbsp;</span>
          <span class="score-stars">⭐⭐⭐⭐</span><span class="date">11/12/19 3:00 PM</span>
        </div>
        <div class="review__text">"My son who is in high school is a big fan of startups and TechCrunch. Unfortunately, we both felt that we could have used our money worth two tickets towards something better than attending this year's conference." </div>
      </div>
      
      <div class="review">
      
        <div class="review__score">
          <span class="score">3</span>
          <span>&nbsp;/&nbsp;5&nbsp;</span>
          <span class="score-stars">⭐⭐⭐</span><span class="date">11/12/19 7:00 PM</span>
        </div>
        <div class="review__text">"In the app, exhibitors should be organized by day. Set-up starts at 7, but no one is ready until after 9. The speakers are always running late. I think the cost of entry is too high that it limits the number of early stage "disruptors" to the conference."</div>
      </div>
      </>);
    }
}
 
export default Reviews;