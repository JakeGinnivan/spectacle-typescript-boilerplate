import * as React from 'react'
import { Slide, BlockQuote, Quote, Cite } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
        </BlockQuote>
    </Slide>
)
