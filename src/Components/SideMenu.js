import React, {useState} from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useRestaurantContex } from '../Contexts/RestaurantContext';



const SideMenu = ({signOut}) => {

  const { restaurant } = useRestaurantContex();

  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you want to Sign out',
      okText: 'Yes',
      cancelText: 'Cancel',
      onOk: function(e){
        signOut()
      }
    });
  };


  const navigate = useNavigate();



  const mainMenuItems = [
    
    {
        key: '/',
        icon: <AppsIcon style={{fontSize: 20}}/>,
        label: 'Dashboard'
    },
    {
        key: 'menu',
        icon: <DescriptionIcon style={{fontSize: 20}}/>,
        label: 'Menu'
    },
    {
        key: 'order-list',
        icon: <RateReviewIcon style={{fontSize: 20}}/>,
        label: 'Order List'
    },
    {
        key: 'reviews',
        icon: <AssessmentIcon style={{fontSize: 20}}/>,
        label: 'Reviews'
    },
    {
        key: 'reports',
        icon: <ContentPasteIcon style={{fontSize: 20}}/>,
        label: 'Reports'
    },
  

  ]

  const menuItems = [
    ...(restaurant ? mainMenuItems : []),
    {
      key: 'settings',
      icon: <SettingsIcon style={{fontSize: 20}}/>,
      label: 'Settings'
    },
    {
      key: 'Logout',
      icon: <LogoutIcon style={{fontSize: 20}}/>,
      label: 'Log out'
    }

  ]

  const onClickedMenuItem = (menuItem) => { 
    if(menuItem.key === 'Logout'){
      confirm()
    } else{
      console.log(menuItem)
      navigate(menuItem.key)
    }
   }

  return (
    <>
    {/* {restaurant && <h4>{restaurant.name}</h4>} */}
    <Menu onClick={onClickedMenuItem} style={{marginTop: 20, display: 'flex', gap: 5, flexDirection: 'column', backgroundColor: '#F8A94C', color: '#fff', fontWeight: 500, fontFamily: "Roboto", cursor: 'pointer'}} items={menuItems} />
    {contextHolder}
    </>
  )
}

export default SideMenu