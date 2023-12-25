import s from './Background.module.scss';
import RedMovingCode from '@/app/components/organisms/RedMovingCode/RedMovingCode';
import ExtendingLine from '@/app/components/atoms/ExtendingLine/ExtendingLine';
import { ExtendingLineVariant } from '@/app/components/atoms/ExtendingLine/utils';
import TopTextLine from '@/app/components/molecules/TopTextLine/TopTextLine';
import BackgroundBottom from '@/app/components/organisms/BackgroundBottom/BackgroundBottom';
import RedCodeTopHelmets from '@/app/components/organisms/RedCodeTopBorders/RedCodeTopHelmets';

const Background = () => //fixme horizontal marquee animation(start but)
	(
		<div className={s.background}>
			<div className={s.justToSeeIt} />
			<RedCodeTopHelmets/>

			<TopTextLine/>

			<RedMovingCode />

			<ExtendingLine variant={ExtendingLineVariant.centered} color='g_separator' />

			<BackgroundBottom/>
		</div>
	);

export default Background;
