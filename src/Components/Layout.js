import React from 'react'
import { Box, Drawer, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core';

const drawerWidth = 250

const useStyle = makeStyles({
    drawer: {
        width: drawerWidth
    },

})


const Layout = ({children}) => {

    const classes = useStyle()

  return (
    <div>
        <AllPages>
            <Drawer
                className={classes.drawer}
                variant = 'permanent'
                anchor='left'
                classes={{paper: classes.drawer}}
            >
                <Typography variant='h6'>This is a try</Typography>
            </Drawer>
            <Grid container>
                {children}
            </Grid>
        </AllPages>
    </div>
  )
}

export default Layout

const AllPages = styled.div`
    display: flex;
`