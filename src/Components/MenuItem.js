import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { DataStore } from 'aws-amplify';
import { Dish } from '../models';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { Paper } from '@mui/material';

// Card Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Storage } from 'aws-amplify';



const MenuItem = ({data}) => {

    const navigate = useNavigate();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [imageLink, setImageLink] = useState(null)

    const DEFAULT_IMAGE_LINK = 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/4/1/FN_chain-restaurant-entrees_Applebees_Bourbon-Street-Chicken-Shrimp_s6x4.jpg.rend.hgtvcom.616.411.suffix/1538685780055.jpeg'

    const toggleModal = () => {
      setIsModalVisible((prevState) => !prevState);
    };
  
    const deleteDishItem = async (id) => {
      const item = await DataStore.query(Dish, id);
      DataStore.delete(item);
      setIsModalVisible(false);
      // window.location.reload()
    };

    const getImage = async() => {  
      const file = await Storage.get(data?.image, {
        level: "public"
      });
      // console.log("the image: ",file)
      setImageLink(file)
    }

    useEffect(() => {
      if(data?.image){
        getImage()
      }
    }, [])
    

  return (
    <>
    {/* <ComponentWrapper>
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
        </MenuDetails>
        <RowFour>
            <div style={{cursor: 'pointer'}} onClick={toggleModal}><p>Revome</p></div>
            <div style={{backgroundColor: '#000000', cursor: 'pointer'}} onClick={()=>navigate(`/edit-menu/${data?.id}`, {replace: true})}><p>Edit</p></div>
        </RowFour>
    </ComponentWrapper> */}

    <Card sx={{ width: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        // image={`${imageLink ? imageLink : DEFAULT_IMAGE_LINK}`}
        image = {imageLink ? imageLink : DEFAULT_IMAGE_LINK}
        title={data?.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {data?.name}
        </Typography>
        <RowTwo>
            <p>5-10min</p>
            <div><p>In Stock</p></div>
        </RowTwo>
        <Typography variant="body2" color="text.secondary">
            {data?.description}
        </Typography>
      </CardContent>
      <CardActions>
      <RowFour>
            <div style={{cursor: 'pointer'}} onClick={toggleModal}><p>Revome</p></div>
            <div style={{backgroundColor: '#000000', cursor: 'pointer'}} onClick={()=>navigate(`/edit-menu/${data?.id}`, {replace: true})}><p>Edit</p></div>
        </RowFour>
      </CardActions>
    </Card>

    <Modal
        title="Confirm"
        icon={<ExclamationCircleOutlined />}
        visible={isModalVisible}
        onCancel={toggleModal}
        footer={[
          <div style={{ display: 'flex', gap: 5, justifyContent: 'flex-end', width: '100%' }}>
            <div className='deleteDishbtn' key="cancel" onClick={toggleModal} style={{ cursor: 'pointer' }}>
              Cancel
            </div>
            <div className='deleteDishbtn' key="delete" onClick={() => deleteDishItem(data?.id)} style={{ cursor: 'pointer', backgroundColor: '#2C87FF', color: '#fff' }}>
              Delete
            </div>
          </div>,
        ]}
      >
        <p>Do you want to delete this dish?</p>
      </Modal>
    </>
  )
}

export default MenuItem

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  height: 280px;
  width: 250px;
  justify-content: space-between;
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
    /* border: 1px solid red; */
    /* contain: content; */
`
const RowOne = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
        /* border: 1px solid red; */

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
    width: 100%;
    align-items: center;
    margin-top: auto;
    align-self: center;
    /* border: 1px solid red; */
    margin: 0 !important;

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