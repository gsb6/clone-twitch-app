import styled from 'styled-components/native';

import colors from '../../../styles/colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-right: 10px;
`;

export const Image = styled.Image`
  width: 98px;
  height: 130px;
`;

export const Name = styled.Text`
  max-width: 98px;
  margin-top: 5px;
  font-family: roboto_700;
  font-size: 13.5px;
  color: ${colors.black};
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const RedCircle = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background: ${colors.red};
`;
export const Watchers = styled.Text`
  margin-left: 4px;
  font-family: roboto_500;
  color: ${colors.gray};
`;
