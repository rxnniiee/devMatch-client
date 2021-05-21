//React
import React, { useState } from "react";
import styles from "./CreateProfile.module.scss";
import { Link, useHistory } from "react-router-dom";
import Select from "react-select";

//components
import BackArrow from "../../UI/BackArrow";
import Button from "../../UI/Button";

//constants
import { skills}  from '../../../constants/skills.js';

//api
import * as api from '../../../api/index.js';

//Hooks
import useInput from "../hooks/useInput";
import useUser from '../hooks/useUser';

const options = skills.map(skill => ({value: skill, label: skill}))

const validValue = (value) => value.trim() !== "";

const CreateProfile = (props) => {
  const { user } = useUser();
  const history = useHistory();

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

    if (!FormIsValid) {
      return;
    }

    const talentProfile = {firstname: entrName, lastname: entrLname, bio: entrDescribe, skills}

    api.updateTalent(user, talentProfile)
    .then(() => history.push('/profile'))

    nameReset();
    LnameReset();
    describeReset();
  };

  return (
    <form>

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
            <p className={styles.error}>Please describe Yourself</p>
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
          <Button onClick={submitHandler} disabled={!FormIsValid}>Confirm</Button>
      </div>

    </form>
  );
};

export default CreateProfile;