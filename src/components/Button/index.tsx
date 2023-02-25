import './styles.css';

import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, ...props }: Props) {
	return <button className={`btn ${className}`} {...props} />;
}
