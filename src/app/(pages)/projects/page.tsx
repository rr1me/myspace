import s from './page.module.scss';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import Project from '@/app/components/organisms/Project/Project';

import sketchService from './sketchService.png';

const Page = () => {
	return (
		<article>
			<SxSC $sx={{
				display: 'flex',
				gap: 30
			}}>
				{Array(3).fill(
					<Project image={sketchService.src}>
						Multiplayer mouse-drawing application for sketching.
						Includes draw history, several brushes, rooms with moderation tools and custom notification system.
						Network system built on WebRTC(PEER JS) and WebSocket(SOCKET IO) synergy.
						WebSocket serves room system for steady connection,
						when WebRTC provides faster connection for drawing service.
					</Project>
				)}
			</SxSC>
		</article>
	);
};

export default Page;
