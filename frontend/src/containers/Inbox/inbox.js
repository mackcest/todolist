import React, { useState } from 'react';
import Header from '../../components/header';
import SideBar from '../../components/sidebar/sidebar';

export default function Inbox() {
  const [name, setName] = useState(true);
  const getExpandedMenu = (data) => {
    setName(data);
  };
  return (
    <div>
      <Header ExpandedMenu={getExpandedMenu} />
      <SideBar name={name} />
    </div>
  );
}
