import React, { useState, useContext } from "react";
import createContainer from "constate";
import { navigate } from "gatsby";

// State machine
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

const loadPageMachine = Machine({
  id: "load",
  initial: "enter",
  states: {
    enter: {
      on: { NEXT: "end" }
    },
    end: {
      on: { NEXT: "leave" }
    },
    leave: {
      on: { NEXT: "transition" }
    },
    transition: {
      on: { NEXT: "enter" }
    }
  }
});

const useAnimationState = () => {
  const [current, send] = useMachine(loadPageMachine);
  const [page, setPage] = useState({ page: "Home" });

  return { current, send, page, setPage };
};

export const AnimationStateContainer = createContainer(useAnimationState);
