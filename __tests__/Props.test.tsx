/**
* @jest-environment jsdom
*/
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Post from '../components/Post'
import { POST } from '../types/Types'

describe('Post component with give props', () => {
    let dummyProps: POST
    beforeEach(() => {
        dummyProps = {
            userId: 1,
            id: 1,
            title: 'dummy title 1',
            body:'dummy body 1',
        }
    })
    it('Should render correctly wit given props value', () => {
        render(<Post {...dummyProps} />)
        expect(screen.getByText(dummyProps.id)).toBeInTheDocument()
        expect(screen.getByText(dummyProps.title)).toBeInTheDocument()
        // screen.debug()
    })
})