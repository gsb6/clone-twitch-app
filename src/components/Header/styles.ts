import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 14px 14px 0 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.TouchableOpacity`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: ${colors.tag};
`;

export const Status = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 2px solid ${colors.primary};
  background: ${colors.green};
`;
export const RightSide = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;
