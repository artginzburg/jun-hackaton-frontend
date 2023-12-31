import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { media } from './utils/media-queries';

const transitionDurationDefault = '200ms';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 6rem; */
  min-height: 100vh;
`;

export const Heading1 = styled.h1`
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #ff6347;
  font-size: calc(1.5rem + 6 * (100vw - 320px) / 880);
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;

  ::before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  ::after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }

  ::before,
  ::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }

  ${media.mobileStyle} {
    padding: 8rem 0 6rem;

    ::before {
      transform: none;
      height: 300px;
    }
  }
`;
