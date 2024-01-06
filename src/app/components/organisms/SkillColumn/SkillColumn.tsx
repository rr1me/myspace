import s from './SkillColumn.module.scss';
import Tab from '@/app/components/atoms/Tab/Tab';
import SkillBlock from '@/app/components/molecules/SkillBlock/SkillBlock';
import clsx from 'clsx';

export type SkillData = {
	header: string;
	content: (SkillData | string)[]
}

const SkillColumn = ({ header, children }: {header: string, children: SkillData[]}) => {
	return (
		<section className={s.skill}>
			<h2>{header}</h2>
			<Tab sx={{
				height: 1, width: '100%',
				alignSelf: 'center'
			}} posStatic/>
			<div className={clsx({
				[s.inner]: true,
				[s.misc]: header === 'miscellaneous'
			})}>
				{children.map((x, i) => (
					<SkillBlock key={i} data={x}/>
				))}
			</div>
		</section>
	);
};

export default SkillColumn;
