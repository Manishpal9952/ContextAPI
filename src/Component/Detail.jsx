import React, { useContext } from "react";
import myContext from "../Context/MyContext";

function Detail() {
  const { user } = useContext(myContext);

  if (user) {
    return (
      <>
        <div className="text-center pt-5 text-xl font-semibold text-orange-900 capitalize">
          Welcome to {user.name}
        </div>
      </>
    );
  } else {
    return (
      <div className="text-center pt-5 text-xl font-semibold text-orange-900 capitalize">
        Please fill form
      </div>
    );
  }
}

export default Detail;
