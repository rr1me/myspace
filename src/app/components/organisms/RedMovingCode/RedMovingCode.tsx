'use client';

import s from './RedMovingCode.module.scss';
import useRandomCode from '@/app/components/organisms/RedMovingCode/useRandomCode';
import Marquee from '@/app/components/molecules/Marquee/Marquee';
import clsx from 'clsx';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import SquareBound from '@/app/components/atoms/SquareBound/SquareBound';

const getCode = useRandomCode();
const codeArray = Array(6).fill(0).map(() => getCode());

const RedMovingCode = ({ isMobile }: {isMobile: boolean}) => {  //2300 width?
	return (
		<section className={clsx({
			[s.movingCode]: true,
			[s.column]: isMobile,
		})}>
			{isMobile ?
				<>
					<Triple />
					<div>
						<Triple />
						<GreenArray/>
					</div>
					<div>
						<Triple />
						<GreenArray/>
						<GreenArray/>
					</div>

					<div className={s.squares}>
						{Array(48).fill(0).map((_, i) => (
							<div className={s.square} key={i}>
								<SquareBound/>
							</div>
						))}
					</div>
				</>
				:
				codeArray.map((x, i) =>
					<Marquee key={i} delay={2.5}>{x.code}</Marquee>,
				)
			}
		</section>
	);
};

export default RedMovingCode;

const Triple = () =>
	<div className={s.triple}>
		{Array(3).fill(0)
			.map((_, i) => <div className={s.mobTab} key={i}/>)}
	</div>;

const Tab = ({ w }: {w: number}) =>
	<SxSC $sx={{
		width: w
	}} className={s.greenTab}/>;

const GreenArray = () =>
	<div className={s.greenArray}>
		{Array(6).fill(0)
			.map((_, i) => <GreenDecoration key={i} />)}
	</div>;

const GreenDecoration = () => (
	<div className={s.greenDecoration}>
		<Tab w={20}/>
		<Tab w={20}/>
		<Tab w={80}/>
		<Tab w={20}/>
		<Tab w={20}/>
		<Tab w={30}/>
		<Tab w={100}/>
		<Tab w={130}/>
		<Tab w={10}/>
		<Tab w={10}/>
	</div>
);
