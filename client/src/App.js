import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/Skills/skills.css'
import './App.css';
import JobBoard from './components/Jobboard';
import Listing from './components/Listing';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ReactJS from './components/Skills/reactjs'
import JavaScript from './components/Skills/javascript'
import Bootstrap from './components/Skills/bootstrap'
import MongoDB from './components/Skills/MongoDB'
import NodeJS from './components/Skills/node'
import Html from './components/Skills/html'
import CSS from './components/Skills/css'
import SQL from './components/Skills/sql'
import GraphQL from './components/Skills/graphQL'
import Java from './components/Skills/java'
import Cplus from './components/Skills/cplusplus'
import Express from './components/Skills/express'
import Wordpress from './components/Skills/wordpress'
import Angular from './components/Skills/angular'
import Github from './components/Skills/github';
import AWS from './components/Skills/AWS'
import PHP from './components/Skills/php'
import Python from './components/Skills/python'
import Rust from './components/Skills/rust'
import Vue from './components/Skills/vue'
import MySql from './components/Skills/mysql';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from '@mui/material/Stack';



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
        <Navbar className = "nav">
          <Routes>

          <Route
            path = "/"
            element = {<Home />}
            />
          <Route
            path = "/"
            element = {<Footer />}
            />

          </Routes>
        </Navbar>
       <Footer />
      </Router>
      
    <div className="App">
     {/* yo whatsup job droppers */}
     {/* <div>
         <JobBoard/>
     </div> */}

     <div>
      <Listing/>
      <ReactJS />
      <JavaScript />
      <Express />
      <Bootstrap />
      <MongoDB />
      <NodeJS />
      <Html />
      <CSS />
      <SQL />
      <GraphQL />
      <Java />
      <Cplus />
      <Wordpress />
      <AWS />
      <Angular />
      <Github />
      <PHP />
      <Python />
      <Rust />
      <MySql />
      <Vue />
     </div>

    </div>
    </ApolloProvider>
  );
}

export default App;
