import s from './Tab.module.scss';
import { CSSObject } from 'styled-components';
import SxStyledComponent from '@/app/components/atoms/SxStyledComponent/SxStyledComponent';

const Tab = ({ sx }: {sx: CSSObject}) =>
	(
		<SxStyledComponent $sx={sx} className={s.tab} />
	);

export default Tab;
