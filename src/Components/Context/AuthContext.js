import React, { createContext, useContext, useState, useEffect } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "../Login/Firebase/firebase.config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const provider = new GoogleAuthProvider();

  function signup(email, password, name) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setData({
          user: {
            displayName: name,
            email: result.user.email,
          },
        });

        // save user to the database
        // fetch("https://thawing-island-50607.herokuapp.com//user", {
        //   method: "POST",
        //   headers: { "Content-type": "application/json" },
        //   body: JSON.stringify(newUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {});

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => { })
          .catch((error) => { });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleSignIn() {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        console.log("Failed to login");
      });
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setData(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setData({});
      }
      setLoading(false);
    });
    return unsubscribed;
  }, []);

  console.log(data);
  const value = {
    data,
    signup,
    login,
    token,
    logOut,
    setData,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
