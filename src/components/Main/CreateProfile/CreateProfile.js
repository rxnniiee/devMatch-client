import React, { useState } from "react";
import styles from "./CreateProfile.module.scss";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import BackArrow from "../../UI/BackArrow";
import Button from "../../UI/Button";
import Select from "react-select";

const options = [
  { value: "Skill1", label: "Skill1" },
  { value: "Skill2", label: "Skill2" },
  { value: "Skill3", label: "Skill3" },
  { value: "Skill4", label: "Skill4" },
];
const validValue = (value) => value.trim() !== "";

const CreateProfile = (props) => {
  const {
    value: entrName,
    hasError: entrNameError,
    isValid: nameValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(validValue);

  const {
    value: entrLname,
    hasError: entrLnameError,
    isValid: LnameValid,
    valueChangeHandler: LnameChangeHandler,
    inputBlurHandler: LnameBlurHandler,
    reset: LnameReset,
  } = useInput(validValue);

  const {
    value: entrDescribe,
    hasError: entrDescribeError,
    isValid: describeValid,
    valueChangeHandler: describeChangeHandler,
    inputBlurHandler: describeBlurHandler,
    reset: describeReset,
  } = useInput(validValue);
  const [skills, setSkills] = useState([]);
  let FormIsValid = false;

  if (nameValid && LnameValid && describeValid) {
    FormIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(skills);

    if (!FormIsValid) {
      return;
    }

    nameReset();
    LnameReset();
    describeReset();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <BackArrow className={styles.arrow} />
        <h1>Create Profile</h1>
        <div className={styles.Form}>
          <label htmlFor="name">First Name</label>
          <input
            id="fname"
            type="text"
            value={entrName}
            placeholder="First Name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {entrNameError && (
            <p className={styles.error}>Please enter yor name</p>
          )}
        </div>
        <div className={styles.Form}>
          <label htmlFor="name">Last Name</label>
          <input
            id="lname"
            type="text"
            placeholder="Last Name"
            value={entrLname}
            onChange={LnameChangeHandler}
            onBlur={LnameBlurHandler}
          />
          {entrLnameError && (
            <p className={styles.error}>Please enter yor Last Name</p>
          )}
        </div>
        <div className={styles.Form}>
          <label htmlFor="name">Describe Yourself</label>
          <textarea
            id="describe"
            type="text"
            placeholder="Please describe yourself"
            value={entrDescribe}
            onChange={describeChangeHandler}
            onBlur={describeBlurHandler}
          />
          {entrDescribeError && (
            <p className={styles.error}>Please describe YourSelf</p>
          )}
        </div>
        <div className={styles.Form}>
          <label htmlFor="name">Skills</label>
          <Select
            options={options}
            isMulti={true}
            className={styles.Select}
            isSearchable
            placeholder="Select your skills..."
            onChange={setSkills}
            closeMenuOnSelect={false}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div>
          <Link to="/profile">
            <Button disabled={!FormIsValid}>Confirm</Button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CreateProfile;
