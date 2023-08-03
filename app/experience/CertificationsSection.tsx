import React, {ReactNode} from "react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {InnerBoxContainer} from "@/components/InnerBoxContainer";
import {BoxContainer} from "@/components/BoxContainer";
import Image from "next/image";
import Section from "@/components/Section";

export default function CertificationsSection() {

    const Certification = ({title, imageName}: { title: string, imageName: string }) => (
        <InnerBoxContainer sx={{flex: 1}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}} flex={1}>
                <Box alignSelf="center" flex={1}>
                    <Image src={`/${imageName}.png`} alt={"article-image"} width={200} height={200}/>
                </Box>
                <Typography>{title}</Typography>
            </Box>
        </InnerBoxContainer>)

    return (
        <Section title="Certifications">

            <Box display={'flex'} flex={1} gap={"50px"}>
                <Certification title="CKAD: Certified Kubernetes Application Developer" imageName="ckad"/>
                <Certification title="AWS Certified Solutions Architect – Associate" imageName="aws-architect-cert"/>
                <Certification title="AWS Certified Developer – Associate" imageName="aws-developer-cert"/>
            </Box>
        </Section>)
}