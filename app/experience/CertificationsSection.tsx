import React, {ReactNode} from "react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {InnerBoxContainer} from "@/app/InnerBoxContainer";
import {BoxContainer} from "@/app/BoxContainer";
import Image from "next/image";

export default function CertificationsSection() {

    const Certification = ({title, imageName}: {title: string, imageName: string}) => (
        <InnerBoxContainer sx={{flex: 1}} >
            <Box sx={{display: 'flex', flexDirection: 'column'}} flex={1} >
                <Box alignSelf="center" flex={1}><Image src={`/${imageName}.png`} alt={"article-image"} width={200} height={200}/></Box>
                <Typography>{title}</Typography>
            </Box>
        </InnerBoxContainer>)

    const Cert = ({children} : {children: ReactNode}) => (
        <Box
            sx={{
                border: '1px solid #FFDE59',
                p: 1,
                flex: 1,
            }}
            bgcolor='background.default'
        >
            {children}
        </Box>);

    const Cert2 = ({title, imageName}: {title: string, imageName: string}) => (
        <Box
            sx={{
                border: '1px solid #FFDE59',
                p: 1,
                flex: 1,
                display: 'flex'
            }}
            bgcolor='background.default'
        >
            <Box sx={{display: 'flex', flexDirection: 'column'}} flex={1} >
                <Box alignSelf="center" flex={1}><Image src={`/${imageName}.png`} alt={"article-image"} width={200} height={200}/></Box>
                <Typography>{title}</Typography>
            </Box>
        </Box>);

    return (<BoxContainer>
        <Box display={'flex'} flex={1}>
            <Box flex={1} sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h2" sx={{fontWeight: 'bold'}}>Certifications</Typography>

                <Box display={'flex'} flex={1} gap={"50px"}>
                    <Certification title="CKAD: Certified Kubernetes Application Developer" imageName="ckad"/>
                    <Certification title="AWS Certified Solutions Architect – Associate" imageName="aws-architect-cert"/>
                    <Certification title="AWS Certified Developer – Associate" imageName="aws-developer-cert"/>
                </Box>
            </Box>
        </Box>
    </BoxContainer>)
}