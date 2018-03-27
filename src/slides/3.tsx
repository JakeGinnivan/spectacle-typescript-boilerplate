import * as React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
            Standard List
        </Heading>
        <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
        </List>
    </Slide>
)
