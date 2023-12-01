import { CSSProperties } from 'styled-components';
import Tab from '@/app/components/atoms/Tab/Tab';
import { colorVars } from '@/app/theme';

const DataTab = ({ sx }: {sx: CSSProperties}) =>
	<Tab sx={{
		height: '100%', borderRadius: 1, position: 'static',
		backgroundColor: colorVars.c_addition_second,
		boxShadow: colorVars.e_box_shadow,
		...sx }}/>;

export default DataTab;
