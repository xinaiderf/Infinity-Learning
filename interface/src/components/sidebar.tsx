import React from "react";
import styles from './sidebar.module.css'

const Sidebar: React.FC = () => {
    return (
    <div className={styles.container}>
        <div className={styles.card}>
        <div className={styles.button}>
        <button>Inicio</button>
        </div>
        <div className={styles.button}>
        <button>Guilda</button>
        </div>
        <div className={styles.button}>
        <button>Taberna</button>
        </div>
    </div>
    </div>
    
)};

export default Sidebar;