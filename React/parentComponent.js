import React from 'react';

function ParentComponent(props) {
  return (
    <div>
      <h2>Parent Component</h2>
      {props.children}
    </div>
  );
};

export default ParentComponent;