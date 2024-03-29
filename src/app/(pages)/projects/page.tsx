'use client';

import s from './page.module.scss';
import Project from '@/app/components/organisms/Project/Project';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import sketchService from './sketchService.png';
import lifeTracker from './lifeTracker.png';
import mySpace from './mySpace.png';
import { useShowPageAnimation } from '@/app/components/shared/hooks';

const Page = () => {
	const [pageAnimation, onAnimationEnd] = useShowPageAnimation('projects');

	return (
		<article className={s.projects}>
			<OverlayScrollbarsComponent className={s.scroll}>
				<div className={s.wrapper}>
					<Project pageAnimation={pageAnimation} header='Sketch service'
						image={sketchService.src} github='https://github.com/rr1me/sketch-service'
						backend={[
							'node js',
							'nest js',
							'peer js',
							'socket io',
						]}
						frontend={[
							'typescript',
							'react',
							'redux toolkit',
							'socket io',
							'peer js',
							'simplebar',
							'react-colorful',
						]}>
						Multiplayer mouse-drawing application for sketching.
						Includes draw history, several brushes, rooms with moderation tools and custom notification system.
						Network system built on WebRTC(PEER JS) and WebSocket(SOCKET IO) synergy.
						WebSocket serves room system for steady connection,
						when WebRTC provides faster connection for drawing service.
					</Project>
					<Project pageAnimation={pageAnimation} header='LifeTracker'
						image={lifeTracker.src} github='https://github.com/rr1me/lifetracker'
						backend={[
							'asp .net core',
							'entity framework',
							'postgresql',
							'redis',
						]}
						frontend={[
							'typescript',
							'react',
							'module sass',
							'redux toolkit',
							'rtk query'
						]}>
						Scheduler application for tracking and statistics of time spent.
						Includes sequential animations and deep authorization, based on Refresh-Access tokens that was built on top
						of two databases:
						PostgreSQL as true and Redis for frequent requests. Auth system based on roles and has email confirmation
						through SMTP,
						restoring access algorithm and token updating for infinite access.
					</Project>
					<Project pageAnimation={pageAnimation} header='MySpace'
						image={mySpace.src} github='https://github.com/rr1me/myspace'
						onAnimationEnd={onAnimationEnd}
						frontend={[
							'typescript',
							'next',
							'react',
							'react-spring',
							'styled components',
							'overlayscrollbars',
							'module sass',
						]}>
						My personal presentation space. <br/>All elements are done in Sci-Fi and Cyberpunk style using
						React-Spring, Keyframes, Transition and Styled Components tech synergy. That means no GIFs/Videos are used — everything works on HTML, CSS and JS.
						Despite all this complex animations, UI fully adapted for mobile devices.
					</Project>
				</div>
			</OverlayScrollbarsComponent>
		</article>
	);
};

export default Page;
