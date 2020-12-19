import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  background: #fff;
  box-shadow: 0px 3px 14px -2px rgb(206 206 206);
  position: fixed;
  width: 100vw;
`;

export const Content = styled.section`
  display: flex;
  height: 100%;
  overflow: auto;
  background: #f7f8f9;
  padding: 120px 100px;
  overflow-x: scroll;
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
  height: 30px;
  margin: 0 30px;
`;

export const Board = styled.div`
  color: #2b2e47;
  width: 33%;
  min-width: 360px;
`;

export const Title = styled.div`
  text-align: left;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`;
