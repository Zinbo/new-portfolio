import React, {useEffect, useState} from "react";
import {Box} from "@mui/system";
import {Grid, Typography} from "@mui/material";
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

    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        async function getData() {
            setArticles(await getArticles());
        }

        getData();
    }, [])


    const Article = ({data}: { data: Article }) => (
        <Grid container item md={4} sm={6} xs={12}>
            <InnerBoxContainer id={data.title}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
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
                </Box>
            </InnerBoxContainer>
        </Grid>
    )

    return (
        <Section title="Latest Articles">
            <Grid container spacing={3}>
                {articles?.map(a => <Article key={a.title} data={a}/>)}
            </Grid>
        </Section>)
}