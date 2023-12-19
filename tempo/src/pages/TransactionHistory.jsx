import React from 'react';

const TransactionHistory = () => {
    return (
        <>
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
            />
            <div className="row_with_count_status">
                <span className='module_tittle'>Transactions Detials</span>
            </div>
            <div className="container">
                <br /><br />
                <div className="row">
                    <div className="col-12 mb-3 mb-lg-5">
                        <div className="position-relative card table-nowrap table-card">
                            <div className="card-header align-items-center">
                                <h5 className="mb-0">Latest Transactions</h5>
                                <p className="mb-0 small text-muted">1 Pending</p>
                            </div>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="small text-uppercase bg-body text-muted">
                                        <tr>
                                            <th>Transaction ID</th>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="align-middle">
                                            <td>#57473829</td>
                                            <td>13 Sep, 2024</td>
                                            <td>Quantanics</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span>
                                                        {/* <i className="fa fa-arrow-up" aria-hidden="true"></i> */}
                                                    </span>
                                                    <span>$145</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge fs-6 fw-normal bg-tint-success text-success">
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        {/* Additional rows go here */}
                                        <tr class="align-middle">
                                            <td>
                                                #012458780
                                            </td>
                                            <td>19 Aug, 2024</td>
                                            <td>Tech</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    {/* <span><i class="fa fa-arrow-down" aria-hidden="true"></i></span> */}
                                                    <span>$641.64</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="badge fs-6 fw-normal bg-tint-warning text-warning">Pending</span>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                #76444326
                                            </td>
                                            <td>03 April, 2024</td>
                                            <td>Kalavasal</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    {/* <span><i class="fa fa-arrow-down" aria-hidden="true"></i></span> */}
                                                    <span>$12,457</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="badge fs-6 fw-normal bg-tint-success text-success">Completed</span>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                #12498745
                                            </td>
                                            <td>15 March, 2024</td>
                                            <td>Madurai</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    {/* <span><i class="fa fa-arrow-down" aria-hidden="true"></i></span> */}
                                                    <span>$785</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="badge fs-6 fw-normal bg-tint-success text-success">Completed</span>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                #87444654
                                            </td>
                                            <td>23 Jan, 2024</td>
                                            <td>Tamil Nadu</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    {/* <span><i class="fa fa-arrow-up" aria-hidden="true"></i></span> */}
                                                    <span>$199</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="badge fs-6 fw-normal bg-tint-success text-success">Completed</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer text-end">
                                <a href="#!" className="btn btn-gray">
                                    View All Transactions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransactionHistory;
