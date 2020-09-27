import { Avatar, ButtonBase, Grid, styled, Tooltip } from '@material-ui/core'
import React from 'react'
import { useRouter } from 'next/router'

const RootStyled = styled('div')({
  display: 'inline-block',
  backgroundColor: 'black',
  boxShadow: '2px 2px 5px #999999, 0px -2px 0px #000000',
  minHeight: 'calc(100vh - 56px)',
  padding: 8,
})

const avatars = '1'.repeat(10).split('')

export const AppSidebar: React.FC<any> = props => {
  const router = useRouter()

  return (
    <RootStyled>
      <Grid container direction='column' spacing={1}>
        {avatars.map(function renderAvatars(value, index) {
          return (
            <Grid item key={index}>
              <Tooltip placement='right' title={<Avatar>{index + 1}</Avatar>}>
                <ButtonBase
                  onClick={() => {
                    router.push({
                      pathname: `/avatars/${index + 1}`,
                    })
                  }}
                >
                  <Avatar>{index + 1}</Avatar>
                </ButtonBase>
              </Tooltip>
            </Grid>
          )
        })}
      </Grid>
    </RootStyled>
  )
}
