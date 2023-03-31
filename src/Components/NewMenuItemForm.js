import React, { useState }  from 'react'
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, message, Form, Input, Space, Upload, Alert } from 'antd';
import Grid from '@mui/material/Grid';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { DataStore, Storage } from 'aws-amplify';
import { Dish } from '../models';
import { useRestaurantContex } from '../Contexts/RestaurantContext';
import Switch from '@mui/material/Switch';
import styled from 'styled-components';
import {compressImage, dataURLtoFile} from '../Utils/ImageUtils'

const NewMenuItemForm = () => {

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState(true);

    const { restaurant }  = useRestaurantContex();

    const [dishName, setDishName] = useState(null)
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [image, setImage] = useState(null)
    const [s3image, setS3image] = useState(null)
    const [errorStatus, setErrorStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const [messageApi, contextHolder] = message.useMessage();
    const [dishChecked, setDishChecked] = React.useState(true);
    const [discountChecked, setDiscountChecked] = useState(false)
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
            content: `Adding ${restaurantName} to Database...`,
            duration: 2,
        })
        .then(() => message.success('Loading finished', 2))
        .then(() => message.info('Dish added', 2));
    };

    const handleChange = async(info) => {
        let newFileList = [...info.fileList];
        newFileList = newFileList.slice(-1);
        setImage(newFileList);

        console.log(image)

        // const file = info.target.files[0];
        // setS3image(file.name)
        console.log("My image ",image)
        try {
          await Storage.put(image.name, image, {
            contentType: "image/png", // contentType is optional
          });
        } catch (error) {
          console.log("Error uploading file: ", error);
        }
    };

    const handleSubmit = async (e) => { 
        e.preventDefault()

        setDisableSubmitButton(true)

        try {

                  // Compress the image before uploading it to S3
            const compressedImage = await compressImage(image, 0.5);

            // Upload the compressed image to S3 using Amplify
            // await Storage.put(`DishImages/${compressedImage.name}`, compressedImage, {
            //     contentType: "image/jpg", // contentType is optional
            // });
            await Storage.put(`DishImages/${image.name}`, image, {
                contentType: "image/png", // contentType is optional
            });

            await DataStore.save(
                new Dish({
                  name: dishName,
                  description: description,
                  price: parseFloat(price),
                  restaurantID: restaurant?.id,
                  image: image.name
              })).then((res)=>console.log(res.data))
              setErrorStatus(false)
              success(dishName);


        } catch (error) {
            if(error){
                console.log(error)
                setErrorStatus(true)
                setErrorMsg(error.message)
            }
        }

        setDishName(null)
        setDescription(null)
        setPrice(null)

        setDisableSubmitButton(false)

     }


     


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
                
        <Grid ml={5} mr={5} justifyContent={'center'}>
        <Header>
            <p>add menu</p>
        </Header>
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
                    <Input placeholder="Enter Dish name" onChange={(e)=>{setDishName(e.target.value)}}/>
                </Form.Item>

                {/* <Form.Item label="Food description" onChange={(e)=>{setDescription(e.target.value)}} required tooltip={{
                    title: 'Food description',
                    //   icon: <InfoCircleOutlined />,
                    }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item> */}

                <Form.Item label="Food description" rules={[{required: true}]} required tooltip="This is a required field">
                    <Input placeholder="Enter description" onChange={(e)=>{setDescription(e.target.value)}}/>
                </Form.Item>

                <Form.Item label="Dish price" required tooltip="This is a required field">
                    <Input placeholder="Enter Dish price" onChange={(e)=>{setPrice(e.target.value)}}/>
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
                    {/* If you want to maintain the quality of the picture comment the line below and uncomment the one above. Also uncomment line 84-86 and comment 81-83. Edit line 94 at well */}
                    {/* <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = async (event) => {
                            const imgDataUrl = event.target.result;
                            const compressedImage = await compressImage(
                                dataURLtoFile(imgDataUrl, file.name),
                                0.5
                            );
                            setImage(compressedImage);
                            };
                        }}
                        /> */}
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
                <img src='https://images.thewest.com.au/publication/C-7412709/ea36b245bfc53d5ba9157cd21e8f48f0c5396579-16x9-x0y332w6375h3586.jpg' alt='uplodeding' />
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

export default NewMenuItemForm

const PageWrapper = styled.div`
    display: flex;
    /* border: 1px solid red; */
    gap: 10px;
    height: 85vh;
    
`

const AddForm = styled.div`
    display: flex;
    flex-direction: column;
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

