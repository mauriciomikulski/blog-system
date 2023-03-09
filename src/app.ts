import express, { Application } from 'express';
import "./data-source";

class App {
  public server : Application;
  protected namespace: string = 'App';

  constructor() {
    this.server = express();
  }
}

export default App;