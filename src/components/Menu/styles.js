import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  min-height: 80px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  color: white;
  background-color: #101111;
`

export const RightDivision = styled.div`
  flex: 2;
  margin: 24px;
  text-align: right;
`

export const LeftDivision = styled.div`
  flex: 2;
  text-align: left;
`

export const Item = styled.div`
  flex: 1;
  margin: 24px;
`;

export const Logo = styled.img`
  height: 64px;
  width: auto;
  align-content: left;
  padding: 5px;
`;