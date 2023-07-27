'use client';
import {BoxContainer} from "@/app/BoxContainer";
import {Typography} from "@mui/material";
import Image from 'next/image'
import React from "react";
import {Box} from "@mui/system";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from "next/link";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";

export default function Home() {

    const SocialMediaIcon = (url: string, Icon: OverridableComponent<SvgIconTypeMap>) => <Box mx={0.5}><Link href={url} target="_blank"><Icon fontSize="large"/></Link></Box>;
    const CustomSocialMediaIcon = (url: string, imageSrc: string, alt: string) => (<Box mx={0.5}><Link href={url}  target="_blank"><Image
        src={imageSrc}
        alt={alt}
        height={'35'}
        width={'35'}
        priority
        style={{display: 'inline-block'}}
    /></Link></Box>);

    return (
        <BoxContainer>
            <Box display={'flex'} flex={1}>
                <Box flex={1} sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h2" sx={{fontWeight: 'bold'}}>Shane Jennings</Typography>
                    <Typography variant="h4" sx={{fontWeight: 'bold'}} color="text.secondary">
                        <ul>
                            <li>Full Stack Developer</li>
                            <li>Architect</li>
                            <li>Writer</li>
                        </ul>
                    </Typography>
                    <Box
                        sx={{
                            border: '1px solid #FFDE59',
                            p: 1,
                            alignSelf: 'flex-start',
                            display: 'flex'
                        }}
                        bgcolor='background.default'
                    >
                        {SocialMediaIcon("https://twitter.com/shanepjennings", TwitterIcon)}
                        {SocialMediaIcon("https://www.linkedin.com/in/shanepjennings/", LinkedInIcon)}
                        {SocialMediaIcon("https://github.com/Zinbo", GitHubIcon)}
                        {SocialMediaIcon("mailto: shanepjennings@gmail.com", EmailIcon)}
                        {CustomSocialMediaIcon("https://hashnode.com/@zinbo", "/hashnode.svg", "hashnode icon")}
                        {CustomSocialMediaIcon("https://app.daily.dev/Zinbo", "/dailydev.svg", "dailydev icon")}
                    </Box>
                </Box>
                <Box>
                    <Image
                        src="/me.png"
                        alt="Profile Picture"
                        height={'250'}
                        width={'250'}
                        priority
                        style={{borderRadius: '50%', border: '2px solid #FFDE59'}}
                    />
                </Box>
            </Box>

        </BoxContainer>
    )
}
