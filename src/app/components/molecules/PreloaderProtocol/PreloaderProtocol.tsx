import s from './PreloaderProtocol.module.scss';
import SxSC from '@/app/components/atoms/SxSC/SxSC';
import { CSSObject } from 'styled-components';

const Tab = ({ width }: {width: CSSObject['width']}) => <SxSC $sx={{ width }} className={s.tab}/>;

const PreloaderProtocol = () => {
	return (
		<>
			<span className={s.protocolWrapper}>
				<div className={s.protocol}>
					<div className={s.protocolPreview}>
						<ProtocolElement/>
						<ProtocolElement column={4}/>
						<ProtocolElement column={2}/>
						<ProtocolElement row={3} column={4}/>
						<ProtocolElement row={4}/>
						<ProtocolElement row={4} column={3}/>
						<ProtocolElement row={5} column={2}/>
						<ProtocolElement row={5} column={4}/>
						<ProtocolElement row={6}/>
						<ProtocolElement row={7} column={3}/>
						<ProtocolElement row={8}/>
						<ProtocolElement row={8} column={4}/>
					</div>
					<p>PROTOCOL</p>
					<p>6520-A44</p>
				</div>
				<p className={s.warning}>
				only cc35 and dhsf -5
				certified tech officers
				may access, operate or disable this dev&apos;
				</p>
			</span>
			<span>
				<div className={s.signPreviewWrapper}>
					<div className={s.signPreview}/>
					<div className={s.tabs}>
						<Tab width={3}/>
						<Tab width={1}/>
						<Tab width={1}/>
						<Tab width={1}/>
					</div>
				</div>
				<p className={s.signDigits}>485151 590787090001&nbsp;&nbsp;20JG8W4&nbsp;&nbsp;NC</p>
			</span>
		</>
	);
};

export default PreloaderProtocol;

const ProtocolElement = ({ row, column }: {row?: number, column?: number}) =>
	<SxSC $sx={{
		gridRowStart: row,
		gridColumnStart: column
	}} className={s.protocolElement}/>;
