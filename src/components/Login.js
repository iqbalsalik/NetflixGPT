import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { LGIN_BG } from "../utils/constants";
import { auth } from "../utils/firebase";
import { validate } from "../utils/formValidation";
import { addUser } from "../utils/userSlice";
import Header from "./Header";

const Login = () => {
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState(false);
  const [validationMessage, setValidationMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleSignInSignUpBtn = (e) => {
    e.preventDefault();
    const message = validate(
      nameRef?.current?.value,
      emailRef.current.value,
      passwordRef.current.value
    );
    setValidationMessage(message);

    if (message) return;

    {
      signIn &&
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: nameRef?.current?.value,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
              })
              .catch((error) => {
                setValidationMessage(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidationMessage(errorMessage);
          });
    }

    {
      !signIn &&
        signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setValidationMessage(errorMessage);
          });
    }
  };

  const signUpHandler = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src={LGIN_BG}
          alt="BackGround"
          className="h-screen md:h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-3/12 m-auto absolute top-24 left-0 md:left-1/3 bg-black h-auto rounded-lg text-white opacity-80">
        <h1 className="font-bold text-2xl m-3 p-2">
          {signIn ? "Sign Up" : "Sign In"}
        </h1>
        <form className=" flex flex-col ">
          {signIn && (
            <input
              ref={nameRef}
              className="bg-gray-800 m-3 rounded-lg p-2 border border-white"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={emailRef}
            className="bg-gray-800 m-3 rounded-lg p-2 border border-white "
            type="text"
            placeholder="@ Email Adress"
          />
          <input
            ref={passwordRef}
            className="bg-gray-800 m-3 rounded-lg p-2 border border-white"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-800 font-bold p-2 m-3">{validationMessage}</p>
          <button
            onClick={handleSignInSignUpBtn}
            className="bg-red-700 m-3 rounded-lg p-2"
          >
            {signIn ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="m-3 p-2 cursor-pointer" onClick={signUpHandler}>
          {signIn
            ? "Already Registered? Sign In now."
            : "New to Netflix? Sign Up now."}{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
