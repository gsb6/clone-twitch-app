import React from 'react';
import { Text } from 'react-native';

import * as S from './styles';

import ThumbnailImage from '../../../images/stream_thumbnail.jpg';

const Item: React.FC = () => {
  return (
    <S.Container>
      <S.Thumbnail source={ThumbnailImage} />
      <S.RightContent>
        <S.Row>
          <S.Header>
            <S.Avatar />
            <S.Username>rodz_oficial</S.Username>
          </S.Header>

          <S.Description>
            Front-end com Next.js, Chakra UI e GraphQL
          </S.Description>

          <S.Category>Science & Technology</S.Category>
        </S.Row>
        <S.TagRow>
          <S.Tag>
            <S.TagLabel>Portuguese</S.TagLabel>
          </S.Tag>
          <S.Tag>
            <S.TagLabel>Web Development</S.TagLabel>
          </S.Tag>
        </S.TagRow>
      </S.RightContent>
    </S.Container>
  );
};

export default Item;
