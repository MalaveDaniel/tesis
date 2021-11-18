import React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export const Dashboard = () => {
    return (
        
            <Grid container style={{flexDirection:'column'}}>
                <Typography component="h1" variant="h5" style={{marginTop:5,marginBottom:10}}>
                    Bienvenido USERNAME
                </Typography>

                <Divider style={{marginBottom:10}}/>
                
                <Grid container style={{flexDirection:'row'}}>
                    <Card style={{marginLeft:10,flex:1}}>
                        <CardHeader title="Grafico 1" />
                        <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                    </Card>
                    <Card style={{marginLeft:10, flex:1}}>
                        <CardHeader title="Grafico 2" />
                        <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                    </Card>
                </Grid>
                
                <Grid container style={{flexDirection:'row',marginTop:10}}>
                    <Card style={{marginLeft:10,flex:1}}>
                        <CardHeader title="Card 1" />
                        <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                    </Card>
                    <Card style={{marginLeft:10, flex:1}}>
                        <CardHeader title="Card 2" />
                        <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                    </Card>
                    <Card style={{marginLeft:10, flex:1}}>
                        <CardHeader title="Card 3" />
                        <CardContent>Lorem ipsum sic dolor amet... </CardContent>
                    </Card>
                </Grid>
            </Grid>
        
        
    )
}
