import React, { useState }  from 'react'
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, message, Form, Input, Space, Upload, Alert } from 'antd';
import Grid from '@mui/material/Grid';
import GooglePlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-google-places-autocomplete';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../models';
import { useRestaurantContex } from '../Contexts/RestaurantContext';



const NewRestaurantForm = () => {

    const { sub } = useRestaurantContex();

    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState(true);

    const [restaurantName, setRestaurantName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [location, setLocation] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    const [openingTime, setOpeningTime] = useState(null);
    const [closingTime, setClosingTime] = useState(null);
    const [fileList, setFileList] = useState([]);
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

    const handleSubmit = async (e) => { 
        e.preventDefault()
        // console.log("Restaurant name: ", restaurantName);
        // console.log("Phone number: ", phoneNumber);
        // console.log("Location: ", location);
        // console.log("Longitude: ", coordinates?.lng, " Latitude: ", coordinates?.lat)
        // console.log("Opening time: ", openingTime);
        // console.log("Closing time: ", closingTime);
        // console.log("File list: ", fileList);
        try {
            await DataStore.save(
                new Restaurant({
                  name: restaurantName,
                  lat: coordinates?.lat,
                  lng: coordinates?.lng,
                  openingTime: openingTime,
                  closingTime: closingTime,
                  sub: sub,
                  phone: phoneNumber,
                  address: location.label,
                  image: 'https://www.medoc-atlantique.com/wp-content/uploads/2019/02/restaurant-1600x900.jpg'
              }))
              setErrorStatus(false)
              if(errorStatus==false){
                success(restaurantName);
              }
              window.location.reload()
        } catch (error) {
            if(error){
                console.log(error)
                setErrorStatus(true)
                setErrorMsg(error.message)
            }
        }

     }

    const getAddressLatLng = async (address) => { 
        setLocation(address)
        console.log(address.label)
        const geocodedByAddress = await geocodeByAddress(address.label)
        const LatLng = await getLatLng(geocodedByAddress[0])
        setCoordinates(LatLng)
        console.log(LatLng)
     }

    const handleChange = (info) => {
        let newFileList = [...info.fileList];
        newFileList = newFileList.slice(-1);
        setFileList(newFileList);

        console.log(fileList)
    };


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
            initialValues={{
                requiredMarkValue: requiredMark,
            }}
            //   onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
            >
            <Form.Item label="Restaurant name" required tooltip="This is a required field">
                <Input placeholder="Enter Restaurant" onChange={(e)=>{setRestaurantName(e.target.value)}}/>
            </Form.Item>

            <Form.Item label="Phone number" onChange={(e)=>{setPhoneNumber(e.target.value)}} required tooltip={{
                title: 'Enter phone number',
                //   icon: <InfoCircleOutlined />,
                }}
            >
                <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item label="Location" required tooltip="This is a required field">
                <GooglePlacesAutocomplete
                    apiKey="AIzaSyB-LKht_lArgYnXm8ofVkCzPLZ0BlXwLnU"
                    selectProps={{
                        value: location,
                        onChange: getAddressLatLng
                    }}
                />
            </Form.Item>

            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Form.Item label="Opening time" required tooltip="This is a required field" onChange={(e)=>{setOpeningTime(e.target.value)}}>
                        <Input type='time' placeholder="Enter time" />
                    </Form.Item>
                </Grid>
                <Grid item md={6}>
                    <Form.Item label="Closing time" required tooltip="This is a required field" onChange={(e)=>{setClosingTime(e.target.value)}}>
                        <Input type='time' placeholder="Enter time" />
                    </Form.Item>
                </Grid>
            </Grid>

            <Form.Item label="Upload restaurant image" required>
                {/* <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle> */}
                    <Upload.Dragger name="files" action="/upload.do" fileList={fileList} onChange={handleChange}>
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

export default NewRestaurantForm