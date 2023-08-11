import React, {useEffect, useState} from "react";
import {Box} from "@mui/system";
import {Button, Grid, Paper, Typography} from "@mui/material";
import {InnerBoxContainer} from "@/components/InnerBoxContainer";
import Image from "next/image";
import Section from "@/components/Section";
import client from "@/utils/apollo-client";
import {gql} from "@apollo/client";

export interface Article {
    title: string
    brief: string
    slug: string
    coverImage: string
    dateAdded: string
    readTime: number
    views: number
}

async function getArticles(): Promise<Article[]> {
    const {data} = await client.query({
        query: gql`
             {
              user(username: "zinbo") {
                publication {
                  posts(page: 0) {
                    title
                    brief
                    slug
                    coverImage
                    readTime
                    dateAdded
                    views
                  }
                }
              }
            }           
`,
    });
    return data.user.publication.posts.slice(0, 3);
}

export default function LatestArticles() {

    const [isHoveredId, setIsHoveredId] = useState( '' );
    let projectList;

    function handleMouseOver( ID: string ) {
        return () => {
            setIsHoveredId( ID );
        }
    }

    function handleMouseOut() {
        setIsHoveredId( '' );
    }


    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        async function getData() {
            setArticles(await getArticles());
        }

        getData();
    }, [])

    const ArticleScale = ({data}: { data: Article }) => (
        <Grid container item lg={4} md={6} sm={12} xs={12}>
            <InnerBoxContainer direction={"column"} sx={{transition: "transform 0.15s ease-in-out",
                ':hover': { transform: "scale3d(1.05, 1.05, 1)" }, p: 2}}>
                <Box id="article-image">
                    <Image src={data.coverImage} alt={"article-image"} width={1000} height={1000}/>
                </Box>
                <Box id="article-title">
                    <Typography sx={{fontWeight: 'bold'}} variant="h6">{data.title}</Typography>
                </Box>
                <Box id="article-info" display={"flex"}>
                    <Typography color="text.secondary" sx={{mr: 1}}
                                fontSize={"12px"}>{new Date(data.dateAdded).toLocaleString('default', {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}</Typography>
                    <Typography color="text.secondary" fontSize={"12px"}>{data.readTime} min read</Typography>
                </Box>
                <Box id="article-description">
                    <Typography>{data.brief}</Typography>
                </Box>
            </InnerBoxContainer>
        </Grid>
    )


    const ArticleShadow = ({data}: { data: Article }) => (
        <Grid container item lg={4} md={6} sm={12} xs={12}>
            <Paper
                onMouseOver={ handleMouseOver(data.title) }
                onMouseOut={ handleMouseOut }

                sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #FFDE59',
                backgroundColor: 'background.default',
                p: 2
            }}
            elevation={isHoveredId == data.title ? 10: 0}>
                <Box id="article-image">
                    <Image src={data.coverImage} alt={"article-image"} width={1000} height={1000}/>
                </Box>
                <Box id="article-title">
                    <Typography sx={{fontWeight: 'bold'}} variant="h6">{data.title}</Typography>
                </Box>
                <Box id="article-info" display={"flex"}>
                    <Typography color="text.secondary" sx={{mr: 1}}
                                fontSize={"12px"}>{new Date(data.dateAdded).toLocaleString('default', {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}</Typography>
                    <Typography color="text.secondary" fontSize={"12px"}>{data.readTime} min read</Typography>
                </Box>
                <Box id="article-description">
                    <Typography>{data.brief}</Typography>
                </Box>
            </Paper>
        </Grid>
    )

    return (
        <Section title="Latest Articles">
            <Grid container spacing={3} mb={10}>
                {articles?.map(a => <ArticleShadow key={a.title} data={a}/>)}
            </Grid>
            <Grid container spacing={3}>
                {articles?.map(a => <ArticleScale key={a.title} data={a}/>)}
            </Grid>
            <Button color="secondary" variant="contained" sx={{fontWeight: 'bold', alignSelf: 'center', mt: 3}}
                    href={"https://stacktobasics.com/"} target="_blank">More Articles</Button>
        </Section>)
}