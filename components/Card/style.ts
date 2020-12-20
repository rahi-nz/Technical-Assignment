import styled from "styled-components";

export const Container = styled.div`
  width: 340px;
  padding: 20px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
export const Title = styled.div`
  text-align: left;
  font-size: 18px;
  color: #7a7c8c;
`;
export const Description = styled.p`
  text-align: left;
  font-size: 16px;
  color: #d2d2d8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Name = styled.p`
  background-color: ${(props) => props.theme.bgColor};
  width: 30px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const Date = styled.div`
  color: ${(props) => props.theme.color};
  font-size: 14px;
`;
