// @flow
import { connect } from 'react-redux';

import Message from 'components/Message';

const mapStateToProps = state => ({
  message: state.helloAsync.get('messageAsync'),
});

export default connect(mapStateToProps)(Message);
