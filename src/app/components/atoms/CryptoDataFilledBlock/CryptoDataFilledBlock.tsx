import s from './CryptoDataFilledBlock.module.scss';
import { dataBlocksStates } from '@/app/components/shared/utils';
import SxSC from '@/app/components/atoms/SxSC/SxSC';

const CryptoDataFilledBlock = ({ index }: {index: number}) => {
	const filledBlockState = dataBlocksStates[index];

	return (
		<SxSC $sx={{
			color: filledBlockState.clr
		}} className={s.blockFilled}>
			{filledBlockState.str}
		</SxSC>
	);
};

export default CryptoDataFilledBlock;
