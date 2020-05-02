import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movie from './components/Movie';
import Events from './components/Events';
import './App.css';
import { Layout } from 'antd';
import MOVIES from './movies';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  state = {
    movies: MOVIES,
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Header style={{ background: '#a8071a', color: 'white' }}>
              <Navbar />
            </Header>
            <Content style={{ background: 'black' }}>
              <Route
                path="/events"
                render={(props) => <Events {...props} state={this.state.movies} />}
              />
              <Route
                path="/movie/:movie_title"
                render={(props) => <Movie {...props} state={this.state.movies} />}
              />
              <Route
                exact
                path="/"
                render={(props) => <Home {...props} state={this.state.movies} />}
              />
            </Content>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
