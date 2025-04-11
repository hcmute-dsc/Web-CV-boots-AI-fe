import React, { useEffect, useState } from 'react';

interface SaveNotificationProps {
  show: boolean;
}

const SaveNotification: React.FC<SaveNotificationProps> = ({ show }) => {
  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('opacity-0 translate-y-2');

  useEffect(() => {
    if (show) {
      setVisible(true);
      setTimeout(() => {
        setAnimationClass('opacity-100 translate-y-0');
      }, 10);
      
      const timer = setTimeout(() => {
        setAnimationClass('opacity-0 translate-y-2');
        setTimeout(() => {
          setVisible(false);
        }, 300);
      }, 2000);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center transition-all duration-300 ease-in-out ${animationClass}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 mr-2" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
          clipRule="evenodd" 
        />
      </svg>
      Đã lưu dữ liệu CV của bạn
    </div>
  );
};

export default SaveNotification; 