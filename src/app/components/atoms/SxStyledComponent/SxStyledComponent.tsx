'use client';

import styled, { CSSProperties } from 'styled-components';
import { applyStyles } from '@/app/components/shared/utils';

const SxStyledComponent = styled.div<{$sx?: CSSProperties}>`
  ${({ $sx }) => $sx && applyStyles($sx)}
`;

export default SxStyledComponent;
