import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import CategoryList from '../../components/CategoryList';
import ChannelList from '../../components/ChannelList';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import StreamList from '../../components/StreamList';

import * as S from './styles';

type Item = {
  key: string;
  render: () => JSX.Element;
  isSection?: boolean;
};

const Following: React.FC = () => {
  const { data, indexes = [] } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <S.SectionTitle>Followed Categories</S.SectionTitle>,
        isSection: true,
      },
      {
        key: 'C1',
        render: () => <CategoryList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <S.SectionTitle>Live Channels</S.SectionTitle>,
        isSection: true,
      },
      {
        key: 'C2',
        render: () => <StreamList />,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <S.SectionTitle>Continue Watching</S.SectionTitle>,
        isSection: true,
      },
      {
        key: 'C3',
        render: () => <ChannelList />,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <S.SectionTitle>Offline Channels</S.SectionTitle>,
        isSection: true,
      },
      {
        key: 'C4',
        render: () => <View />,
      },
    ];

    const indexes = items.map((item, index) => {
      if (item.isSection) return index;
    });

    return {
      data: items,
      indexes,
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.Content>
          <FlatList<Item>
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => item.render()}
            stickyHeaderIndices={indexes}
          />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default Following;
