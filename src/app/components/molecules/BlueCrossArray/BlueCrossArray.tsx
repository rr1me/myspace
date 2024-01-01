import s from './BlueCrossArray.module.scss';
import BlueCross from '@/app/components/atoms/BlueCross/BlueCross';
import clsx from 'clsx';

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
		[additionalClassName!]: !!additionalClassName
	});

	return (
		<div className={className}>
			{Array(quantity).fill(0).map((_x, i) => <BlueCross delay={delay} key={i}/>)}
		</div>
	);
};

export default BlueCrossArray;
