import React from 'react';
import Image from 'next/image'
import SearchIcon from '../../public/search.svg'
import styles from './searchbox.module.scss';

export interface Props {
    onChange: any;

}

const Searchbox = ({ onChange }: Props) => {
    return (
        <div className={styles.container}>
            <input onChange={onChange} placeholder="Search by camera name..." />
            <Image src={SearchIcon} width={20} height={20} />
        </div>
    )
}

export default Searchbox;
