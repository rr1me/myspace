import s from './Tab.module.scss';
import { CSSProperties } from 'react';

const Tab = ({ sx }: {sx: CSSProperties}) =>
	(
		<div style={sx} className={s.tab} />
	);

export default Tab;
