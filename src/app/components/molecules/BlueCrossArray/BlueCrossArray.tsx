import s from './BlueCrossArray.module.scss';
import BlueCross from '@/app/components/atoms/BlueCross/BlueCross';
import clsx from 'clsx';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const BlueCrossArray = ({ quantity, additionalClassName, customClassName, delay = 2000 }:
	{quantity: number, additionalClassName?: string, customClassName?: string, delay?: number}) => {
	const className = clsx({
		...(customClassName ?
			{
				[customClassName]: true
			}
			:
			{
				[s.crosses]: true
			}
		),
		[additionalClassName!]: !!additionalClassName,
		[s.animation]: true,
	});

	return (
		<SxSC $sx={{
			animationDelay: delay + 'ms'
		}} className={className}>
			{Array(quantity).fill(0).map((_x, i) => <BlueCross nonAnimated key={i}/>)}
		</SxSC>
	);
};

export default BlueCrossArray;
