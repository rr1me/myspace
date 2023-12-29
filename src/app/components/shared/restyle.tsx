import { FunctionComponent } from 'react';
import { CSSObject } from 'styled-components';

type innerFC = FunctionComponent<{ sx: CSSObject }>;
const restyle = (Component: innerFC, oldSx: CSSObject) =>
	// eslint-disable-next-line react/display-name
	({ sx }:{ sx: CSSObject }) => <Component sx={{ ...oldSx, ...sx }}/>;

export default restyle;
