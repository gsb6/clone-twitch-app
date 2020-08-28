import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
  background: ${colors.primary};
`;

export const Container = styled.View`
  padding-left: 14px;
`;

export const Content = styled.View``;

export const SectionTitle = styled.Text`
  padding: 9px 0;
  background: ${colors.primary};
  font-family: roboto_700;
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.gray};
`;
