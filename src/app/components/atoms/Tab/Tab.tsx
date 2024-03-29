import s from './Tab.module.scss';
import { CSSObject } from 'styled-components';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import clsx from 'clsx';
import { ReactNode } from 'react';

const Tab = ({ sx, posStatic = false, children }: {sx: CSSObject, posStatic?: boolean, children?: ReactNode}) =>
	(
		<SxSC $sx={sx} className={clsx({
			[s.tab]: true,
			[s.absolute]: !posStatic
		})}>
			{children}
		</SxSC>
	);

export default Tab;
