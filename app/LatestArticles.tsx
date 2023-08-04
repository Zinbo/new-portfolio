import React, {useEffect, useState} from "react";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
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

export default function LatestArticles() {

    const [articles, setArticles] = useState<Article[]>([]);

    async function getArticles() {
        console.log("Gonna get client data...")
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
        console.log(`Got data: ${data}`)
        setArticles(data.user.publication.posts.slice(0, 3));
    }


    useEffect(() => {
        console.log("In use effect...");
        getArticles();
        console.log("Finished use effect");
    }, [])


    const Article = ({data}: { data: Article }) => (
        <InnerBoxContainer id={data.title} sx={{p: 2}}>
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
        </InnerBoxContainer>)

    return (
        <Section title="Latest Articles">
            <Box display={'flex'} gap='20px'>
                {articles?.map(a => <Article key={a.title} data={a}/>)}
                {/*                <Article/>
                <Box ml={4}></Box>
                <Article/>
                <Box ml={4}></Box>
                <Article/>*/}
            </Box>
        </Section>)
}