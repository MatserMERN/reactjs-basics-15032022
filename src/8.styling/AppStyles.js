import React from 'react'
import './appStyles.css'
import styles from './appStyles.module.css'

function AppStyles() {
  return (
    <div>
        <h1 className="error">Error Message using regular CSS</h1>
        <h1 className="success">Success Message using regular CSS</h1>
        <br />
        <h1 className={styles.error}>Error Message using regular CSS</h1>
        <h1 className={styles.success}>Success Message using regular CSS</h1>
    </div>
  )
}

export default AppStyles