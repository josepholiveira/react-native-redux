import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActivityIndicator, Text } from 'react-native';

import * as repositoriesActions from '~/store/actions/repositories';
import { Container } from './styles';

// import styles from './styles';

class Repositories extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;

    loadRepositoriesRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="#999" />
        ) : (
          repositories.data.map(repository => <Text key={repository.id}>{repository.name}</Text>)
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(repositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
