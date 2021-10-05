import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Layout } from "../global";
import { persistor, store } from "../redux/store";

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
};
export default App;