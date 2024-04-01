import PropTypes from 'prop-types';
import { Card, Col, Row, ListGroup } from "react-bootstrap";

export const PokeCard = ({ pokemon }) => {
    const { name, sprites, stats } = pokemon;

    const spriteUrl = sprites?.other?.["dream_world"]?.front_default
        || sprites?.other?.["home"]?.front_default
        || sprites?.front_default;

    return (
        <>
            <Row>
                <Col lg={6} className="d-flex justify-content-center mb-4">
                    <Card style={{ width: '30rem' }} className="p-4">
                        <Card.Img variant="top" src={spriteUrl} />
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <div className="text-center fw-bold fs-3">
                                        {name.toUpperCase()}
                                    </div>
                                </ListGroup.Item>
                                {stats.map(item => (
                                    <ListGroup.Item key={item.stat.name}>
                                        <strong>{item.stat.name.toUpperCase()}:</strong> {item.base_stat}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

PokeCard.propTypes = {
    pokemon: PropTypes.object
};