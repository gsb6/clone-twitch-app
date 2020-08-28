import React from 'react';

import * as S from './styles';

const Item: React.FC = () => {
  return (
    <S.Container>
      <S.LeftContent>
        <S.Avatar />
        <S.Column>
          <S.Username>gsb6</S.Username>
          <S.Info>36 new videos</S.Info>
        </S.Column>
      </S.LeftContent>
      <S.RightContent>
        <S.WhiteCircle />
      </S.RightContent>
    </S.Container>
  );
};

export default Item;
