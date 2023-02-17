import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Dish } from '../models';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';



const MenuItem = ({data}) => {

    const navigate = useNavigate();

    const deleteDishItem = async(id) => { 
        // modal.destroy();
        const item = await DataStore.query(Dish, id);
        DataStore.delete(item)
     }

    const [modal, contextHolder] = Modal.useModal();
    const confirm = (id) => {
      modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: 'Do you want to delete this dish?',
        okText: 'Yes',
        cancelText: 'Cancel',
        onOk: function(e){
            // deleteDishItem(id);
            // open = true
            // window.location.reload()
        }
      });
    };

  return (
    <ComponentWrapper>
        <div style={{width: '100%'}}>
            <img src='images/menu1.png'/>
        </div>
        <MenuDetails>
            <RowOne>
                <p>{data?.name}</p>
                <p>GHS{data?.price}</p>
            </RowOne>
            <RowTwo>
                <p>5-10min</p>
                <div><p>In Stock</p></div>
            </RowTwo>
            <RowThree>
                <p>{data?.description}</p>
            </RowThree>
            <RowFour>
                <div style={{cursor: 'pointer'}} onClick={()=>confirm(data?.id)}><p>Revome</p></div>
                <div style={{backgroundColor: '#000000', cursor: 'pointer'}} onClick={()=>navigate(`/edit-menu/${data?.id}`, {replace: true})}><p>Edit</p></div>
            </RowFour>
        </MenuDetails>
        {contextHolder}
    </ComponentWrapper>
  )
}

export default MenuItem

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid #e5e5e5; */
  height: 280px;
  width: 250px;
  /* justify-content: center; */
  align-items: center;

  > div {
    height: 80px;
    /* width: 100%; */

    > img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
  }
`
const MenuDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 100%;
    /* border: 1px solid #e5e5e5; */
`
const RowOne = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;

    >p{
        font-size: 17px;
        font-weight: 600;
    }
`
const RowTwo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    >p{
        font-size: 14px;
        color: #333;
        opacity: 0.8;
        /* font-weight: 600; */
    }

    > div {
        display: flex;
        height: 25px;
        padding: 5px 8px;
        background-color: #22A45D;
        align-items: center;
        justify-content: center;
        border-radius: 5px;

        > p {
            color: #fff;
            font-size: 12px;
            font-weight: bold;
        }
    }
`

const RowThree = styled.div`
    display: flex;
    width: 100%;

    > p {
        font-size: 13px;
        text-align: left;
    }
`
const RowFour = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    > div {
        display: flex;
        height: 30px;
        padding: 5px 8px;
        background-color: #F8A94C;
        align-items: center;
        justify-content: center;
        border-radius: 5px;

        > p {
            color: #fff;
            font-size: 12px;
            font-weight: bold;
        }
    }
`