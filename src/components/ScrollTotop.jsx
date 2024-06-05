import React, { useEffect, useState } from 'react';
import { Button, Box } from "@mui/material";
import zIndex from '@mui/material/styles/zIndex';


const ScrollToTop = () => {
  {/*States for showbtn*/}
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //when vertical scroll is more than 300px show btn 
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    //scroll to top 
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      variant="contained"
      onClick={()=>{scrollToTop()}}
      sx={{
        borderRadius: '50%',
       padding:"0.25rem",
        position: 'fixed',
        backgroundColor:"#0d6efd",
        color:'White',
        height:"2rem",
        width:"2rem",
        textAlign:"center",
        
        '&:hover': {
        
          cursor:'pointer' // Slightly darker blue on hover
        },

        bottom: "2vh",
        right: "2vw",
        zIndex:"9999",
        display: showButton ? "flex" : "none",
        justifyContent:"center",
        alignItems:"center",
      }}
    >
      <span>&#8593;</span>
     
    </Box>
  );
};

export default ScrollToTop;
