'use client';

import s from './Menu.module.scss';
import { ReactNode } from 'react';
import NavigationMenu from '@/app/components/organisms/NavigationMenu/NavigationMenu';
import { animated, easings, useChain, useSpring, useSpringRef } from '@react-spring/web';
import clsx from 'clsx';
import { useAnimationStore } from '@/app/components/shared/syncStore';
import MenuBorder from '@/app/components/molecules/MenuBorder/MenuBorder';

const config = {
	easing: easings.easeInOutQuint,
	duration: 1500
};

const Menu = ({ children, isMobile }: {children: ReactNode, isMobile: boolean}) => {
	const ad = isMobile ? 0 : 5;
	const preloaderVisibility = useAnimationStore(s => s.preloaderVisibility);

	const springsWidthRef = useSpringRef();
	const springsWidth = useSpring({
		ref: springsWidthRef,
		from: { width: '0' },
		to: { width: '100%' },
		config: config
	});

	const springsHeightRef = useSpringRef();
	const springsHeight = useSpring({
		ref: springsHeightRef,
		from: { height: '0' },
		to: { height: '100%' },
		config
	});

	useChain(preloaderVisibility ? [] : [springsWidthRef, springsHeightRef], [ad, ad + 1.1]);

	return (
		<div className={clsx({
			[s.global]: true,
			[s.invisible]: preloaderVisibility
		})}>
			<animated.div style={{ ...springsWidth, ...springsHeight }} className={s.menuWrapper}>
				<div className={s.hardMenu}>
					<MenuBorder/>

					<div className={s.inner}>
						<NavigationMenu />
						<div className={s.content}>
							{children}
						</div>
					</div>
				</div>
			</animated.div>
		</div>
	)
	;
};

export default Menu;
