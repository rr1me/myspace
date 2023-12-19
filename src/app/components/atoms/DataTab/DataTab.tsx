import { CSSProperties } from 'styled-components';
import { colorVars } from '@/app/theme';
import { ReactNode } from 'react';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const DataTab = ({ sx, children }: {sx: CSSProperties, children?: ReactNode}) =>
	<SxSC $sx={{
		height: '100%', borderRadius: 1,
		backgroundColor: colorVars.c_addition_second,
		boxShadow: colorVars.e_box_shadow,
		...sx }}>
		{children}
	</SxSC>;

export default DataTab;
