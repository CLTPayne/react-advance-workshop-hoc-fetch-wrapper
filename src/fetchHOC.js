import React, { Component } from "react";

const fetchHOC = ({ url }) => C =>
  class extends Component {
    state = {
      loading: false,
      data: null,
      error: null
    };

    async componentDidMount() {
      try {
        this.setState({ loading: true });
        let response = await fetch(url);
        response = await response.json();
        this.setState({ data: response });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }

    render() {
      return <C {...this.props} {...this.state} />;
    }
  };

export default fetchHOC;
