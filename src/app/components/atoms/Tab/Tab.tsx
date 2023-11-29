import s from './Tab.module.scss';
import { CSSProperties } from 'styled-components';
import SxStyledComponent from '@/app/components/atoms/SxStyledComponent/SxStyledComponent';

const Tab = ({ sx }: {sx: CSSProperties}) =>
	(
		<SxStyledComponent $sx={sx} className={s.tab} />
	);

export default Tab;
