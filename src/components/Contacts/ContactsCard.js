import React from 'react';
import { Button, Icon, List, Image } from 'semantic-ui-react';

export default function ContactsCard(props) {
//  const { contact } = props.contact;
  
  return (
    <List divided verticalAlign="middle">
        <List.Item>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
        <List.Header>Contacts here</List.Header>
          <List.Content floated="right">
            <Icon name="delete" />
            <Icon name="edit" />
            {/* <Button>Edit</Button> */}
          </List.Content>
          {/* <List.Content>Contacts goes here</List.Content> */}
        </List.Item>
      </List>
  )
}