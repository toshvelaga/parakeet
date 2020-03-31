import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import StarRateIcon from "@material-ui/icons/StarRate";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Analytics.css";
import BarChart from "../BarChart/BarChart";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// todo: good reviews
// todo: bad reviews
// todo: most frequently selected items for improvement (bar chart)
// todo: most frequently selected items that business is doing well in (bar chart)

// can use ChartJS: https://www.chartjs.org/docs/latest/charts/bar.html

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function Analytics() {
  const classes = useStyles();

  return (
    <div class="Analytics Container">
      <div class="pure-g">
        <div class="pure-u-1-3">
          <p>Thirds</p>
        </div>
        <div class="pure-u-1-3">
          <p>Thirds</p>
        </div>
        <div class="pure-u-1-3">
          <p>Thirds</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, null)(Analytics);
