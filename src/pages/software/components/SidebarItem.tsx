import React, { FC } from "react";

interface SidebarItemProps {
  text: string;
  onClick: () => void;
}

const SidebarItem: FC<SidebarItemProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default SidebarItem;
