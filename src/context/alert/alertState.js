import { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { AlertReducer } from './alertReducer'
import { SHOW_ALERT, HIDE_ALERT } from '../alertTypes'

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, null)

  const hide = () => dispatch({type: HIDE_ALERT})

  const show = (text, type = 'secondary') => {
    dispatch({
      type: SHOW_ALERT,
      payload: {text, type} 
    })
  }

  return <AlertContext.Provider value={{hide, show, alert: state}}>{children}</AlertContext.Provider>;
};