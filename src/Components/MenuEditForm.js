import React, { useState, useEffect }  from 'react'
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, message, Form, Input, Space, Upload, Alert } from 'antd';
import Grid from '@mui/material/Grid';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { DataStore, Storage } from 'aws-amplify';
import { Dish } from '../models';
import { useRestaurantContex } from '../Contexts/RestaurantContext';
import { useParams } from "react-router-dom"
import Switch from '@mui/material/Switch';
import styled from 'styled-components';

const MenuEditForm = () => {


    const { id } = useParams();



    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState(true);

    const { restaurant }  = useRestaurantContex();

    const [menuInitialState, setMenuInitialState] = useState(null)

    const [dishName, setDishName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [previousImage, setPreviousImage] = useState(null)
    const [errorStatus, setErrorStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const [messageApi, contextHolder] = message.useMessage();
    const [dishChecked, setDishChecked] = React.useState(true);
    const [discountChecked, setDiscountChecked] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)

    const handleCheckStatusForDishAvailable = (event) => {
        setDishChecked(event.target.checked);
        console.log("Check event: ",event.target.checked)
    };

    const handleCheckStatusForDiscount = (event) => {
        setDiscountChecked(event.target.checked);
        console.log("Check event: ",event.target.checked)
      };

    const success = (restaurantName) => {
        messageApi
        .open({
            type: 'loading',
            content: `Adding ${restaurantName} to Database..`,
            duration: 2.5,
        })
        .then(() => message.success('Loading finished', 2.5))
        .then(() => message.info('Restaurant added', 2.5));
    };

    const handleChange = (info) => {
        let newFileList = [...info.fileList];
        newFileList = newFileList.slice(-1);
        setImage(newFileList);

        console.log(image)
    };

    const handleSubmit = async (e) => { 
        e.preventDefault()

        // if(disableSubmitButton){
        //     return
        // }
        setDisableSubmitButton(true)
        // console.log("Dish name: ", dishName);
        // console.log("Description: ", description);
        // console.log("Price: ", price);
        // console.log("RestaurantID: ", restaurant?.id);

        try {
            const dishcopy = await DataStore.query(Dish, id);

            if(image.name){
                await Storage.put(`DishImages/${image.name}`, image, {
                    contentType: "image/jpg", // contentType is optional
                });
            }

            await DataStore.save(
              Dish.copyOf(dishcopy, updated => {
                updated.name = dishName;
                updated.description = description;
                updated.price = parseFloat(price);
                updated.image = image.name;
                })
              )
              setErrorStatus(false)
              success(dishName);
        } catch (error) {
            if(error){
                console.log(error)
                setErrorStatus(true)
                setErrorMsg(error.message)
            }
        }

        setDisableSubmitButton(false)

     }


     const getDishDetails = async() => { 
        const myDish = await DataStore.query(Dish, id)
        setMenuInitialState(myDish)
        console.log("ID:",id, "food", menuInitialState)

        setIsMounted(true)
      }
      
     useEffect(() => {
        
        getDishDetails()

        setDishName(menuInitialState?.name);
        setDescription(menuInitialState?.description);
        setPrice(menuInitialState?.price);
        setPreviousImage(menuInitialState?.image)
        console.log("Image: ",previousImage)
     }, [isMounted])

     

     


  return (
    <PageWrapper>
    <AddForm>
        {errorStatus && <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <div style={{width: '90%'}}>
                    <Alert
                        message="Error"
                        description={errorMsg}
                        type="error"
                        showIcon
                        />
                </div>
            </div>}

                
        <Grid m={5} justifyContent={'center'}>

            <Grid item md={4}>
                <Form
                form={form}
                layout="vertical"
                name="dynamic_rule"
                initialValues={{
                    requiredMarkValue: requiredMark,
                }}
                //   onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
                >
                <Form.Item label="Dish name" rules={[{ required: true, message: 'Please input dish name' }]} required tooltip="This is a required field">
                    <Input placeholder="Enter Dish name" value={dishName} onChange={(e)=> setDishName(e.target.value)}/>
                </Form.Item>

                {/* <Form.Item label="Food description" onChange={(e)=>{setDescription(e.target.value)}} required tooltip={{
                    title: 'Food description',
                    //   icon: <InfoCircleOutlined />,
                    }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item> */}

                <Form.Item label="Food description" rules={[{required: true}]} required tooltip="This is a required field">
                    <Input placeholder="Enter description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </Form.Item>

                <Form.Item label="Dish price" required tooltip="This is a required field">
                    <Input placeholder="Enter Dish price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                </Form.Item>

                <Form.Item label="Upload dish image" required>
                    {/* <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle> */}
                        {/* <Upload.Dragger name="files" fileList={image} onChange={handleChange}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Upload.Dragger> */}
                    {/* </Form.Item> */}
                    <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" disabled={disableSubmitButton ? true : false} onClick={handleSubmit}>Submit</Button>
                </Form.Item>
                </Form>
            </Grid>
        </Grid>
        {contextHolder}
    </AddForm>
    <DishOtherDetails>
        <Header>
            <p>Other Details</p>
        </Header>
        <DisplayImageUpload>
            <div style={{borderRadius: 5, overflow: 'hidden', height: '100%'}}>
                <img src='https://images.thewest.com.au/publication/C-7412709/ea36b245bfc53d5ba9157cd21e8f48f0c5396579-16x9-x0y332w6375h3586.jpg' alt='uploading' />
            </div>
        </DisplayImageUpload>
        <RadioButtons>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Availability Status</p>
                <Switch
                    checked={dishChecked}
                    onChange={handleCheckStatusForDishAvailable}
                    inputProps={{ 'aria-label': 'controlled' }}
                    color="warning"
                    />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>Discount Availability</p>
                <Switch
                    checked={discountChecked}
                    onChange={handleCheckStatusForDiscount}
                    inputProps={{ 'aria-label': 'controlled' }}
                    color="warning"
                    />
            </div>
        </RadioButtons>
        <Footer>
            <CustomButton>
                <p>Save and Add</p>
            </CustomButton>
        </Footer>
    </DishOtherDetails>
    </PageWrapper>
  )
}

export default MenuEditForm

const PageWrapper = styled.div`
    display: flex;
    /* border: 1px solid red; */
    gap: 10px;
    height: 80vh;
`

const AddForm = styled.div`
    width: 50%;
    /* border: 1px solid red; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const DishOtherDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    /* border: 1px solid red; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Header = styled.div`
    padding: 15px;
    padding-bottom: 35px;

    >p{
        text-transform: uppercase;
        font-size: 18px;
        font-weight: bold;
    }
`
const DisplayImageUpload = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    height: 40%;
    /* border-radius: 4px; */
    overflow: hidden;
    /* border: 1px solid black; */

    >img {
        height: 100%;
        width: 100%;
        object-fit: cover;

    }
`
const RadioButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 15px;
    margin-top: 10px;

    >div > p{
        font-weight: bold;
        text-transform: capitalize;
        font-size: 15px;
    }
`
const Footer = styled.div`
    /* border: 1px solid red; */
    margin-top: 10px;
    padding: 15px;
    border-top: 1px solid #EFEFEF;
    
`
const CustomButton = styled.div`
    display: flex;
    height: 40px;
    width: 150px;
    border-radius: 5px;
    background-color: #F8A94C;
    justify-content: center;
    align-items: center;


    >p{
        color: #fff;
    }
`

