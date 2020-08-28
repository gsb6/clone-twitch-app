import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  margin-bottom: 25px;
  padding-right: 14px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: ${colors.tag};
`;
export const Column = styled.View`
  padding-left: 10px;
`;
export const Username = styled.Text`
  font-family: roboto_500;
  font-size: 16px;
  color: ${colors.black};
`;
export const Info = styled.Text`
  margin-top: 1px;
  font-size: 13px;
  color: ${colors.gray};
`;

export const RightContent = styled.View``;
export const WhiteCircle = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background: ${colors.black};
  opacity: 0.85;
`;
