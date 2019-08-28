import React from "react";
import './Random.css';
import { Button, Icon, List } from 'semantic-ui-react';


export default function RandomActsCard(props) {
  const { ark } = props.ark;

  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
        <Icon name='delete'/>
        <Icon name='edit' />
        </List.Content>
        <List.Content>{ark}</List.Content>
      </List.Item>
    </List>
  )
}
