import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        })
        .catch((error) => alert(error));
    });
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    }).catch(error => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1641653679~hmac=b2069fb04dc0ce71051ae13bebbfe318"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full name (required if registering)"
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile pic Url (optional)"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="loginRegister" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}
