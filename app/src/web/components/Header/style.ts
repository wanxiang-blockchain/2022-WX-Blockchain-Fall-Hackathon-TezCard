import styled from '@emotion/styled';
export const TopHeader = styled.div`
  height: 80px;
  background: var(--headerBgColor);
  border-bottom: 1px solid var(--borderColor);
`;
export const Content = styled.div`
  width: 1280px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--borderColor);
`;
export const Slogan = styled.div`
  height: 80px;
  width: 150px;
  background-image: url(./public/logo.png);
  background-size: 100% 100%;
`;
export const RightBtn = styled.div`
  width: 272px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const walletButtonStyle = {
  background: '-webkit-linear-gradient(left, #3061E8, #3AD9E3)',
  borderRadius: 'var(--borderRadius)',
  textTransform: 'none',
};
