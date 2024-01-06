import s from './page.module.scss';
import SkillColumn from '@/app/components/organisms/SkillColumn/SkillColumn';
import { colorVars, mohave } from '@/app/theme';
import { createClassName } from '@/app/components/shared/utils';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import restyle from '@/app/components/shared/restyle';

const Tab = restyle(TabToChange, {
	minWidth: 1.2,
	backgroundColor: colorVars.c_addition_second_50p,
	position: 'static'
});

const Page = () => {
	return (
		<article className={createClassName(mohave.className, s.skills)}>
			<SkillColumn header='backend'>
				{[
					{ header: 'c#',
						content: [
							{ header: 'asp .net core',
								content: [
									'entity framework',
									'linq',
									'swashbuckle'
								]
							}
						]
					},
					{ header: 'node js',
						content: [
							'nest',
							'express',
							{ header: 'orms',
								content: [
									'typeorm',
									'prismaorm'
								]
							}
						]
					}
				]}
			</SkillColumn>
			<Tab/>
			<SkillColumn header='frontend'>
				{[
					{ header: 'javascript',
						content: [
							'typescript',
							{ header: 'react',
								content: [
									'next',
									'hooks',
									'router',
									'context'
								]
							},
							{ header: 'redux',
								content: [
									'redux toolkit',
									'redux thunk',
									'rtk query'
								]
							},
							{ header: 'layout design',
								content: [
									'html5',
									'css3 | scss | sass',
									'adaptive',
									'semantics'
								]
							},
							{ header: 'building',
								content: [
									'webpack',
									'vite'
								]
							},
							'canvas | webgl'
						]
					}
				]}
			</SkillColumn>
			<Tab/>
			<SkillColumn header='miscellaneous'>
				{[
					{ header: 'databases',
						content: [
							'postgresql',
							'mysql',
							'redis',
							'acid',
							'transact sql'
						]
					},
					{ header: 'protocols',
						content: [
							'http | https',
							'tcp | udp',
							'webrtc',
							'smtp',
							{ header: 'websocket', content: ['raw', 'socket.io'] }
						]
					},
					{ header: 'tools',
						content: [
							'docker',
							'figma',
							'git',
							'postman',
							'blender',
							'pureref',
							'photoshop'
						]
					},
					{ header: 'systems',
						content: [
							'linux: ubuntu',
							'windows'
						]
					},
					{ header: 'network',
						content: [
							'nginx',
							'apache'
						]
					},
					{ header: 'methodology',
						content: [
							'oop',
							'fp',
							'solid',
							'design patterns',
							{ header: 'principles',
								content: [
									'kiss',
									'dry',
									'yagni',
									'bduf'
								]
							}
						]
					}
				]}
			</SkillColumn>
		</article>
	);
};

export default Page;
