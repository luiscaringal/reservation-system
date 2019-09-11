import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                <div className="form-group row">
                                    <div className="col-lg-3">Username</div>
                                    <div className="col-lg-9"><input type="text" className="form-control form-control-sm" /></div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-3">Password</div>
                                    <div className="col-lg-9"><input type="text" className="form-control form-control-lg" /></div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
