'use client';

import styled, { CSSProperties } from 'styled-components';
import { applyStyles } from '@/app/components/shared/scUtils';

const SxSC = styled.div<{$sx?: CSSProperties}>`
  ${({ $sx }) => $sx && applyStyles($sx)}
`;

export default SxSC;
