import s from './Tab.module.scss';
import { CSSProperties } from 'styled-components';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const Tab = ({ sx }: {sx: CSSProperties}) =>
	(
		<SxSC $sx={sx} className={s.tab} />
	);

export default Tab;
