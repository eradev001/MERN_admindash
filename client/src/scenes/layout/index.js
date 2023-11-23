import { Box, useMediaQuery } from '@mui/material';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { useSelector, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetUserQuery } from 'state/api';

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId );
  const {data} = useGetUserQuery(userId);
  console.log("data" , data);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile ={isNonMobile}
        drawerWidth="250px"
        drower
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen = {setIsSidebarOpen}
        />
      <Box>
        <Navbar
          isSidebarOpen = {isSidebarOpen}
          setIsSidebarOpen = {setIsSidebarOpen}
        />
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout