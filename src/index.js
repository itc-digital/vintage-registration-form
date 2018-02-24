import { render } from 'inferno';
import 'normalize.css';
import AppFront from './AppFront';
import AppBack from './AppBack';
import './index.css';

render(<AppBack />, document.getElementById('app')); // eslint-disable-line react/jsx-filename-extension
