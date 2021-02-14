import React, { useEffect } from 'react';
import useStorage from './hooks/useStorage';
import { motion } from 'framer-motion';
import './Upload.css';

function ProgressBar ({ urlCallback, file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      urlCallback(url);
    }
  }, [url, setFile]);

  return (

    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
    
  );
} 

export default ProgressBar;