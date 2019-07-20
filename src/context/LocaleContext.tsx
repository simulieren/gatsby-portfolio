import React, { useState, useContext, createContext } from "react";

const LocaleContext = createContext(["", () => {}]);

const LocaleProvider = props => {
  const [state, setState] = useState("");
  return (
    <LocaleContext.Provider value={[state, setState]}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export { LocaleContext, LocaleProvider };
