import React from 'react';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';

import * as S from './styles';
import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Avatar>
        <S.Status />
      </S.Avatar>

      <S.RightSide>
        <S.Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </S.Button>

        <S.Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </S.Button>

        <S.Button>
          <Feather name="search" size={26} color={colors.black} />
        </S.Button>
      </S.RightSide>
    </S.Container>
  );
};

export default Header;
