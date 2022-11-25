import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';
import config from '../../config';

const Link = ({ to, ...props }) =>
  isAbsoluteUrl(to) ? (
    <a href={to} {...props}>
      {props.children}
    </a>
  ) : (
    <GatsbyLink to={to + (config.gatsby.static ? 'index.html' : '')} {...props} />
  );

export default Link;
