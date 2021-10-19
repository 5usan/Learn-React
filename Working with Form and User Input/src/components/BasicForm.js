import useInputs from "../hooks/use-inputs";

const BasicForm = (props) => {
  const firstNameValidity = (enteredFirstName) => {
    const firstNameValidation = enteredFirstName.trim() !== "";
    return firstNameValidation;
  };

  const lastNameValidity = (enteredLastName) => {
    const lastNameValidation = enteredLastName.trim() !== "";
    return lastNameValidation;
  };

  const emailValidity = (enteredemail) => {
    const emailValidation = enteredemail.includes("@");
    return emailValidation;
  };

  const {
    enteredValue: enteredFirstName,
    valueIsValid: firstNameIsValid,
    ValueIsNotValid: firstNameIsNotValid,
    ValueChangeHandler: firstNameChangeHandler,
    reset: firstNameReset,
  } = useInputs(firstNameValidity);

  const {
    enteredValue: enteredLastName,
    valueIsValid: lastNameIsValid,
    ValueIsNotValid: lastNameIsNotValid,
    ValueChangeHandler: lastNameChangeHandler,
    reset: lastNameReset,
  } = useInputs(lastNameValidity);

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    ValueIsNotValid: emailIsNotValid,
    ValueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInputs(emailValidity);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameInputClass = firstNameIsNotValid
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClass = lastNameIsNotValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailIsNotValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            value={enteredFirstName}
            onBlur={firstNameChangeHandler}
          />
          {firstNameIsNotValid && (
            <p className="error-text">Enter First Name.</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameChangeHandler}
          />
          {lastNameIsNotValid && <p className="error-text">Enter Last Name.</p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailChangeHandler}
        />
        {emailIsNotValid && (
          <p className="error-text">E-mail must contain @.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
