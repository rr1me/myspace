import s from './SkillBlock.module.scss';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import restyle from '@/app/components/shared/restyle';
import { colorVars } from '@/app/theme';
import { SkillData } from '@/app/components/organisms/SkillColumn/SkillColumn';

const Tab = restyle(TabToChange, {
	width: 1,
	position: 'relative'
});

const SkillBlock = ({ data, nestLevel = 0 }: {data: SkillData, nestLevel?: number}) => {
	return (
		<div className={s.skillBlock}>
			<h3 className={s.header}>{data.header}</h3>
			<div className={s.contentWrapper}>
				<Tab sx={{
					backgroundColor: nestLevel % 2 === 0 ? colorVars.c_main_first : colorVars.c_addition_second
				}}/>
				<div className={s.content}>
					<div className={s.inner}>
						{data.content.map((x, i) => {
							if (typeof x === 'object')
								return <SkillBlock data={x} key={i} nestLevel={nestLevel + 1}/>;
							return <div key={i}>{x}</div>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillBlock;
