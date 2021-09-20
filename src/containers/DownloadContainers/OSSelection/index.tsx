import { useState } from 'react'
import {
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Divider,
  Grid,
  makeStyles
} from '@material-ui/core'
import Left from 'assets/Left.svg'
import RouterLink from 'next/link'
import dynamic from 'next/dynamic'
import { useMeasure } from 'react-use'
import Carousel from 'components/Carousel'
import OSHome from 'containers/DownloadContainers/OSHome'
import cls from 'classnames'

const OSSecurity = dynamic(() => import('containers/DownloadContainers/OSSecurity'), {
  loading: function FallbackSecurity() {
    return (
      <Grid container justifyContent="center">
        <CircularProgress />
      </Grid>
    )
  }
})
const OSCloud = dynamic(() => import('containers/DownloadContainers/OSCloud'), {
  loading: function FallbackCloud() {
    return (
      <Grid container justifyContent="center">
        <CircularProgress />
      </Grid>
    )
  }
})

const useStyles = makeStyles(theme => ({
  arrow: {
    verticalAlign: 'middle',
    fill: theme.palette.text.secondary
  },
  gridHeader: {
    marginTop: 45
  },
  headerIcon: {
    width: 32,
    height: 32,
    margin: 'auto'
  },
  iconHolder: {
    width: 64,
    height: 64,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2)
    }
  },
  crumb: {
    textTransform: 'none',
    color: theme.palette.text.secondary
  },
  buttons: {
    gap: 24
  },
  osSelect: {
    textTransform: 'none',
    color: theme.palette.text.primary
  },
  selected: {
    color: theme.palette.primary.main
  },
  highlight: {
    borderRadius: '3px',
    top: '2px',
    left: 'initial',
    right: '0',
    height: '3px',
    backgroundColor: '#55ddff',
    transitionProperty: 'right, width',
    transitionDuration: '.3s',
    transitionTimingFunction: 'ease-in-out'
  },
  gridHr: {
    marginTop: theme.spacing(3)
  }
}))

const OSSelection = () => {
  const classes = useStyles()
  const [os, setOS] = useState<'home' | 'security' | 'cloud'>('home')
  const [homeButtonRef, { width: homeButtonWidth }] = useMeasure<HTMLButtonElement>()
  const [securityButtonRef, { width: securityButtonWidth }] = useMeasure<HTMLButtonElement>()
  const [cloudButtonRef, { width: cloudButtonWidth }] = useMeasure<HTMLButtonElement>()

  const osButtonsWidth = {
    home: homeButtonWidth,
    security: securityButtonWidth,
    cloud: cloudButtonWidth
  }

  const osButtonHighlightRight = {
    home: cloudButtonWidth + securityButtonWidth + 80,
    security: cloudButtonWidth + 40,
    cloud: 0
  }

  const osIndexes = {
    home: 0,
    security: 1,
    cloud: 2
  }

  return (
    <>
      <Grid container item xs={12} lg={10} justifyContent="space-between">
        <Breadcrumbs separator="|" aria-label="breadrcumb">
          <RouterLink href="/">
            <Button
              className={classes.crumb}
              startIcon={<Left className={classes.arrow} fill="textSecondary" />}
            >
              ParrotOS
            </Button>
          </RouterLink>
          <Button className={classes.crumb}>Versions</Button>
        </Breadcrumbs>
        <Grid
          className={classes.buttons}
          container
          item
          xs={12}
          sm
          justifyContent="flex-end"
          wrap="nowrap"
        >
          <Button
            ref={homeButtonRef}
            className={cls(classes.osSelect, { [classes.selected]: os === 'home' })}
            onClick={() => setOS('home')}
          >
            Home Edition
          </Button>
          <Button
            ref={securityButtonRef}
            className={cls(classes.osSelect, { [classes.selected]: os === 'security' })}
            onClick={() => setOS('security')}
          >
            Security Edition
          </Button>
          <Button
            ref={cloudButtonRef}
            className={cls(classes.osSelect, { [classes.selected]: os === 'cloud' })}
            onClick={() => setOS('cloud')}
          >
            Cloud Edition
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.gridHr} item xs={12} lg={10}>
        <Box position="relative" height="3px">
          <Divider
            className={classes.highlight}
            absolute
            style={{
              width: osButtonsWidth[os] + 16,
              right: osButtonHighlightRight[os]
            }}
          />
        </Box>
        <Divider variant="fullWidth" />
      </Grid>
      <Carousel
        indicators={false}
        autoPlay={false}
        swipe={false}
        navButtonsAlwaysInvisible
        animation="fade"
        index={osIndexes[os]}
      >
        <OSHome classesGeneral={classes} />
        <OSSecurity classesGeneral={classes} />
        <OSCloud classesGeneral={classes} />
      </Carousel>
    </>
  )
}

export default OSSelection
