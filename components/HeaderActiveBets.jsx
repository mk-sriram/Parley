import React from 'react';
import { Appbar, IconButton, Title } from 'react-native-paper';

const Header = ({ onSearchPress, onFilterPress, onLeftIconPress, onRightIconPress }) => {
  return (
    <Appbar.Header style={{ backgroundColor: '#f4f4f4' }}>
      {onLeftIconPress && ( // Only render left icon if onPress function provided
        <Appbar.Action icon="arrow-left" onPress={onLeftIconPress} />
      )}
      <Appbar.Content title={<Title style={{ fontWeight: 'bold' }}>Active Bets</Title>} />
      <Appbar.Action icon="magnify" onPress={onSearchPress} />
      <Appbar.Action icon="tune" onPress={onFilterPress} />
      {onRightIconPress && ( // Only render right icon if onPress function provided
        <Appbar.Action icon="more-vert" onPress={onRightIconPress} />
      )}
    </Appbar.Header>
  );
};

export default Header;