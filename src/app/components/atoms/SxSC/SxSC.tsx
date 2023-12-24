'use client';

import styled, { CSSObject } from 'styled-components';
import { applyStyles } from '@/app/components/shared/scUtils';

const SxSC = styled.div<{$sx?: CSSObject}>`
  ${({ $sx }) => $sx && applyStyles($sx)}
`;

export default SxSC;
