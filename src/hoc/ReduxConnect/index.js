import connect from 'react-redux/lib/connect/connect';
import withRouter from 'react-router-dom/withRouter';

function mapStateToProps (state) {
    return state;
}

export default function (WrappedComponent, actions, state = mapStateToProps) {
    return withRouter(connect(state, actions)(WrappedComponent));
}
