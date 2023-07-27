import React, {ReactElement} from "react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {InnerBoxContainer} from "@/app/InnerBoxContainer";
import {BoxContainer} from "@/app/BoxContainer";
import Image from "next/image";

export default function LatestArticles() {

    const DevIcon = (name: string) => (<Box m={1}><Image
        src={`/${name}.svg`}
        alt={name}
        height={'35'}
        width={'35'}
        priority
        style={{display: 'inline-block'}}
    /></Box>);

    const Subsection = (props: { id: string, title: string, description: string[], icons: string[][] }) => {
        return (
            <Box id={props.id} flex={1} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Box id={`${props.id}-description`} flexBasis={"50%"}>
                    <Typography variant="h4" sx={{fontWeight: 'bold'}}>{props.title}</Typography>
                    <Typography color="text.secondary">
                        <ul>
                            {props.description.map(d => (<li key={d}>{d}</li>))}
                        </ul>
                    </Typography>
                </Box>
                <InnerBoxContainer id={`${props.id}-icons`}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        {props.icons.map(row => (
                            <Box sx={{display: 'flex'}} key={row[0]}>
                                {row.map(icon => DevIcon(icon))}
                            </Box>
                        ))}
                    </Box>
                </InnerBoxContainer>
            </Box>)
    }

    const Article = () => (
        <InnerBoxContainer id={`title-of-article`}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Box id="article-image">
                    <Image src={"/article-placeholder-image.png"} alt={"article-image"} width={1000} height={1000}/>
                </Box>
                <Box id="article-title">
                    <Typography sx={{fontWeight: 'bold'}} variant="h6">Adding Correlation IDs to Easily Track Down Errors - Spring Boot 3 Edition</Typography>
                </Box>
                <Box id="article-info" display={"flex"}>
                    <Typography color="text.secondary" sx={{mr:1}} fontSize={"12px"}>May 9, 2023</Typography>
                    <Typography color="text.secondary" fontSize={"12px"}>7 min read</Typography>
                </Box>
                <Box id="article-description">
                    <Typography>How to use correlation IDs in Spring Boot 3 to easily track successful flows and errors
                        throughout your services · You may have read my previous post,...</Typography>
                </Box>
            </Box>
        </InnerBoxContainer>)

    return (<BoxContainer>
        <Box display={'flex'} flex={1}>
            <Box flex={1} sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h2" sx={{fontWeight: 'bold'}}>Latest Articles</Typography>
                <Box display={'flex'}>
                    <Article/>
                    <Box ml={4}></Box>
                    <Article/>
                    <Box ml={4}></Box>
                    <Article/>
                </Box>
            </Box>
        </Box>
    </BoxContainer>)
}