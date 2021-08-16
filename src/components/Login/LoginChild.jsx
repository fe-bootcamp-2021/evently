import {
    titleLogin,
    inputWrapper,
    emailInput,
    emailPassword,
    emailPassStyle,
    emailPassLabel,
    signButton,
  } from "./Login.style";

export let Child = () => {
    return (
      <>
        <div>
          <h1 className={titleLogin}>Login </h1>
        </div>
        <div className={inputWrapper}>
          <div className={emailInput}>
            <div className={emailPassword}>
              <input
                autocomplete="off"
                id="email"
                name="email"
                type="text"
                className={emailPassStyle}
                placeholder="Email address"
              />
              <label for="email" className={emailPassLabel}>
                Email Address
              </label>
            </div>
            <div className={emailPassword}>
              <input
                autocomplete="off"
                id="password"
                name="password"
                type="password"
                className={emailPassStyle}
                placeholder="Password"
              />
              <label for="password" className={emailPassLabel}>
                Password
              </label>
            </div>
            <div className={emailPassword}>
              <button className={signButton}>Login</button>
              {/* <Link  to="/SignUp">Users</Link> */}
            </div>
          </div>
        </div>
      </>
    )
  }