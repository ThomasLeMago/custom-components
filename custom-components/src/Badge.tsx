import styles from "./badge.module.css";

type BadgeProps = {
    value: string | number
}

export function Badge ({ value }: BadgeProps) {
    return (
        <div className={styles.badge}>
            <span className={styles.value}>{value}</span>
        </div>
    )
}