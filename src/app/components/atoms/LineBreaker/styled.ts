'use client';

import styled from 'styled-components';
import { StyledDimensions, styleProcessor } from '@/app/components/shared/utils';

export const LineBreakerDiv = styled.div.attrs<Partial<Omit<StyledDimensions, '$height' | '$width'>>>
(p => ({
	$top: p.$top || undefined,
	$bottom: p.$bottom || undefined,
	$left: p.$left || undefined,
	$right: p.$right || undefined,
}))`
	${styleProcessor('$top')};
	${styleProcessor('$bottom')};
	${styleProcessor('$left')};
	${styleProcessor('$right')};
`;

