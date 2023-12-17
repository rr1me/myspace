import s from './CryptoDataBlock.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

export enum CryptoDataBlockType {
	Filled,
	Unfilled
}

const CryptoDataBlock = ({ type, children }:
	{type: CryptoDataBlockType, children: ReactNode}) => {
	const combined = clsx({
		[s.dataBlock]: true,
		[s.filled]: type === CryptoDataBlockType.Filled,
		[s.unfilled]: type === CryptoDataBlockType.Unfilled,
		...(type === CryptoDataBlockType.Filled ?
			{
				[s.filled]: true
			}
			:
			{
				[s.unfilled]: true
			})
	});

	return (
		<div className={combined}>
			{children}
		</div>
	);
};

export default CryptoDataBlock;
