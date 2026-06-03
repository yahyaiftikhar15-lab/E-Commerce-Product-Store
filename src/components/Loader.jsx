import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="loader-container">
      <Loader2 className="spinner" size={48} />
    </div>
  );
};

export default Loader;
