import styled from 'styled-components';

const SidebarLeft = styled.div`
  position: fixed;
  top: 80px;
  bottom: 0;
  box-sizing: border-box;
  width: 240px !important;
  padding: 40px 40px 60px 40px;
  border-right: 1px #e5e5e5 solid;
  overflow: auto;
`;

const Main = styled.div`
  padding-left: 40px;
`;

const Styled = {
  SidebarLeft,
  Main,
};

export default Styled;