import React from 'react';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    TextField,
    Button
} from "@mui/material";

const Contact = () => {
  return (
    <div className='Contact'>
        <Grid style={{marginTop: 50}}>
            <Card style={{maxWidth: 750, padding: "20px 5px", margin: "0 auto"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" align="center">
                        CONTACT US
                    </Typography>

                    <Typography variant="body2" align="center"
                    color="textSecondary" component="p" gutterBottom>
                        Got a question? We'd love to hear from you! Send us a message and we'll respond as soon as possible.
                    </Typography>

                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder="Enter first name"
                                    label="First Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder='Enter last name' label="Last Name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder="Enter email address" label="Email" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="message" multiline rows={5} placeholder="Type your message here" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                </Grid>
                                
                                

                            </Grid>
                        </form>


                </CardContent>
            </Card>
        </Grid>


    </div>
  )
};

export default Contact;