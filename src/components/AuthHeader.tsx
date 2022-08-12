import styled from '@emotion/styled';

const AuthHeader = () => {
  return (
    <AuthHeaderBlock>
      <AuthHeaderLogo>My Todo List</AuthHeaderLogo>
    </AuthHeaderBlock>
  );
};

const AuthHeaderBlock = styled.div`
  height: 100px;
`;

const AuthHeaderLogo = styled.div`
  font-weight: bold;
  font-size: 35px;
  letter-spacing: 2px;
  text-align: center;
  padding-top: 30px;
`;

export default AuthHeader;
