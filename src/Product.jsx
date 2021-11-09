import { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              #{this.props.id}{" "}
              <span className="pull-right">
                <i
                  className="fa fa-times hand-icon"
                  onClick={() => this.props.onDelete(this.props.id)}
                ></i>
              </span>
            </div>
            <h5 className="pt-5 border-top">{this.props.productName}</h5>
            <div>${this.props.price}</div>
          </div>
          <div className="card-footer">
            <div className="float-start">
              <span className="badge bg-secondary">{this.props.quantity}</span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => this.props.onIncrement(this.props.id, 10)}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => this.props.onDecrement(this.props.id, 0)}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-end">
              <button className="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
