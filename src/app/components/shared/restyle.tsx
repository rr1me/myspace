import { FunctionComponent } from 'react';
import { CSSProperties } from 'styled-components';

type innerFC = FunctionComponent<{ sx: CSSProperties }>;
const restyle = (Component: innerFC, oldSx: CSSProperties) =>
	// eslint-disable-next-line react/display-name
	({ sx }:{ sx: CSSProperties }) => <Component sx={{ ...oldSx, ...sx }}/>;

export default restyle;
