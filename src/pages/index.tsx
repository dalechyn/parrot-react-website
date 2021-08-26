import React from 'react'
import { Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import PButton from 'components/PButton'
import Wallpaper from './../../assets/wallpaper.png'
import Safety from 'containers/FeaturesSectoin/assets/SafetyCertificate.svg'
import cloud from '../../assets/icons/Cloud.svg'
import home from '../../assets/icons/Home.svg'
import oreo from '../../assets/oreo 1.svg'
import tools from '../../assets/screenshot.png'
import shell from '../../assets/icons/shell.svg'
import ToolsSection from 'containers/ToolsSection'
import cls from 'classnames'
import HTBSection from 'containers/HTBSection'
import Welcome from 'containers/Welcome'
import FeaturesSection from 'containers/FeaturesSectoin'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(5),
    fontSize: 30
  },
  wallpaper: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.1,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), #06043E), url('${Wallpaper}')`
  },
  features: {
    marginTop: 130,
    [theme.breakpoints.down('md')]: {
      marginTop: 50
    }
  },
  trustBlock: {
    marginTop: 90
  },
  trustLogosBlock: {
    marginTop: 40
  },
  toolsBlock: {
    marginTop: 90,

    paddingLeft: 16,
    paddingRight: 16
  },
  developerBlock: {
    marginTop: 115
  },
  devPaper: {
    padding: '60px 74px'
  },
  statsBlock: {
    marginTop: 217,
    marginBottom: 173
  },
  versionsBlock: {
    marginTop: 173
  },
  iconHolder: {
    width: 64,
    height: 64,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 21
  },
  homeIcon: {
    background: 'linear-gradient(153.43deg, #03F0FF 16.67%, #03FF77 100%)'
  },
  securityIcon: {
    background: 'linear-gradient(145.47deg, #FAFD50 21.97%, #FD50D7 96.3%)'
  },
  cloudIcon: {
    background: 'linear-gradient(146.41deg, #00D1FF 8.11%, #020DFF 94.7%)'
  },
  versionsPaper: {
    padding: 32,
    height: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  htbBlock: {
    marginTop: 32,
    paddingLeft: 16,
    paddingRight: 16
  },
  developBlock: {
    marginTop: 154
  }
}))

const Index = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} justifyContent="center">
      <div className={classes.wallpaper} />
      <Welcome />
      <FeaturesSection className={classes.features} />
      <Grid
        className={classes.trustBlock}
        container
        justifyContent="center"
        alignItems="center"
        item
        xs={10}
      >
        <Grid item xs={10}>
          <Typography variant="body2" align="center">
            Trusted by cybersecurity professionals around the world
          </Typography>
        </Grid>
        <Grid
          className={classes.trustLogosBlock}
          container
          item
          xs={10}
          md={6}
          spacing={4}
          justifyContent="space-between"
        >
          <img src={oreo} alt="oreo" />
          <img src={oreo} alt="oreo" />
          <img src={oreo} alt="oreo" />
          <img src={oreo} alt="oreo" />
          <img src={oreo} alt="oreo" />
        </Grid>
      </Grid>
      <Grid className={classes.toolsBlock} container item xs={9}>
        <ToolsSection />
      </Grid>
      <Grid container spacing={4} item xs={9} style={{ marginTop: 32 }}>
        <Grid container item xs={6}>
          <Paper>
            <Box display="flex" justifyContent="space-between" flexDirection="column" height="100%">
              <Box padding="60px">
                <Typography variant="h3">Hacking tools at your fingertips</Typography>
                <Typography variant="body1">
                  When it comes to general tools and functional features, Parrot OS wins over Kali
                  Linux. Parrot OS has all the tools that are available in Kali Linux and also adds
                  its own tools. There are several tools you will find on ParrotOS that is not found
                  on Kali Linux.
                </Typography>
              </Box>
              <img
                src={tools}
                style={{ display: 'block', marginLeft: 'auto', maxWidth: '90%' }}
                alt="Parrot Tools"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid container item xs={6}>
          <Paper>
            <Box display="flex" justifyContent="space-between" flexDirection="column" height="100%">
              <Box padding="60px">
                <Typography variant="h3">This block should be replaced</Typography>
                <Typography variant="body1">
                  When it comes to general tools and functional features, Parrot OS wins over Kali
                  Linux. Parrot OS has all the tools that are available in Kali Linux and also adds
                  its own tools. There are several tools you will find on ParrotOS that is not found
                  on Kali Linux.
                </Typography>
              </Box>
              <img
                src={tools}
                style={{ display: 'block', marginLeft: 'auto', maxWidth: '90%' }}
                alt="Parrot Tools"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid className={classes.developerBlock} container item xs={6}>
        <Typography variant="h2" style={{ fontSize: 64 }} align="center" paragraph>
          Parrot is developer friendly. Secure in a Linux Environment.
        </Typography>
        <Typography variant="body1" style={{ fontSize: 20 }} align="center">
          Compilers, interpreters and intelligent editors. All you need to start programming comes
          out of the box, with the most secure Linux environment.
        </Typography>
      </Grid>
      <Grid className={classes.developerBlock} container item xs={9} spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.devPaper}>
            <Typography variant="h3" paragraph>
              Developer tools
            </Typography>
            <Typography variant="body1">
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.devPaper}>
            <Typography variant="h3" paragraph>
              Compilers & interpreters
            </Typography>
            <Typography variant="body1">
              Our tools are designed to be compatible with as many devices as possible via
              containerization technologies like Docker or Podman.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid className={classes.statsBlock} container item xs={9} justifyContent="space-around">
        <Grid item xs={3} style={{ fontSize: 48 }}>
          <Typography variant="h3" align="center">
            <span style={{ fontSize: 48 }}>+2</span>
            <br />
            Million downloads
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ fontSize: 48 }}>
          <Typography variant="h3" align="center">
            <span style={{ fontSize: 48 }}>+8k</span>
            <br />
            Forum users
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h3" align="center">
            <span style={{ fontSize: 48 }}>17</span>
            <br />
            Worldwide PoP
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.versionsBlock} container item xs={9} spacing={4}>
        <Grid item xs={4}>
          <Paper className={classes.versionsPaper}>
            <div className={cls(classes.iconHolder, classes.homeIcon)}>
              <img src={home} alt="Home version" />
            </div>
            <Typography variant="h3" paragraph>
              Home Edition
            </Typography>
            <Typography variant="body1" paragraph>
              Home edition is designed for daily use, privacy and software development. Parrot Tools
              can be manually installed to assemble a custom and lightweight pentesting environment.
            </Typography>
            <PButton variant="contained" to="/download" style={{ width: 177 }}>
              Download OS
            </PButton>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.versionsPaper}>
            <div className={cls(classes.iconHolder, classes.securityIcon)}>
              <img src={Safety} alt="Security version" />
            </div>
            <Typography variant="h3" paragraph>
              Security Edition
            </Typography>
            <Typography variant="body1" paragraph>
              Security Edition is a special purpose operating system designed for Penetration
              Testing and Red Team operations. It contains a full arsenal of ready-to use pentesting
              tools.
            </Typography>
            <PButton variant="contained" to="/download" style={{ width: 177 }}>
              Download OS
            </PButton>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.versionsPaper}>
            <div className={cls(classes.iconHolder, classes.cloudIcon)}>
              <img src={cloud} alt="Cloud version" />
            </div>
            <Typography variant="h3" paragraph>
              Cloud Edition
            </Typography>
            <Typography variant="body1" paragraph>
              IoT & Cloud Appliances are special editions of Parrot Security made for embedded
              devices, cloud environments, virtual machines and other special deployments.
            </Typography>
            <PButton variant="contained" to="/download" style={{ width: 177 }}>
              Download OS
            </PButton>
          </Paper>
        </Grid>
      </Grid>
      <Grid className={classes.htbBlock} container item xs={9}>
        <HTBSection />
      </Grid>
      <Grid
        className={classes.developBlock}
        container
        item
        xs={9}
        direction="column"
        alignItems="center"
      >
        <Box className={classes.iconHolder} style={{ background: '#FFF' }}>
          <img src={shell} alt="Shell Icon" />
        </Box>
        <Typography variant="h1" paragraph align="center">
          Develop for Parrot<span style={{ fontWeight: 300 }}>OS</span>
        </Typography>
        <Typography variant="body1" align="center">
          Different versions for different players, role your need and play freely.
        </Typography>
        <PButton variant="contained" to="/contribute" style={{ width: 165, marginTop: 37 }}>
          Learn More
        </PButton>
      </Grid>
    </Grid>
  )
}

export default Index