import React, { Component } from "react";

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{}, {}]
    };
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6 text-center ">
              <div className="row">
                <div className="col-md-10">
                  <div className="card ">
                    <div className="card-header">Today Tasks</div>
                    <div className="card-body">
                      <p>TODO form</p>
                    </div>
                  </div>
                  <div className="pt-3">
                    <p>Quotes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <p>List tasks</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
