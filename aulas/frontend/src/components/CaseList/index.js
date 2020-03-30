import React from "react";

import { FiTrash2Icon, Li, ListButton, StrongText, Text, Ul } from "./styles";

export const CaseList = ({ content, ...rest }) => {
  console.log(content);

  return content ? (
    <Ul>
      {content.map(caseItem => (
        <Li>
          <StrongText>CASO:</StrongText>
          <Text>{caseItem.caseTitle}</Text>

          <StrongText>DESCRIÇÃO:</StrongText>
          <Text>{caseItem.description}</Text>

          <StrongText>VALOR:</StrongText>
          <Text>R$ {caseItem.value}</Text>

          <ListButton>
            <FiTrash2Icon />
          </ListButton>
        </Li>
      ))}
    </Ul>
  ) : null;
};

export default CaseList;
