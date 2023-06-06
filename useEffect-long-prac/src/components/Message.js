import { useEffect, useState } from "react";

function Message({ size, featherCount }) {
  const [sizeClass, setSizeClass] = useState('');
  useEffect( () => {
    console.log('PictureDisplay', size);
    let className = '';
    if (size === 'm') {
      className = 'medium';
    } else if ( size === 'l'){
      className = 'large';
    } else if ( size === 'xl') {
      className = 'xlarge';
    } else {
      className = 'small';
    }
    setSizeClass(className);
  }, [size]);

  const [message, setMessage] = useState('');

  useEffect(() =>{
    if (featherCount <= 0)
      setMessage('Oh my! Your bird is naked!');
    else if (featherCount >= 10) {
      setMessage('Full turkey!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount])

  return (
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  );
};

export default Message;