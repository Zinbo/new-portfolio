import {Box} from "@mui/system";
import {Grid, styled, Typography} from "@mui/material";
import {InnerBoxContainer} from "@/components/InnerBoxContainer";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import {BoxContainer} from "@/components/BoxContainer";
import React from "react";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";
import Link from "next/link";
import styles from './app.module.css'
import DailydevIcon from '../public/dailydev.svg';
import HashnodeIcon from '../public/hashnode.svg';

export default function Title() {

    const withHoverEffect = (IconComponent: any) => styled(IconComponent)`
      transition: color 0.3s;

      &:hover {
        color: #FFDE59;
      }`;

    const SocialMediaIcon = (url: string, Icon: OverridableComponent<SvgIconTypeMap>) => (
        <Box mx={0.5}>
            <Link href={url} target="_blank">
                {React.createElement(withHoverEffect(Icon), {fontSize: 'large'})}
            </Link>
        </Box>);
    const CustomSocialMediaIcon = (url: string, Icon: any) => {
        return (
            <Box mx={0.5}><Link href={url} target="_blank">
                <Icon height="35" width="35" className={styles.customicon}/>
            </Link></Box>)
    };

    return (
        <BoxContainer>
            <Grid container>
                <Grid container item md={4} sm={12} order={{md: 2, sm: 1}} justifyContent={{md:'flex-end', xs:'center'}} alignItems={'flex-start'}>
                    <Image
                        src="/me.png"
                        alt="Profile Picture"
                        height={'250'}
                        width={'250'}
                        priority
                        style={{borderRadius: '50%', border: '2px solid #FFDE59'}}
                    />
                </Grid>
                <Grid container item md={8} sm={12} order={{md: 1, sm: 2}}>
                    <Grid item container sm={12} justifyContent={{md:'flex-start', xs:'center'}}>
                        <Typography variant="h2" sx={{fontWeight: 'bold'}}>Shane Jennings</Typography>
                    </Grid>
                    <Grid item container sm={12} justifyContent={{md:'flex-start', xs:'center'}}>
                        <Typography variant="h4" sx={{fontWeight: 'bold'}} color="text.secondary">
                            <ul>
                                <li>Full Stack Developer</li>
                                <li>Architect</li>
                                <li>Writer</li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} justifyContent={{md:'flex-start', xs:'center'}}>
                        <InnerBoxContainer xs={"auto"}>
                            {SocialMediaIcon("https://twitter.com/shanepjennings", TwitterIcon)}
                            {SocialMediaIcon("https://www.linkedin.com/in/shanepjennings/", LinkedInIcon)}
                            {SocialMediaIcon("https://github.com/Zinbo", GitHubIcon)}
                            {SocialMediaIcon("mailto: shanepjennings@gmail.com", EmailIcon)}
                            {CustomSocialMediaIcon("https://hashnode.com/@zinbo", HashnodeIcon)}
                            {CustomSocialMediaIcon("https://app.daily.dev/Zinbo", DailydevIcon)}
                        </InnerBoxContainer>
                    </Grid>
                </Grid>

            </Grid>
        </BoxContainer>
    )
}