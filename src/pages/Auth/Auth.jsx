import React from "react";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
function Auth() {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign in</h1>
        <form action="">
          <div className={classes.logo_div}>
            <label htmlfor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.logo_div}>
            <label htmlfor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login_signin_btn}>Sign in</button>
        </form>
        {/* aggrement */}
        <p>
          By signing-in you agree to the AMAZON_FAKE_CLONE conditions of use &
          sale. please see our privacy Notice ,our cookie notice and our interst
          based ads notice
        </p>
        {/* creat account btn */}
        <button className={classes.login_rigister_btn}>Create your Amazone Account</button>
      </div>
    </section>
  );
}

export default Auth;
