import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import styles from './Loading.module.css';
export default function Loading() {
	return (
		<div className={styles['loading']}>
			<AiOutlineLoading3Quarters />
		</div>
	);
}
