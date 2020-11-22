import React, {} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'


const ButtonLink = styled.button
`
    color: white;
     width: 180px;
     height: 30px;
     border:none;
     border:solid 2px black;
     border-radius: 5px;
     background: rgba(0, 0, 0,0);
     font-size: 10px;
     margin: 10px 20px;
     &:hover {
        border:solid 2px red;
        cursor: pointer;
        
      }
`

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      
    },
    title: {
      flexGrow: 0.9,
      fontFamily:
          'roboto',
          fontWeight: 120,
    },
  }));


export default function Heading(){
    const classes = useStyles();

    return(
        <div>
            <AppBar style={{ background: '#558899' }}>
                <Toolbar >
                    <Typography className={classes.title}>
                        TUGAS PRAKTIKUM RSBK KELOMPOK 18
                    </Typography>
                    <ButtonLink onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://playvalorant.com';
                        }}
                    >(Game) VALORANT
                    </ButtonLink>
                    <ButtonLink onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://pointblank.id';
                        }}
                    >(Game) POINT BLANK
                    </ButtonLink>
                    <ButtonLink onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://lostsaga.gnjoy.id';
                        }}
                    >(Game) LOST SAGA
                    </ButtonLink>
                    <ButtonLink onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://ayodance.megaxus.com';
                        }}
                    >(Game) AYO DANCE
                    </ButtonLink>
                    <ButtonLink onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://na.leagueoflegends.com';
                        }}
                    >(Game) LEAGUE OF LEGENDS
                    </ButtonLink>
                    <ButtonLink onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://divianis.my.id';
                        }}
                    >(+) SITUS BIODATA
                    </ButtonLink>
                </Toolbar>
            </AppBar>
        </div>
       
    )
}
