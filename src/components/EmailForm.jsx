import React, { useState } from "react";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBlur = (e) => {
    if (!email.includes("@")) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailValid(false);
      alert("L'adresse e-mail doit inclure le caractère @");
    } else {
      setEmailValid(true);
      alert(`L'adresse e-mail saisie est : ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Adresse e-mail :</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={!emailValid ? "invalid" : ""}
      />
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default EmailForm;
