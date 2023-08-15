import {Grid} from "@mui/material";
import React, {RefObject} from "react";
import {ExperienceBox} from "@/app/experience/ExperienceBox";
import Xarrow from "react-xarrows";
import Section from "@/components/Section";
import {ExperienceBoxXs} from "@/app/experience/ExperienceBoxXs";

interface Experience {
    title: string
    description: string
    startDate: string
    endDate: string
}

const jobs: Experience[] = [
    {
        title: "J.P. Morgan",
        startDate: '2020', endDate: 'present',
        description: 'Working in the Investment Banking space as an IC. Leading the upskilling effort of 40+ Java developers through Spotify\'s Chapter Model. Playing a pivotal role in architecting the move to cloud-native and the cloud.'
    },
    {
        title: "Goldman Sachs", startDate: '2015', endDate: '2020',
        description: 'Led the development of revamping the existing CRM platform from an archaic monolith to a scalable microservices architecture, as well as adding features long sort after by the business. Led the development of banker productivity tools, including integration with Outlook.'

    },
    {
        title: "Yokogawa Marex", startDate: '2014', endDate: '2015',
        description: 'Worked on the ExaQuantum system, a vital Plant Information Management System, written in C++.'
    },
    {
        title: "Stainless Games", startDate: '2014', endDate: '2014',
        description: 'Worked on the game "Magic Duels", written in C++ using their own in-house games engine.'
    },
    {
        title: "Thales", startDate: '2011', endDate: '2012',
        description: 'Developed a green-field system to provide real-time traffic information to the public as well as an admin system used by National Highways.'
    },
    {
        title: "University of York", startDate: '2009', endDate: '2014',
        description: 'Completed a First-Class Honours Integrated Masters MEng. Degree in Computer Science with Artificial Intelligence.'
    }
]

export default function ExperienceSection() {

    const largerElementsRefs: RefObject<SVGSVGElement>[] = [];
    const smallerElementsRefs: RefObject<any>[] = [];

    const Lines = ({refs}: { refs: RefObject<any>[] }) => {
        let prevRef: RefObject<SVGSVGElement> | null = null;
        const lines: React.JSX.Element[] = [];

        refs.forEach(ref => {
            if (prevRef === null) {
                prevRef = ref;
                return;
            }

            lines.push(<Xarrow
                start={prevRef}
                end={ref}
                showHead={false}
                color="#FFDE59"
            />)
            prevRef = ref;
        })
        return <>{lines}</>
    }

    return (
        <Section title="Experience">
            <Grid container display={{xs: 'none', md: 'flex'}}>
                {jobs.map((job, index) => (
                    <ExperienceBox key={index} title={job.title} startDate={job.startDate} endDate={job.endDate}
                                   description={job.description}
                                   leftAligned={index % 2 === 0}
                                   circleRefs={largerElementsRefs}/>))}
                <Lines refs={largerElementsRefs}/>
            </Grid>
            <Grid container rowSpacing={10} display={{xs: 'flex', md: 'none'}}>
                {jobs.map((job, index) => (
                    <ExperienceBoxXs key={index} title={job.title} startDate={job.startDate} endDate={job.endDate}
                                     description={job.description}
                                     refs={smallerElementsRefs}/>))}
                <Lines refs={smallerElementsRefs}/>
            </Grid>
        </Section>)
}