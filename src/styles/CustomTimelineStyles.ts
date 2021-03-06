import styled from 'styled-components'

// Components
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

// Configs
import device from '@Config/devices.config'

export const Container = styled.div`
  width: 100%;

  .MuiTimelineItem-missingOppositeContent::before {
    flex: unset;
    padding: 0;
  }

  .MuiTimeline-root {
    margin-left: 0;
  }

  li.MuiTimelineItem-root {
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    width: 85%;
  }
`

export const StyPaper = styled(Paper).attrs(() => ({
  elevation: 3,
}))`
  padding: 6px 16px;
`

export const H6 = styled(Typography).attrs(() => ({
  variant: 'h6',
  component: 'h4',
}))``

export const Subtitle1 = styled(Typography).attrs(() => ({
  variant: 'subtitle1',
  component: 'h5',
}))``

export const Subtitle2 = styled(Typography).attrs(() => ({
  variant: 'subtitle2',
  component: 'h6',
}))``

export const Body1 = styled(Typography).attrs(() => ({
  variant: 'body1',
  component: 'h6',
}))``
