import s from './Tab.module.scss';
import { StyledDimensions } from '@/app/components/shared/utils';
import { StyledTab } from '@/app/components/atoms/Tab/styled';

const Tab = ({ sx }: {sx: Partial<StyledDimensions>}) =>
	(
		<StyledTab {...sx} className={s.tab} />
	);

export default Tab;
