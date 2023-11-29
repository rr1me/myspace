'use client';

import styled, { CSSObject } from 'styled-components';
import { applyStyles } from '@/app/components/shared/utils';

const SxStyledComponent = styled.div<{$sx: CSSObject}>`
  ${({ $sx }) => $sx && applyStyles($sx)}
`;

export default SxStyledComponent;
