import Layout from "../components/layout.js";
import App from "../components/app";
import { Provider } from "react-redux";
import Store from "../components/reducers/store";

export default () => {
  return (
    <Provider store={Store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  );
};
