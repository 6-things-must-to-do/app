import React, {useState} from 'react';
import Presenter from './Presenter';

const Social = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onTabPress = (index: number) => {
    setSelectedIndex(index);
  };

  return <Presenter selectedIndex={selectedIndex} onTabPress={onTabPress} />;
};

export default Social;
