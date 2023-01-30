import React from 'react'
import { About } from '../about/about.component'
import { ShortInfo } from '../shortinfo/shortinfo.component'
import { Skill } from '../skill/skill.component'
import { Work } from '../work/work.component'


export function HomePage(){

    return(
        <>
            <ShortInfo></ShortInfo>
            <About></About>
            <Skill></Skill>
            <Work></Work>
        </>
    )
}