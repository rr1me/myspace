import s from './CryptoDataChecker.module.scss';
import Tab from '@/app/components/atoms/Tab/Tab';
import LineBreaker, { LineBreakerVariant } from '@/app/components/atoms/LineBreaker/LineBreaker';

const CryptoDataChecker = () => {
	return (
		<div className={s.data}>
			<div className={s.dataMovingParts}>

			</div>

			<div className={s.inner}>
				<div className={s.lining}>
					<Tab sx={{ width: 282, height: 1 }}/>
					<Tab sx={{ width: 308, height: 1, left: 292 }}/>

					<Tab sx={{ width: 1, height: '100%' }}/>
					<Tab sx={{ width: 1, height: '100%', left: 60 }}/>
					<Tab sx={{ width: 1, height: '100%', left: 310 }}/>

					<LineBreaker sx={{ top: -4 }}/>
					<LineBreaker sx={{ transformOrigin: '0 0', transform: 'rotate(90deg) scale(1, -1)', left: -4, top: 0 }}/>
					<LineBreaker sx={{ transformOrigin: '0 0', transform: 'rotate(90deg)', left: 65 }}/>

					<LineBreaker sx={{ transformOrigin: '0 0', transform: 'rotate(90deg) scale(1, -1)', left: -4, top: 60 }}
											 variant={LineBreakerVariant.startToEnd}/>

					<LineBreaker sx={{ transformOrigin: '0 0', transform: 'rotate(90deg) scale(1, -1)', left: 57.9, top: 20 }}
											 variant={LineBreakerVariant.startToEnd}/>

					<LineBreaker sx={{ left: 233, top: -4 }} variant={LineBreakerVariant.startToEnd}/>

					<div className={s.square}/>
				</div>

				cdcale
			</div>
		</div>
	);
};

export default CryptoDataChecker;
