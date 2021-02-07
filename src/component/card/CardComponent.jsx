import React from 'react';
import { Progress, Card, Header, Image, Segment, Icon, Message, Table, Grid } from 'semantic-ui-react';
import { mockData } from "./mockData";

class CardComponent extends React.Component {
    state = {

    }

    renderMessageContent =() => {

    }

    render() {
        return (
            <>
            {mockData.data.map((item, index) =>
            <Grid.Column>
                <Segment>
                    <Grid>
                        <Grid.Column width={6}>
                            <Image src={`https://source.unsplash.com/random/160x160?/monster=${index}`}  />
                        </Grid.Column>

                        <Grid.Column width={10}>
                            <Table basic='very'>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell width={7}>{item.name}</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="right" width={9}><Icon name="close" link/></Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{item.hp.toUpperCase()}</Table.Cell>
                                        <Table.Cell>
                                        <div className="div--progress">
                                            <div className="progress" style={{ width: `${item.hp_value}%`, height: '13px' }}></div>
                                        </div>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>{item.str.toUpperCase()}</Table.Cell>
                                        <Table.Cell>
                                        <div className="div--progress">
                                            <div className="progress" style={{ width: `${item.str_value}%`, height: '13px' }}></div>
                                        </div>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>{item.weak.toUpperCase()}</Table.Cell>
                                        <Table.Cell>
                                        <div className="div--progress">
                                            <div className="progress" style={{ width: `${item.weak_value}%`, height: '13px' }}></div>
                                        </div>
                                        </Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell><Icon name="heart" color="red"/><Icon name="heart" color="red"/><Icon name="heart" color="red"/></Table.Cell>

                                    </Table.Row>
                                </Table.Body>
                                </Table>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Grid.Column>
            )}
            </>
        )
    }
}

export default CardComponent;