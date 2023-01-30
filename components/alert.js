import clsx from 'clsx';
import styles from '../styles/alert.module.css';

export default function Alert({ children, type }) {
    return (
        <div
            className={clsx({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            {children}
        </div>
    );
}
