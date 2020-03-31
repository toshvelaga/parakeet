import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import StarRateIcon from "@material-ui/icons/StarRate";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";

import "./Analytics.css";
import BarChart from "../BarChart/BarChart";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// todo: good reviews
// todo: bad reviews
// todo: most frequently selected items for improvement (bar chart)
// todo: most frequently selected items that business is doing well in (bar chart)

// can use ChartJS: https://www.chartjs.org/docs/latest/charts/bar.html

class Analytics extends Component {
  constructor(props) {
    super();
  }
  state = {};
  render() {
    const { auth } = this.props;
    console.log(auth);

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <>
        <div class="analytics">
          <Navbar />
          <div class="analytics-header">
            <h2>Analytics</h2>
          </div>
          <div class="analytics-container">
            <div class="flex-grid">
              <div class="col review-badge">
                This little piggy went to market.
              </div>
              <div class="col review-badge">
                This little piggy went to market.
              </div>
              <div class="col review-badge">
                This little piggy went to market.
              </div>
              <div class="col review-badge">
                This little piggy went to market.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, null)(Analytics);
