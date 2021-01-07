import 'react-app-polyfill/ie11';
import "core-js/stable";
import "regenerator-runtime/runtime";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './_assets/style/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RecoilRoot} from 'recoil';

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Suspense fallback={""}>
                <App/>
            </Suspense>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
