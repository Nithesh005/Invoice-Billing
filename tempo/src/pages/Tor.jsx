import React from "react";
// import { Pie } from "react-chartjs-2";
import PieChart from "../charts/piechart";
import Radarpie from "../charts/Radarpie";
import BarChart from "../charts/barchart";
import PowerImg from "../images/powerIcon.png";
import EnergyRed from "../images/EnergyRed.png";
import Draggable from 'react-draggable';
function Tor() {
    return (
        <>
            SLD/Specification Details
            <div className="div100 d-flex">
                <div className="div40 d-flex fdc">
                    <div className="divUpper shadow d-flex gap-4 fdc">
                        <div className="Machine d-flex sb">
                            <div className="Specification specMachine">Machine Specification</div>
                            <div className="sts_machine">Status : On</div>
                        </div>
                        <div className="data fdc Specification">
                            <div className="divice">Device : <span className="answers">hello</span></div>
                            <div className="Manufacturer">Manufacturer : <span className="answers">Quantanics</span></div>
                            <div className="Device Code">Device Code : <span className="answers">30580001-1</span></div>
                            <div className="Model">Model : <span className="answers">2022</span></div>
                            <div className="Rated Power">Rated Power : <span className="answers">0</span></div>
                        </div>
                    </div>
                    <div className="divlower shadow d-flex fdc gap-4">
                        <div className="one d-flex gap-4">
                            <div className="valuseCard shadow">
                                <div> R Phase Voltage</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>V</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="valuseCard shadow">
                                <div>Y Phase Voltage </div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>V</h5>
                                    </div>
                                </div></div>
                            <div className="valuseCard shadow">
                                <div>B Phase Voltage</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>V</h5>
                                    </div>
                                </div></div>
                        </div>
                        <div className="two d-flex gap-4">
                            <div className="valuseCard shadow">
                                <div>R Phase Current</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>A</h5>
                                    </div>
                                </div></div>
                            <div className="valuseCard shadow">
                                <div> Y Phase Current</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>A</h5>
                                    </div>
                                </div></div>
                            <div className="valuseCard shadow">
                                <div> B Phase Current</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>A</h5>
                                    </div>
                                </div></div>
                        </div>
                        <div className="three d-flex gap-4">
                            <div className="valuseCard shadow">
                                <div>VTHD R Phase</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>%</h5>
                                    </div>
                                </div></div>
                            <div className="valuseCard shadow">
                                <div>VTHD Y Phase</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>%</h5>
                                    </div>
                                </div></div>
                            <div className="valuseCard shadow">
                                <div> VTHD B Phase</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>%</h5>
                                    </div>
                                </div></div>
                        </div>
                        <div className="four d-flex gap-4">
                            <div className="valuseCard shadow">
                                <div> CTHD R Phase</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>%</h5>
                                    </div>
                                </div></div>
                            <div className="valuseCard shadow">
                                <div>CTHD Y Phase</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>%</h5>
                                    </div>
                                </div></div>
                            <div className="valuseCard shadow">
                                <div> CTHD B Phase</div>
                                <div className="value-card">
                                    <div className="value-card-1">
                                        <img src={EnergyRed} alt="" />
                                        <h5>236.97</h5></div>
                                    <div className="value-card-2">
                                        <h5>%</h5>
                                    </div>
                                </div></div>
                        </div>
                    </div>
                </div>
                <div className="div60 d-flex fdc">
                    <div className="firstRowcard d-flex sCard">
                        <div className="stdcard card">
                            <Radarpie />
                        </div>

                        <Draggable>
                            {/* <div className="draggable-component"> */}
                                <div className="stdcard card draggable-component">
                                    <PieChart />
                                </div>
                            {/* </div> */}
                        </Draggable>
                        <div className="stdcard card power-card">
                            <div className="power-box">
                                <h5>Power</h5>
                                <span><img src={PowerImg} alt="" /></span>
                            </div>
                            <div className="power-box-1">
                                <h1 className="insidetext">0.35</h1>
                                <h2 className="insidetext">Kw</h2>
                            </div>
                        </div>
                    </div>
                    <div className="secondRowcard d-flex sCard">
                        <div className="EConsumption card">
                            <BarChart />
                        </div>
                        <div className="alertCard card">
                            <div className="alert-box">
                                <h5>Alerts</h5>
                                <button type="button" class="btn btn-dark all-button">All()</button>
                            </div>
                            <div className="Alert-box-1 flex">
                                <h2 className="alerts">No Alerts</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tor;