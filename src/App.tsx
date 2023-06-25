import type { Component } from 'solid-js';

import holup from './assets/holup.jpg';
import styles from './App.module.css';

const App: Component = () => {
    return (
        <div class={styles.App}>
            <img src={holup} class={styles.logo} alt="logo" />
        </div>
    );
};

export default App;
