import React from 'react'
import { CommentBox } from './CommentBox'
import { CommentList } from './CommentList'

export const App = () => {
    return (
        <div>
            I'm app component
            <CommentBox />
            <CommentList />
        </div>
    )
}
