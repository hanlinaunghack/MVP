import React from "react";
import Store from "../components/reducers/store";
import ImagePage from "../components/imagepage";
import { Provider } from "react-redux";

export default () => {
  return (
    <Provider store={Store}>
      <ImagePage />
    </Provider>
  );
};
