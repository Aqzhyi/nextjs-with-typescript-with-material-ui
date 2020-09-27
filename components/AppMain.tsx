import { styled } from '@material-ui/core'
import React from 'react'

const SpanStyled = styled('span')({
  display: 'inline-block',
  verticalAlign: 'top',
  width: 'calc(100% - 56px)',
  minHeight: 'calc(100vh - 56px)',
  padding: 8,
})

export const AppMain: React.FC = props => {
  return <SpanStyled>{props.children}</SpanStyled>
}
