'use client';

import s from './DataMovingParts.module.scss';
import DataPart from '@/app/components/molecules/DataPart/DataPart';
import DataTab from '@/app/components/atoms/DataTab/DataTab';
import { colorVars } from '@/app/theme';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const DataMovingParts = () => {
	const [partsMount, setPartsMount] = useState(false);

	const [springs] = useSpring(() => ({
		from: {
			y: '150%'
		},
		to: {
			y: '0'
		},
		delay: 3000,
		onRest: () => {
			setPartsMount(true);
		}
	}));

	return (
		<SxSC $sx={{ overflow: partsMount ? 'unset' : 'hidden' }} className={s.dataMovingParts}>
			<animated.div style={springs} className={s.anim}>
				<DataTab sx={{ backgroundColor: colorVars.c_addition_second_80p, width: 1 }}/>

				{partsMount &&
					<div className={s.inner}>
						<Marquee horizontal sx={{ height: '100%' }} duration={8} noOverflow>
							<div className={s.movingBlock}>
								<DataPart/>
								<DataPart i={1}/>
								<DataPart i={2}/>
							</div>
						</Marquee>
					</div>
				}
			</animated.div>
		</SxSC>
	);
};

export default DataMovingParts;
