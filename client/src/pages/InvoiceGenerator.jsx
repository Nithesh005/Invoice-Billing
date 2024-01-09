const InvoiceGenerator = () => {
    const customerNames = ['INVOICE#', 'ORDER NUMBER', 'INVOICE DATE'];
    return (
        <>
            <div className="App">
                <div className="first-div">
                    <div className="addInvoiceHead">
                        <div className="addIncoiveText">
                            Add Invoive
                        </div>
                    </div>
                    <div className="cutomerName bottomBorder">
                        <div className="cutomerNametext contentLeft">
                            customer Name
                        </div>
                        <div className="contentRight">
                            <input type="text" />
                        </div>
                    </div>
                    {customerNames.map((customerName, index) => (
                        <div className={`cutomerName  ${index === customerNames.length - 1 ? 'bottomBorder' : ''}`} key={index}>
                            <div className="cutomerNametext contentLeft">
                                {customerName}
                            </div>
                            <div className={`contentRight`}>
                                <input type="text" />
                            </div>
                        </div>
                    ))}

                    <div className="cutomerName">
                        <div className="cutomerNametext contentLeft">
                            Salse Person 
                        </div>
                        <div className="contentRight">
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="first-div"></div>
                <div className="first-div"></div>
                <footer>
                    <div className="button-div">
                        <button className="button1">Save as Draft</button>
                        <button className="button2">Save</button>
                        <button className="button3">Cancel</button>
                    </div>
                    <div className="text-div">
                        <span>Total Amount</span>
                        <span>Total Quantity</span>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default InvoiceGenerator;