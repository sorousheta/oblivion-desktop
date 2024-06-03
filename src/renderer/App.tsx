import { MemoryRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';

import 'assets/css/bootstrap.min.css';
import 'assets/css/bootstrap-rtl.min.css';
import 'assets/css/shabnam.css';
import 'assets/css/materialIcons.css';
import 'assets/css/style.css';

import SplashScreen from './pages/SplashScreen/SplashScreen';
import { openDevtoolsOnCtrlShiftI } from './lib/dx';
import { loadLang, loadTheme } from './lib/loaders';
import AppRoutes from './routes';

export default function App() {
    useEffect(() => {
        openDevtoolsOnCtrlShiftI();
        loadTheme();
        loadLang();
    }, []);

    return (
        <>
            <SplashScreen />
            <Router>
                <AppRoutes />
            </Router>
        </>
    );
}
