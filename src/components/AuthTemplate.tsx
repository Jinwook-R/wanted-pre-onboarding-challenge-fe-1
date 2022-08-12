import styled from '@emotion/styled';
import React from 'react';

const AuthTemplateBlock = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: React.ReactNode;
};

const AuthTemplate = ({ children }: Props) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;
