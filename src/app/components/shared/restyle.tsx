import { FunctionComponent } from 'react';
import { CSSObject } from 'styled-components';
import { JSX } from 'react/jsx-runtime';
import IntrinsicAttributes = JSX.IntrinsicAttributes;

type innerFC = FunctionComponent<{ sx: CSSObject }>;
const restyle = (Component: innerFC, oldSx: CSSObject) =>
	// eslint-disable-next-line react/display-name
	({ sx }:{ sx?: CSSObject }) => <Component sx={{ ...oldSx, ...sx }}/>;

export default restyle;

/**
 * Be careful using not optional props here.
 */
export const applyProps = <V, T = object>(Component: FunctionComponent<T | V>, props: Partial<T>) =>
	// eslint-disable-next-line react/display-name
	(additionalProps: V) => {
		const combinedProps = { ...props, ...additionalProps } as IntrinsicAttributes & T & V;
		return <Component {...combinedProps} />;
	};
