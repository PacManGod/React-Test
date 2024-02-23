import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import { PaginaInicio } from "./views/HomePage";
import { LogIn } from "./views/Login"
import './assets/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/*" element={<PaginaInicio />} />
                <Route exact path="/admin" element={<LogIn />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);