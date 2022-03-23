import React from 'react';
import { styled } from '@linaria/react';
import moment from 'moment';

const Title = styled.h1`
  font-family: sans-serif;
  color: green;
`;

const Admin = () => <Title>Admin Page</Title>;
// const Admin = () => <Title>{moment().format('MMMM Do YYYY, h:mm:ss a')}</Title>;

export default Admin;
