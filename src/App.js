import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/actions/rootActions";
export const App = () => {
  const rootState = useSelector((state) => state.rootStore);
  const dispatch = useDispatch();
  const [state, setState] = useState({ currUser: rootState.currUser });

  useEffect(() => {
    console.log(rootState.currUser);
    dispatch(setUser(null));
  }, []);

  useEffect(() => {
    console.log(rootState.currUser);
    if(!rootState.currUser){
      dispatch(setUser({name: 'Dor', color: 'red'}))
    }
  }, [state.currUser]);

  return <div></div>;
};
