import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBtnWrapper = styled.div`
margin-top: 30px;
text-align: center;
`

export const ModalContent = styled.div`
  background-color: #fff;
  width: 400px;
  min-height: 170px;
  position: relative;
  padding: 40px;
  overflow-y: auto;
  border-radius: 24px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
