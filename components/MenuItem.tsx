import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

const MenuItem: React.FC<IProps> = (props) => {
  return(
    <>{props.children}
    </>
  );
};

export default MenuItem;
