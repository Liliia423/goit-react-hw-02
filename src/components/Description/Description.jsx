import styles from './Description.module.css';

export default function Description() {
    return (
        <div className={styles['hdrAndDescr']}>
            <h1 className={styles['cafeHeader']}>Sip Happens Café</h1>
            <p className={styles['cafeDescription']}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>    
    )
}