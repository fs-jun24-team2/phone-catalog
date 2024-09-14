import React from 'react';

interface GoBackBtnProps {
  targetId: string; // ID секції, до якої буде скрол, треба доставити в Header
}

export const GoBackBtn: React.FC<GoBackBtnProps> = ({ targetId }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <button onClick={scrollToSection}>Скролити до {targetId}</button>;
};
