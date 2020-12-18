import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.section`
  display: flex;
  flex-shrink: 0;
  max-width: 100vw;
  justify-content: space-between;
  padding: 20px 40px;
  background: #fff;
`;

export const Content = styled.section`
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  overflow: auto;
  background: #f7f8f9;
  padding: 10px 30px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  p {
    margin-left: 10px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  border-left: 3px solid #f5f5f5;
  height: 40px;
  margin: 0 30px;
`;

export const Board = styled.div`
  color: #2b2e47;
`;
