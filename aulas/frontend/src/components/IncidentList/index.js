import React from "react";

import { FiTrash2Icon, Li, ListButton, StrongText, Text, Ul } from "./styles";

export const IncidentList = ({ content, ...rest }) => {
  return content ? (
    <Ul {...rest}>
      {content.map(incidentItem => (
        <Li key={incidentItem.id}>
          <StrongText>CASO:</StrongText>
          <Text>{incidentItem.incidentTitle}</Text>

          <StrongText>DESCRIÇÃO:</StrongText>
          <Text>{incidentItem.description}</Text>

          <StrongText>VALOR:</StrongText>
          <Text>R$ {incidentItem.value}</Text>

          <ListButton>
            <FiTrash2Icon />
          </ListButton>
        </Li>
      ))}
    </Ul>
  ) : null;
};

export default IncidentList;
