import React from "react";
import styles from "./CreateProfile.module.scss";
import useInput from "../hooks/useInput";

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
  const {
    value: entrSkill,
    hasError: entrSkillError,
    isValid: skillValid,
    valueChangeHandler: skillChangeHandler,
    inputBlurHandler: skillBlurHandler,
    reset: skillReset,
  } = useInput(validValue);
  let FormIsValid = false;

  if (nameValid && LnameValid && describeValid && skillValid) {
    FormIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!FormIsValid) {
      return;
    }

    nameReset();
    LnameReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <h1>Create Profile</h1>
        <div className={styles.Form}>
          <label htmlFor="name">First Name</label>
          <input
            id="fname"
            type="text"
            value={entrName}
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
          <select
            value={entrSkill}
            onChange={skillChangeHandler}
            onBlur={skillBlurHandler}
          >
            <option value="skill0">...</option>
            <option value="skill1">Skill1</option>
            <option value="skill2">Skill2</option>
            <option value="skill3">Skill3</option>
            <option value="skill4">Skill4</option>
          </select>
          {entrSkillError && (
            <p className={styles.error}>Please choose a skill</p>
          )}
        </div>
        <div>
          <button disabled={!FormIsValid}>Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default CreateProfile;
