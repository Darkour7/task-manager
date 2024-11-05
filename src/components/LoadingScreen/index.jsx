import { useContext } from "react";
import { LoadingContext } from "../../context/LoadingContext";
import "./index.css";

export function LoadingScreen() {
  const { loading } = useContext(LoadingContext);

  return loading === true ? (
    <div className="loading-screen">
      <span>Loading...</span>
    </div>
  ) : (
    <></>
  );
}
