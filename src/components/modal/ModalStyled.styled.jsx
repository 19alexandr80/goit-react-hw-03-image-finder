import styled from '@emotion/styled';
export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 40vw);
  max-height: calc(100vh - 24px);
`;
export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
