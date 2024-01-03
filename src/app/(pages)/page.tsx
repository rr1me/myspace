import s from './page.module.scss';
import Menu from '@/app/components/templates/Menu/Menu';
import LiningWrapper from '@/app/components/atoms/LiningWrapper/LiningWrapper';
import restyle from '@/app/components/shared/restyle';
import TabToChange from '@/app/components/atoms/Tab/Tab';
import { colorVars } from '@/app/theme';
import Button from '@/app/components/atoms/Button/Button';

import Link from 'next/link';
import { createClassName } from '@/app/components/shared/utils';

const Tab = restyle(TabToChange, {
	background: colorVars.g_separator_oneway_main,
	height: 1,
	width: '50%'
});
const TabVert = restyle(TabToChange, {
	background: colorVars.g_separator_oneway_main_vertical,
	width: 1,
	height: '100%'
});

const Page = () =>
	(
		<>
			{/*<Preloader/>*/}
			<Menu>
				<div className={s.intro}>

					<div className={s.who}>
						<LiningWrapper>
							<Tab sx={{ bottom: 0 }}/>
							<TabVert sx={{}}/>
							<Tab sx={{
								right: 0,
								rotate: '180deg'
							}}/>
							<TabVert sx={{
								right: 0,
								rotate: '180deg'
							}}/>
						</LiningWrapper>

						<article className={s.innerWho}>
							<h1 className={s.me}>
								Hello there<br />
								I&apos;m Rime<br />
								Fullstack Developer
							</h1>
							<h2 className={s.desc}>
								I&apos;m in love with designing, modelling <br />
								and programming <br />
								I like to solve difficult problems, <br />
								build deep algorithms and create stuff
							</h2>
						</article>
					</div>

					<div className={s.links}>
						<Link href='https://t.me/rr1me'
							target='_blank' className={createClassName(s.link, s.telegram)}/>
						<Link href='https://github.com/rr1me'
							target='_blank' className={createClassName(s.link, s.github)}/>
						<Link href='https://linkedin/'
							target='_blank' className={createClassName(s.link, s.linkedin)}/>
					</div>

					<Button className={s.button}>
						DOWNLOAD CV
					</Button>
				</div>
			</Menu>
		</>
	);

export default Page;
