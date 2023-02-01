import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { marked } from 'marked';

marked.setOptions( {
    breaks: true
} );

export default class App extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            markdown: ( `# Heading 1
## heading 2
[Google](https://google.com)

\`code\`

    code block

- list item

> Block Quote

**Bold**

![Image](https://images.pexels.com/photos/9595458/pexels-photo-9595458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
`),
        };
    }

    updateMarkdown( markdown )
    {
        this.setState( { markdown } );
    }

    render()
    {
        let inputStyle = {
            minWidth: '33vw',
            height: '50vh',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0.7rem'
        };
        let outputStyle = {
            maxWidth: '33vw',
            minHeight: '50vh',
            background: '#DCDCDC',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0.7rem',
            overflowX: 'scroll'
        };
        return (
            <Container fluid className='App'>
                <Container>
                    <Row className='mt-4'>
                        <Col className='text-center'>
                            <h1>
                                <Badge className="text-align-center" bg="dark" variant="dark">
                                    Markdown Previewer
                                </Badge>
                            </h1>
                        </Col>
                    </Row>
                </Container>

                <Row className='m-4'>
                    <Col className='p-4'>
                        <Col className='text-center mt-4'>
                            <h4>
                                <Badge className='text-align-center' bg='secondary' variant='secondary'>
                                    Markdown Input
                                </Badge>
                            </h4>
                        </Col>
                        <Col className='mark-input text-center mt-4'>
                            <textarea className='input'
                                id='editor'
                                style={ inputStyle }
                                value={ this.state.markdown }
                                onChange={
                                    ( event ) =>
                                    {
                                        this.updateMarkdown( event.target.value );
                                    }
                                }
                            >
                            </textarea>
                        </Col>
                    </Col>

                    <Col className='p-4'>
                        <Col className='text-center mt-4'>
                            <h4>
                                <Badge className='text-align-center' bg='secondary' variant='secondary'>
                                    Markdown Preview
                                </Badge>
                            </h4>
                        </Col>
                        <Col
                            className='mt-4'
                            id='preview'
                            style={ outputStyle }
                            dangerouslySetInnerHTML={ { __html: marked( this.state.markdown ) } }
                        >
                        </Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}