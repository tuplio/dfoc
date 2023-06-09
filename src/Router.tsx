import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Header from './components/Header';
import { withPage } from './components/Page';
import Uploading from './components/pages/Uploading';
import Support from './components/pages/Support';
import Uploaded from './components/pages/Uploaded';


export const HOME_PATH = '/';
export const UPLOADING_PATH = '/uploading'
export const SUPPORT_PATH = '/support';
export const UPLOADED_PATH = '/uploaded';


const route = (path: string, component: React.ReactNode) => (
    <Route path={ path } Component={ () => withPage(component) } />
);


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                { route(HOME_PATH,      <Home /> ) }
                { route(UPLOADING_PATH, <Uploading /> ) }
                { route(SUPPORT_PATH,   <Support /> ) }
                { route(UPLOADED_PATH,  <Uploaded /> ) }
            </Routes>
        </BrowserRouter>
    );
};

export default Router;