import { styled } from '@linaria/react';

export const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 99, 71, 0.5);
  color: white;
  border-radius: 20%;
  transition: 0.3s;
  border: 1px solid grey;
  border-radius: 20%;
  border: 1px solid grey;
`;