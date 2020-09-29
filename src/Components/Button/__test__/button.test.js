import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Button from '../button'
import {render, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'


afterEach(cleanup);
it('renders without crashing',()=> {
    const div= document.createElement('div');
    ReactDOM.render(<Button></Button>, div)
})

it('renders button curreclty',()=> {
    const {getByTestId} = render(<Button label="save"> </Button>);
 expect(getByTestId('button')).toHaveTextContent("save")
})


it('renders button curreclty',()=> {
    const {getByTestId} = render(<Button label="save1"> </Button>);
 expect(getByTestId('button')).toHaveTextContent("save1")
})


it('matches snapshot',()=> {
   const tree = renderer.create(<Button label="save"> </Button>).toJSON();
expect(tree).toMatchSnapshot();
})