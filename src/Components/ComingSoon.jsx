import React from 'react';

const ComingSoon = () => {
  let styles = {
    backgroundColor: '#fefefa',
    color: 'red',
    height: '100vh',
    width: '100%',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', 
    fontSize:'100px'
  };

  return (
    <div id='comingSoon' style={styles}>
      <h3>Will be Uploaded Soon</h3>
    </div>
  );
};

export default ComingSoon;
