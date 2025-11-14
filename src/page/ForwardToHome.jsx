import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const ForwardToHome = () => {
    
     const navigate = useNavigate();

    useEffect(() => {
      navigate('/Home');
    }, []); 

  return (
    <div>

    </div>
  )
}

export default ForwardToHome
