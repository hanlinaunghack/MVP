import Head from "next/head";
import Nav from "./nav";
import { Provider } from "react-redux";
import Store from "./reducers/store";

export default props => {
  return (
    <Provider store={Store}>
      <div>
        <Nav />
        {props.children}
      </div>
    </Provider>
  );
};
