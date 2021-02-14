import React, {useCallback, useEffect} from 'react';
import useStorage from './hooks/useStorage';
import { motion } from 'framer-motion';
import './Upload.css';

function ProgressBar ({ setUrl, file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
      setUrl(url);
    }
  }, [url, setFile, setUrl ]);

  return (

    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
    
  );
} 

export default ProgressBar;