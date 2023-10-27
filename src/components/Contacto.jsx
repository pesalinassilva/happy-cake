import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button'

const Contacto = () => {
    return(
        <>
            <Container className='text-center mt-3'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Button variant="primary">Primary</Button>{' '}
            </Container>
        </>
    )
}

export default Contacto