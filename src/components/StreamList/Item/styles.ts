import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  margin: 0 24px 24px 0;
  flex-direction: row;
`;

export const Thumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const RightContent = styled.View`
  flex: 1;
  margin-left: 11px;
`;

export const Row = styled.View`
  height: 66px;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${colors.tag};
`;

export const Username = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin-left: 5px;
  font-family: roboto_700;
  color: ${colors.black};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${colors.black};
`;

export const Category = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: roboto_500;
  color: ${colors.gray};
`;

export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const Tag = styled.View`
  margin-right: 5px;
  padding: 2px 8px;
  border-radius: 10px;
  background: ${colors.tag};
`;
export const TagLabel = styled.Text`
  font-family: roboto_500;
  font-size: 13px;
  color: ${colors.black};
`;
