import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import {BoxContainer} from "@/components/BoxContainer";
import React, {RefObject} from "react";
import {ExperienceBox} from "@/app/experience/ExperienceBox";
import Xarrow from "react-xarrows";
import Section from "@/components/Section";


export default function ExperienceSection() {

    const circleRefs: RefObject<SVGSVGElement>[] = [];

    const Lines = () => {
        let prevRef : RefObject<SVGSVGElement>|null = null;
        const lines:  React.JSX.Element[] = [];

        circleRefs.forEach(ref => {
            if(prevRef === null) {
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
                <ExperienceBox title="J.P. Morgan" startDate='2020' endDate='present'
                               description={'Working in the Investment Banking space as an IC. Leading the upskilling effort of 40+ Java developers through Spotify\'s Chapter Model. Playing a pivotal role in architecting the move to cloud-native and the cloud.'}
                               leftAligned={true}
                               circleRefs={circleRefs}
                />
                <ExperienceBox title="Goldman Sachs" startDate='2015' endDate='2020'
                               description={'Led the development of revamping the existing CRM platform from an archaic monolith to a scalable microservices architecture, as well as adding features long sort after by the business. Led the development of banker productivity tools, including integration with Outlook.'}
                               leftAligned={false}
                               circleRefs={circleRefs}
                />
                <ExperienceBox title="Yokogawa Marex" startDate='2014' endDate='2015'
                               description={'Worked on the ExaQuantum system, a vital Plant Information Management System, written in C++.'}
                               leftAligned={true}
                               circleRefs={circleRefs}
                />
                <ExperienceBox title="Stainless Games" startDate='2014' endDate='2014'
                               description={'Worked on the game "Magic Duels", written in C++ using their own in-house games engine.'}
                               leftAligned={false}
                               circleRefs={circleRefs}
                />
                <ExperienceBox title="Thales" startDate='2011' endDate='2012'
                               description={'Developed a green-field system to provide real-time traffic information to the public as well as an admin system used by National Highways.'}
                               leftAligned={true}
                               circleRefs={circleRefs}
                />
                <ExperienceBox title="University of York" startDate='2009' endDate='2014'
                               description={'Completed a First-Class Honours Integrated Masters MEng. Degree in Computer Science with Artificial Intelligence.'}
                               leftAligned={false}
                               circleRefs={circleRefs}
                />
                <Lines/>
        </Section>)
}