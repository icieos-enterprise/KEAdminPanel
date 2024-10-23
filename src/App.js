import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import PathRouter from "./pathRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <PathRouter />
                    <ToastContainer autoClose={2000} />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;