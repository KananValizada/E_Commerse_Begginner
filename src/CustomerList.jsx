import { Component, Fragment } from "react";

export default class MainContent extends Component {
    state = {
    pageTitle:"Customers",
    customerCount:5,
    customers:[
        {id:"c1",custName:"Zakir",phone:"0558717031",address:{city:"Baki"}},
        {id:"c2",custName:"Kanan",phone:"0558717055",address:{city:"Ganca"}},
        {id:"c3",custName:"Akif",phone:"0558717048",address:{city:"Baki"}},
        {id:"c4",custName:"Kamran",phone:null,address:{city:"Sumqayit"}}
    ]
}
    render() {
        return <Fragment>
            <h1>{this.state.pageTitle}  <span className="badge bg-primary">{this.state.customerCount}</span></h1>
           
            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.customers.map((cust)=>{
                        return  (<tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>{cust.custName}</td>
                        <td>{!cust.phone?<div className="bg-warning text-center p-2">No Phone</div>:cust.phone}</td>
                        <td>{cust.address.city}</td>
                        </tr>)
                    })}
                   
                </tbody>
            </table>
            </Fragment>
    }

    onRefreshClick = () => {
        this.setState({
            customerCount:7
        })
        console.log("refresh clicked")
    }
}


