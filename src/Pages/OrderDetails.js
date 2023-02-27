import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { DataStore } from 'aws-amplify';
import { useParams } from "react-router-dom"
import { Order, UserMobile, OrderDish } from '../models';
import { useOrderContext } from '../Contexts/OrderContex';
import { Grid, Stack, Paper, Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
// import { makeStyles } from '@mui/styles';



const OrderDetails = () => {

  const columns = [
    // { field: 'id', headerName: 'ID', width: 95 },
    {
      field: 'items',
      headerName: 'Items',
      width: 300,
      editable: true,
      // valueGetter: (params) =>
      //   `${params.row?.dish?.name}`,
      renderCell: (params) => {
        return (
          <ItemName>
            <ImageWrapper>
              <img src='https://www.foodandwine.com/thmb/EuorRdLisZJ5XCD1ZJJnGXGHP_4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201012-ss-dishes-leeks-7624862883b54db29fbfa87295ba42ac.jpg' width={56} height={56} />
            </ImageWrapper>
            <ItemDetails>
              <p>MAIN COURSE</p>
             <h3>{params.row?.dish?.name}</h3>
            </ItemDetails>
            
          </ItemName>
        )
      }
    },
    {
      field: 'quantity',
      headerName: 'Qty',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: true,
      valueGetter: (params) =>
      `${params.row?.dish?.price.toFixed(2)}`,
    },
    {
      field: 'subtotal',
      headerName: 'Total price',
      description: 'The total price.',
      type: 'number',
      sortable: false,
      width: 120,
      valueGetter: (params) => params.row.quantity * params.row?.dish?.price.toFixed(2),
    },
  ];
  


  const { id } = useParams();

  // const { getOrder } =  useOrderContext();

  const [orderDetails, setOrderDetails] = useState(null)
  const [customerDetails, setCustomerDetails] = useState(null)
  const [orderDishes, setOrderDishes] = useState()
  // const [order, setOrder] = useState()
  
  const getOrderDetails = async() => { 
    const results = await DataStore.query(Order, id)
    setOrderDetails(results)
    console.log("order details: ",results)
   }



  useEffect(() => {
    // getOrder(id).then(setOrder);
    getOrderDetails();
    console.log("order details: ", orderDetails)
  }, [id])


  useEffect(() => {
    if(orderDetails?.id){
      DataStore.query(UserMobile, orderDetails?.usermobileID).then(setCustomerDetails)
    }
  }, [orderDetails?.id])

  // useEffect(() => {
  //   if(orderDetails?.id)
  //   DataStore.query(OrderDish, (od)=> od.orderID.eq(orderDetails?.id)).then(setOrderDishes)
  // }, [orderDetails?.id])

  async function getOrderDishes() {
    const orderDishes = await DataStore.query(OrderDish, od => od.orderID.eq(orderDetails?.id), {
      include: {
        dish: true // include the "Dish" model in the result set
      }
    });
    console.log(orderDishes);
  
    // Iterate over each OrderDish object and wait for its "dish" property to resolve
    const orderDishesWithDish = await Promise.all(orderDishes.map(async (od) => {
      const dish = await od.Dish;
      return { ...od, dish };
    }));
    
    setOrderDishes(orderDishesWithDish)
    console.log("Order Dishes Kings Grill: ",orderDishesWithDish);

  }

  useEffect(() => {
    getOrderDishes()
  }, [orderDetails?.id])
  
  if(!orderDishes){
    return null
  }

  const CircularProgressWithLabel = (props) => {
    return (
      <div style={{ position: 'relative' }}>
        <CustomCircularProgress  size={60} variant="determinate" {...props} />
        <Typography
          variant="caption"
          component="div"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >{`${Math.round(props.value)}%`}</Typography>
      </div>
    );
  };


  
  return (
    <div>

      {/* <p>Total: {orderDetails?.subtotal?.toFixed(2)}</p>  */}
      <MyContainer>
        <Grid container sx={{height: '100%', width: '100%'}} spacing={2}>
            <Stack 
              // direction={{ xs: 'column', sm: 'row' }}
              direction={{ xs: 'row', sm: 'row', md: 'column' }}
              spacing={2}
              sx={{width: '25%', height: '100vh', padding: '5px'}}
            >
              <Paper sx={{width: '100%', height: '50vh'}}>
                <UserDetails>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                    sx={{ width: 86, height: 86, mb: 3 }}
                    variant="rounded"
                  />
                  <Typography variant='p' component='h3' sx={{fontSize: '18px'}}>{customerDetails?.name}</Typography>
                  <Box sx={{width: '90px', height: '45px', border: '2px solid #98DA98', borderRadius: 2, justifyContent: 'center', alignItems: 'center', display: 'flex', mt: 2}}>
                    <Typography sx={{color: '#98DA98'}}>Customer</Typography>
                  </Box>
                  <Box sx={{display: 'flex', mt: 2, justifyContent: 'space-between', width: '50%'}}>
                      <CallIcon />
                      <Typography>+51512562677</Typography>
                  </Box>
                </UserDetails>
              </Paper>
              <Paper sx={{height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', width: '55%', alignItems: 'center'}}>
                    <LocationOnOutlinedIcon />
                    <Typography>{customerDetails?.address}</Typography>
                </Box>
              </Paper>
              <Paper sx={{width: '100%', height: '40vh'}}>

              </Paper>
            </Stack>

            <Stack
              direction="column"
              spacing={2}
              sx={{width: '75%', height: '100vh', padding: '5px'}}
            >
              {/* <Paper
                sx={{width: '100%', height: '65vh'}}
              > */}
                    <Box sx={{ height: 450, width: '100%' }}>
                      <DataGrid
                        rows={orderDishes}
                        // loading={orderDishes?.rows.length === 0}
                        columns={columns}
                        pageSize={6}
                        rowsPerPageOptions={[6]}
                        checkboxSelection={false}
                        disableSelectionOnClick
                        // components={{ Toolbar: StyledGridToolbar }}
                        // getRowId={getRowId}
                        experimentalFeatures={{ newEditingApi: true }}
                      />
                    </Box>
              {/* </Paper> */}
              <Stack spacing={4} direction='row' sx={{height: '35vh', justifyContent: 'space-between'}}>
                <Paper sx={{width: '40%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src='/images/mymap.png' height="90%" width="95%" objectfit="cover"/>
                </Paper>
                <Paper sx={{width: '20%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography>Dish(s) Total</Typography>
                  <Typography variant='h5' component="h1">{orderDetails?.subtotal?.toFixed(2)}</Typography>
                </Paper>
                <Paper sx={{width: '40%', height: '100%', }}>
                  <Typography variant='p' component='h4' mt={1}>Customer Favourite </Typography>
                  <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60%', width: '100%', border: '1px solid #fff', padding: '0px 80px'}} mt={4}>
                    <Box>
                    <CircularProgressWithLabel style={{color: 'red'}} value={65} />
                      <Typography>Food</Typography>
                    </Box>
                    <Box>
                    <CircularProgressWithLabel style={{color: 'orange'}} value={35} />
                      <Typography>Drink</Typography>
                    </Box>
                  </Box>

                </Paper>
              </Stack>
            </Stack>
        </Grid>
      </MyContainer>
      
    </div>
  )
}

export default OrderDetails

const MyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  height: 100%;
`
const StyledGridToolbar = styled(GridToolbar)`
  color: red; // Set the background color to blue
`;

const ItemName = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* background-color: red; */
`
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  >p{
    font-size: 10px;
  }
`
const ImageWrapper = styled.div`
  border-radius: 4px;
  height: 45px;
  width: 56px;
  /* border: 1px solid red; */
  contain: content;
  >img {
    object-fit: cover;

  }
`
const CustomCircularProgress = styled(CircularProgress)`
  color: green;
`;