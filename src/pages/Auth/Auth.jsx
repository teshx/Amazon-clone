import React, { useState } from "react";
import classes from "./Auth.module.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/Dataprovider/Dataprovider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";
function Auth() {
  /* first steps */
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [erroes, seterror] = useState("");
  const [lodding, setLodding] = useState({ signin: false, signup: false });
  const [{ user }, dispach] = useContext(DataContext);
  const navigate = useNavigate();
  /*   console.log(email);
  console.log(password); */

  const Authhandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name == "signin") {
      //firebase auth
      setLodding({ ...lodding, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          // console.log(userinfo);
          dispach({
            type: Type.SET_USER,
            user: userinfo.user,
          });

          setLodding({ ...lodding, signin: false });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          seterror(error.message);
          setLodding({ ...lodding, signin: false });
        });
    } else {
      setLodding({ ...lodding, signup: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          dispach({
            type: Type.SET_USER,
            user: userinfo.user,
          });
          setLodding({ ...lodding, signup: false });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          seterror(error.message);
          setLodding({ ...lodding, signup: false });
        });
    }
  };
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
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
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div className={classes.logo_div}>
            <label htmlfor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signin"
            onClick={Authhandler}
            className={classes.login_signin_btn}
          >
            {lodding.signin ? <ClipLoader size={15} /> : "Sign in"}
          </button>
        </form>
        {/* aggrement */}
        <p>
          By signing-in you agree to the AMAZON_FAKE_CLONE conditions of use &
          sale. please see our privacy Notice ,our cookie notice and our interst
          based ads notice
        </p>
        {/* creat account btn */}
        <button
          name="signup"
          onClick={Authhandler}
          className={classes.login_rigister_btn}
        >
          {lodding.signup ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazone Account"
          )}
        </button>
        {erroes && (
          <small style={{ paddingTop: "5px", color: "red" }}>{erroes}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
