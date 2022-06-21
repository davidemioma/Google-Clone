import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../firebase";

const Avatar = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="text-blue-700">Loading</p>;

  return (
    <div>
      {user ? (
        <img
          className="
           w-10 h-10 rounded-full cursor-pointer transition transform duration-150 hover:scale-110"
          loading="lazy"
          src={user.photoURL}
          alt="profile pic"
          onClick={() => auth.signOut()}
        />
      ) : (
        <button
          className="text-blue-700 cursor-pointer font-medium"
          onClick={signInWithGoogle}
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default Avatar;
