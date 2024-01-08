import s from './page.module.scss';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const Page = () => {
	return (
		<article>
			<SxSC $sx={{
				display: 'flex',
				gap: 30
			}}>
				{Array(3).fill(
					<SxSC $sx={{
						width: 300,
						height: 500,
						backgroundColor: 'wheat'
					}}/>
				)}
			</SxSC>
		</article>
	);
};

export default Page;
