import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "../containers/AppContainer";
import configureStore from "../store/config";

const store = configureStore();

const Root = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppContainer />
			</BrowserRouter>
		</Provider>
	);
};

export default Root;
