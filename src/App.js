import { useContext, useEffect } from "react";
import { DataContext } from "./components/Dataprovider/Dataprovider";
import "./App.css";
import Router from "./Router";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type";
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
