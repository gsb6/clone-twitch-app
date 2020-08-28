import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

const Heading: React.FC = ({ children }) => {
  return (
    <S.Container>
      <S.HeadingText>{children}</S.HeadingText>
    </S.Container>
  );
};

export default Heading;
