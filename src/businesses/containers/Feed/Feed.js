/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Reviews from "../../components/Reviews/Reviews";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "../../../firebase/fbConfig";

let db = firebase.firestore();

const Feed = (props) => {
  const { auth } = props;
  const [reviewData, setreviewData] = useState([]);

  const headerRef = useRef("");

  useEffect(() => {
    const docRef = db
      .collection("users")
      .doc(props.auth.uid)
      .collection("customers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          var joined = reviewData.concat(doc.data());
          setreviewData(joined);
        });
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h2 ref={headerRef} style={{ marginTop: 0 }}>
        Feed
      </h2>

      {reviewData.map(({ review, rating, date, email, index }) => {
        return (
          <Reviews
            key={index + email + review}
            review={review}
            n={rating}
            email={email}
            date={date}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(Feed);
