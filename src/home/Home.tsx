import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Practice } from '../core/types/Practice.interface';

interface Props {
  practices: Practice[];
}

export const Home: React.FC<Props & RouteComponentProps> = ({practices, ...props}) => {
  return (
    <div>
      {practices.length === 0 && 'Loading ...'}
      Home{JSON.stringify(practices)}
    </div>
  )
};