import React, { useState }  from 'react'
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, message, Form, Input, Space, Upload, Alert } from 'antd';
import Grid from '@mui/material/Grid';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { DataStore } from 'aws-amplify';
import { Dish } from '../models';
import { useRestaurantContex } from '../Contexts/RestaurantContext';

const NewMenuItemForm = () => {

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState(true);

    const { restaurant }  = useRestaurantContex();

    const [dishName, setDishName] = useState(null)
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState(null)
    const [image, setImage] = useState(null)
    const [errorStatus, setErrorStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const [messageApi, contextHolder] = message.useMessage();

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

        // try {
        //     const values = await form.validateFields();
        //     console.log('Success:', values);
        //   } catch (errorInfo) {
        //     console.log('Failed:', errorInfo);
        //   }

        e.preventDefault()
        // console.log("Dish name: ", dishName);
        // console.log("Description: ", description);
        // console.log("Price: ", price);
        // console.log("RestaurantID: ", restaurant?.id);

        try {
            await DataStore.save(
                new Dish({
                  name: dishName,
                  description: description,
                  price: parseFloat(price),
                  restaurantID: restaurant?.id
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

     }


  return (
    <>
    {errorStatus && <div style={{width: '100%', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '35%'}}>
                <Alert
                    message="Error"
                    description={errorMsg}
                    type="error"
                    showIcon
                    />
            </div>
        </div>}

            
    <Grid container mt={5} justifyContent={'center'}>

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
                    <Upload.Dragger name="files" action="/upload.do" fileList={image} onChange={handleChange}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    {/* <p className="ant-upload-hint">Support for a single or bulk upload.</p> */}
                    </Upload.Dragger>
                {/* </Form.Item> */}
            </Form.Item>

            <Form.Item>
                <Button type="primary" onClick={handleSubmit}>Submit</Button>
            </Form.Item>
            </Form>
        </Grid>
    </Grid>
    {contextHolder}
    </>
  )
}

export default NewMenuItemForm