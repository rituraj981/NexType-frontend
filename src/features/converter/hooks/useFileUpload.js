import { useState, useCallback } from 'react';

export function useFileUpload() {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    // This is where we will eventually call the Django API
    console.log("Files dropped:", acceptedFiles);
    setFiles(acceptedFiles);
    setIsUploading(true);
    
    // Simulate upload for now
    setTimeout(() => setIsUploading(false), 2000);
  }, []);

  return { files, isUploading, onDrop };
}