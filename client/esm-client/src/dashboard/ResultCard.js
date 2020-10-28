import React, { useEffect } from "react";
import "./TestCard.css";
import { HiOutlineClipboardList, HiClipboardCopy } from "react-icons/hi";
import { fetchAttemptTests } from "../actions/testActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";

function ResultCard(props) {
  const { tests, isLoading, profileID } = props;

  useEffect(() => {
    props.fetchTests(profileID);
  }, []);

  return (
    <>
      <div className="left__header">
        <p className="left__header__text">
          {<HiOutlineClipboardList />}Recently Attempted Tests
        </p>
      </div>
      <div className="left__body">
        {!isLoading && tests ? (
          <ul className="left__body__list__ul">
            {tests.map((test, index) => (
              <Link to="/result" key={index}>
                <li className="left__body__test">
                  <div className="test__index">
                    <p className="index__box ">{index + 1}</p>
                  </div>
                  <div className="test__name"> {test.testName}</div>
                  <div className="test__icon">
                    <HiClipboardCopy />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="skeleton">
            <div className="single-skeleton">
              <Skeleton.Avatar
                className="avatar-skelton"
                active={true}
                size="default"
                shape="square"
              />
              <Skeleton.Input
                className="input-skelton"
                active={true}
                size="default"
              />
            </div>
            <div className="single-skeleton">
              <Skeleton.Avatar
                className="avatar-skelton"
                active={true}
                size="default"
                shape="square"
              />
              <Skeleton.Input
                className="input-skelton"
                active={true}
                size="default"
              />
            </div>
            <div className="single-skeleton">
              <Skeleton.Avatar
                className="avatar-skelton"
                active={true}
                size="default"
                shape="square"
              />
              <Skeleton.Input
                className="input-skelton"
                active={true}
                size="default"
              />
            </div>
            <div className="single-skeleton">
              <Skeleton.Avatar
                className="avatar-skelton"
                active={true}
                size="default"
                shape="square"
              />
              <Skeleton.Input
                className="input-skelton"
                active={true}
                size="default"
              />
            </div>
            <div className="single-skeleton">
              <Skeleton.Avatar
                className="avatar-skelton"
                active={true}
                size="default"
                shape="square"
              />
              <Skeleton.Input
                className="input-skelton"
                active={true}
                size="default"
              />
            </div>
            <div className="single-skeleton">
              <Skeleton.Avatar
                className="avatar-skelton"
                active={true}
                size="default"
                shape="square"
              />
              <Skeleton.Input
                className="input-skelton"
                active={true}
                size="default"
              />
            </div>
            <div className="single-skeleton">
              <Skeleton.Avatar
                className="avatar-skelton"
                active={true}
                size="default"
                shape="square"
              />
              <Skeleton.Input
                className="input-skelton"
                active={true}
                size="default"
              />
            </div>
            <div className="single-skeleton">
              <Skeleton.Avatar
                className="avatar-skelton"
                active={true}
                size="default"
                shape="square"
              />
              <Skeleton.Input
                className="input-skelton"
                active={true}
                size="default"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.tests.isLoadingAttemptedTest,
    tests: state.tests.attemptedTest,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTests: (profileID) => dispatch(fetchAttemptTests(profileID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultCard);