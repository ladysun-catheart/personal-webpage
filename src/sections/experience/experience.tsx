import React from 'react'
import Box from '../../components/box'
import ListExp from 'src/components/listExp'
import { expList } from 'src/config/exp'

const Experience = () => {
    return (
        <Box title="Experience">
          {expList.map(exp => <ListExp {...exp}/>)}
        </Box>
    )
}

export default Experience
