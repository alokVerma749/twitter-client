import React from 'react';

interface CardContainerProps {
  children: React.ReactNode;
  headingText: string
}

const CardContainer: React.FC<CardContainerProps> = ({ children, headingText }) => {
  return (
    <div className='border border-gray-600 p-3 rounded-xl'>
      <h1 className="font-bold text-lg">{headingText}</h1>
      {children}
    </div>
  );
}

export default CardContainer;
