import s from './MenuBorder.module.scss';
import { colorVars } from '@/app/theme';
import restyle from '@/app/components/shared/restyle';
import TabToChange from '@/app/components/atoms/Tab/Tab';

const Tab = restyle(TabToChange, {
	backgroundColor: colorVars.c_main_second,
	height: 2,
	width: 'calc(100% - 16px)'
});

const MenuBorder = () => {
	return (
		<div className={s.border}>
			<svg height='100%' width='100%' fill='none' preserveAspectRatio="none">
				<svg width='15' fill='none' x='calc(100% - 18px)' className={s.fix} preserveAspectRatio="none">
					<svg width='15' height='212' fill='none' preserveAspectRatio="none">
						<path d='M3 212V209L13.5 198.5V11.5L3 1H0.5'
							stroke={colorVars.c_main_second} strokeWidth='2' />
					</svg>
					{/*<rect height='calc(100% - 212px)' x='2' y='212' width='2'*/}
					{/*	fill={colorVars.c_main_second} />*/}
				</svg>
				<rect x='0' y='0' width='2' height='100%'
					fill={colorVars.c_main_second} />
			</svg>
			<Tab sx={{
				right: 14,
				bottom: 0,
				width: 2,
				height: 'calc(100% - 212px)'
			}} />
			<Tab sx={{ top: 0 }} />
			<Tab sx={{ bottom: 0 }} />

			<div className={s.rightLineBreaker} />
			<div className={s.rlbTextWrapper}>
				<p className={s.rlbText}>CONNECTION 221-09-43</p>
				<p className={s.rlbText}>CONNECTED VIA PROTOCOL 20X-044-423</p>
			</div>

			<div className={s.lineBreaker} />
			<div className={s.lineBreakerLight} />
			<div className={s.bigBreaker}>
				<p className={s.bbText}>
					ICE INTEGRITY 100.1%&emsp;&emsp;ROUTE PROTECTED
				</p>
			</div>
		</div>
	);
};

export default MenuBorder;
