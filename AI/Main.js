const e = React.createElement;
const { useState } = React;

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(event) {
    event.preventDefault(); // 🔥 stop navigation
    setMessage("");

    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    alert("Login successful!");
    window.location.href = "Night Screen.html";
  }

  return e(
    "div",
    { className: "container" },
    e(
      "form",
      { className: "card login", onSubmit: handleLogin },

      // Logo
      e(
        "h3",
        { className: "logo" },
        e("img", { src: "Logo.png", alt: "logo" }),
        " PEACE"
      ),

      // Title
      e("h1", null, "Login"),
      e("p", null, "Hi, Welcome Back!"),

      // Inputs
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

      // Forgot password
      e(
        "p",
        {
          className: "forgot",
          style: { cursor: "pointer" },
          onClick: () => alert("Forgot password clicked")
        },
        "Forget password?"
      ),

      // Error message
      message &&
        e(
          "p",
          {
            style: {
              color: "#ffd2d2",
              fontSize: "12px",
              marginTop: "8px"
            }
          },
          message
        ),

      // Login button
      e(
        "button",
        {
          className: "btn primary",
          type: "submit"
        },
        "Login"
      ),

      e("div", { className: "divider" }, "or"),

      // Social buttons
      e(
        "div",
        { className: "social" },
        e(
          "button",
          { type: "button" },
          e("img", { src: "facebooklogo.png", alt: "facebook logo" })
        ),
        e(
          "button",
          { type: "button" },
          e("img", { src: "Googlelogo.png", alt: "Google logo" })
        )
      ),

      // Switch to signup
      e(
        "p",
        { className: "switch" },
        "Don't have an account? ",
        e(
          "span",
          {
            onClick: () => (window.location.href = "Sign up.html")
          },
          "Create Account"
        )
      )
    )
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(e(LoginCard));
