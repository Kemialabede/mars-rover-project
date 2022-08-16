import EmptyIcon from '../../public/empty.png'
import Image from 'next/image';
import styles from './emptyState.module.scss'

const EmptyState = () => {
    return(
        <div className={styles.container}>
            <Image src={EmptyIcon} alt="empty" width={128} height={128} />
            <p>No data available</p>
        </div>
    )
}

export default EmptyState;
