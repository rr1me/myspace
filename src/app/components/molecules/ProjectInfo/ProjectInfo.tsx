import s from './ProjectInfo.module.scss';
import Button from '@/app/components/atoms/Button/Button';
import { SkillData } from '@/app/components/organisms/SkillColumn/SkillColumn';
import { applyProps } from '@/app/components/shared/restyle';
import SkillBlockToChange from '@/app/components/molecules/SkillBlock/SkillBlock';
import { colorVars } from '@/app/theme';

const SkillBlock = applyProps(SkillBlockToChange, {
	classNames: {
		// header:
	},
	// headerSx: { fontSize: 16 },
	// innerSx: { fontSize: 14, gap: 4 },
	// wrapperSx: { marginTop: 0 },
	nonAdaptive: true,
	rotateTab: true,
	specifyTabColor: colorVars.g_separator_oneway_vertical,
});

const ProjectInfo = ({ backend, frontend, desc, github }:
	{backend?: string[], frontend?: string[],
		desc: string, github: string}) => {
	return (
		<div className={s.info}>
			<div className={s.techs}>
				{backend &&
						<SkillBlock data={{
							header: 'backend', content: backend,
						}} />
				}
				{frontend &&
						<SkillBlock data={{
							header: 'frontend', content: frontend,
						}} />
				}
			</div>

			<div className={s.gradSep} />

			<div className={s.bottom}>
				<p className={s.desc}>
					{desc}
				</p>
				<div className={s.btnWrapper}>
					<Button anotherColorVariation link={github}>
						Github
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectInfo;
