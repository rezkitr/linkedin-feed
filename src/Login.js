import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();

  const onChangeForm = (e) => {
    e.preventDefault();
    setIsRegister(!isRegister);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
              photoURL: profilePicUrl,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoURL: profilePicUrl,
                })
              );
            });
        })
        .catch((error) => alert(error));
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="login">
      <img
        src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
        alt=""
      />

      <form>
        {isRegister ? (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Profile picture URL"
              value={profilePicUrl}
              onChange={(e) => setProfilePicUrl(e.target.value)}
            />
          </>
        ) : null}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={onSubmit}>{isRegister ? "Sign Up" : "Sign In"}</button>
      </form>
      <p>
        {isRegister ? `Have acccount?` : `Dont have account?`}{" "}
        <span onClick={onChangeForm} className="login__register">
          {isRegister ? "Login" : "Register here"}
        </span>
      </p>
    </div>
  );
}

export default Login;
