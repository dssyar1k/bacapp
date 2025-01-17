import React from 'react';
import { Row, Form, Col } from 'react-bootstrap';
import Select from './../UI/Select/Select'
const CatalogFilter = ({ filter, setFilter }) => {
    return (
        <>
            <Form.Group controlId='seach' className='my-3'>
                <Row>
                    <Form.Label column='lg' lg={4} >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                        >
                            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                        </svg>
                        ...по имени, городу, рейтингу...
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={filter.query}
                             onChange={e => setFilter({ ...filter, query: e.target.value })}
                            size='lg'
                            type='text'
                            placeholder='Поиск...' />
                    </Col>
                </Row>
            </Form.Group>
            <Select
                value={filter.sort}
                onChange={sortedCatalog => setFilter({ ...filter, sort: sortedCatalog })}
                defaultValue='Сортировка'
                options={[
                    { value: 'city', name: 'по городу' },
                    { value: 'address', name: 'по адресу' },
                ]}
            />
        </>
    )
}
export default CatalogFilter
