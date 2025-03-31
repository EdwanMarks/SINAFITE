// This is a simple wrapper for react-helmet to make it work with our component structure
import { Helmet as ReactHelmet, HelmetProps } from 'react-helmet';

export const Helmet = (props: HelmetProps) => {
  return <ReactHelmet {...props} />;
};

export default Helmet;
