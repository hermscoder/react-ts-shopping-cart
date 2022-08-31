import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json'

interface Props {

}

export const Store: React.FC<Props> = () => {
    return (
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col><StoreItem {...item} /></Col>

            ))}
        </Row>
    );
}