const e = React.createElement;
const { useState } = React;

function SignUpCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function validateForm(event) {
    event.preventDefault(); 

    if (name.trim().length < 3) {
      setMessage("Name must be at least 3 characters.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Invalid email address.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    alert("Account created!");
    window.location.href = "Night Screen.html";
  }

  return e(
    "div",
    { className: "container" },
    e(
      "form",
      { className: "card signup", onSubmit: validateForm },

      e(
        "h3",
        { className: "logo" },
        e("img", { src: "Logo.png" }),
        " PEACE"
      ),

      e("h1", null, "Sign Up"),

      e("input", {
        type: "text",
        placeholder: "Your Name",
        value: name,
        onChange: (e) => setName(e.target.value)
      }),

      e("input", {
        type: "email",
        placeholder: "Your Email",
        value: email,
        onChange: (e) => setEmail(e.target.value)
      }),

      e("input", {
        type: "password",
        placeholder: "Password",
        value: password,
        onChange: (e) => setPassword(e.target.value)
      }),

      message &&
        e(
          "p",
          { style: { color: "#ffd2d2", fontSize: "12px" } },
          message
        ),

      e(
        "button",
        { className: "btn secondary", type: "submit" },
        "Create Account"
      )
    )
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(e(SignUpCard));
