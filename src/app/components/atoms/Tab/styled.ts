'use client';

import styled from 'styled-components';
import { StyledDimensions, styleProcessor } from '@/app/components/shared/utils';

export const StyledTab = styled.div.attrs<Partial<StyledDimensions>>
(p => ({
	$top: p.$top || undefined,
	$bottom: p.$bottom || undefined,
	$left: p.$left || undefined,
	$right: p.$right || undefined,
	$width: p.$width || undefined,
	$height: p.$height || undefined
}))`
  ${styleProcessor('$top')};
  ${styleProcessor('$bottom')};
  ${styleProcessor('$left')};
  ${styleProcessor('$right')};
  ${styleProcessor('$height')};
  ${styleProcessor('$width')};
`;
