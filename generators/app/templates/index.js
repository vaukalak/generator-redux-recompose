import { connect } from 'react-redux';
import { compose } from 'recompose';
import <%= componentName %> from './<%= componentName %>';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhacer(<%= componentName %>);
