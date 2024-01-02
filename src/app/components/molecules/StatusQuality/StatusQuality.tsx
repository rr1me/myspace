import s from './StatusQuality.module.scss';
import clsx from 'clsx';

const StatusQuality = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.quality}>
				<Box strings={[['HD', 'LQ']]} short />
				<Box strings={[['45', '32'], ['35', '35'], ['36', 'XX'], ['98', '11'], ['4', '1']]} />
			</div>
		</div>
	);
};

export default StatusQuality;

const Box = ({ short, strings }: { short?: boolean, strings: string[][] }) =>
	(
		<div className={clsx({
			[s.box]: true,
			...(short ?
				{
					[s.short]: true
				}
				:
				{
					[s.long]: true
				})
		})}>
			{strings.map((x, i) => (
				<div className={s.innerBox} key={i}>
					<p>{x[0]}</p>
					<p>{x[1]}</p>
				</div>
			))}
		</div>
	);
