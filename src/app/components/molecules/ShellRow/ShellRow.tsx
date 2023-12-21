import s from './ShellRow.module.scss';
import SelfWritingText from '@/app/components/atoms/SelfWritingText/SelfWritingText';

const ShellRow = ({ children, onAnimationEnd }: {children: string, onAnimationEnd?: () => void}) => {



	return (
		<div>
			<span className={s.nixPreCmd}>:~$</span>
			<SelfWritingText onAnimationEnd={onAnimationEnd}>
				{children}
			</SelfWritingText>
			<span className={s.nixTab} />
		</div>
	);
};

export default ShellRow;
