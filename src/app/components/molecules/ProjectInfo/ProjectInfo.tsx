import s from './ProjectInfo.module.scss';
import Button, { ButtonClrVariation } from '@/app/components/atoms/Button/Button';
import { applyProps } from '@/app/components/shared/restyle';
import SkillBlockToChange from '@/app/components/molecules/SkillBlock/SkillBlock';
import { colorVars } from '@/app/theme';
import { ReactNode } from 'react';

const SkillBlock = applyProps(SkillBlockToChange, {
	classNames: {
		block: s.sbBlock,
		header: s.sbHeader,
		inner: s.sbInner,
		wrapper: s.sbWrapper
	},
	nonAdaptive: true,
	rotateTab: true,
	specifyTabColor: colorVars.g_separator_oneway_vertical,
});

const ProjectInfo = ({ backend, frontend, desc, github }:
	{backend?: string[], frontend?: string[],
		desc: ReactNode, github: string}) => {
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
					<Button colorVariation={ButtonClrVariation.alternative} link={github} blank>
						Github
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectInfo;
