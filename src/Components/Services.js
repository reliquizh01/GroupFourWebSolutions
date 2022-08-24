import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Services = () => {
  return (
    <>
      <CssBaseline />
      <Typography variant="h2" gutterBottom align="center">
        Our Services
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        this are the Services that G4 Solution's offers
      </Typography>
      <Container maxWidth="md" component="div">
        <Grid container spacing={4} component="div">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://www.tallysoft.com/wp-content/uploads/2019/07/bigstock-Data-Protection-Cyber-Security-278238466-1024x565.jpg"
                alt="System Security"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  System Security
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  System Security includes the development and implementation of
                  security countermeasures. These include firewalls, data
                  encryption,passwords and biometrics. A firewall consists of
                  software and hardware set up between an internal computer
                  network and the Internet to filter out unwanted intrusions.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg"
                alt="WebDev"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Web Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Well organized and easy to understand Web building tutorials
                  with lots of examples of how to use HTML, CSS, JavaScript,
                  SQL, Python, PHP, Bootstrap, Java.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://dashwire.com/wp-content/uploads/2022/04/the-complete-guide-to-mobile-app-development-2021.png"
                alt="Mobile Dev"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mobile App Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mobile application development is the set of processes and
                  procedures involved in writing software for small, wireless
                  computing devices.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://www.seamedu.com/blog/wp-content/uploads/2019/11/game_designvsgame_development02-4.jpg"
                alt="GameDev"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Game Development
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Video game development is the process of developing a video
                  game. The effort is undertaken by a developer, ranging from a
                  single person to an international .
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://miro.medium.com/max/640/1*ngkHgQq7ij1NBNr62er3zA.png"
                alt="Cloud Service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cloud Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The term cloud services is a broad category that encompasses
                  the myriad IT resources provided over the Internet. The
                  expression may also be used to describe.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://www.also.com/ec/cms5/6000/blog/future-technologies/future-technologies-the-best-tools-and-techniques-for-network-security%E2%80%AF_398157751_800px.jpg"
                alt="Cloud Service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Network Security
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Network security is a set of technologies that protects the
                  usability and integrity of a company's infrastructure by
                  preventing the entry or proliferation within a network of a
                  wide variety of potential threats.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://www.cleo.com/sites/default/files/styles/inline_images/public/inline-images/application-integration-diagram%20.png?itok=k88-Hg-N"
                alt="Cloud Service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  System Integration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The process of creating a complex information system that may
                  include designing or building a customized architecture or
                  application, integrating it with new or existing hardware,
                  packaged and custom software, and communications.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://businessworld.net/storage/242/managing-the-technology-procurement-process-office-technology-consultants.-Business-World.jpg"
                alt="Cloud Service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Technology Procurement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Technology procurement is a term used to describe purchasing
                  of technology-based equipment for a business or organization.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://community.connection.com/wp-content/uploads/2021/04/1297528-BusinessContinuityDisasterRecovery-BLOG.jpg"
                alt="Cloud Service"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Business Continuity & Disaster Recovery
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Business continuity (BC) and disaster recovery (DR) are
                  closely related practices that support an organization's
                  ability to remain operational after an adverse event.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;
