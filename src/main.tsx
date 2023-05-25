import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';

import Router from './Router'
import { dark } from './themes';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={dark}>
        <Router />
    </ThemeProvider>
)
