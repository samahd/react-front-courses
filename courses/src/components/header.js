import React from "react"
import { Card, CardBody } from "reactstrap";

function Header({name,title})
{
    return (
        <div className="text-center" style={{background:"yellow", padding:20, width:400}}>
            <Card>
                <CardBody>
                    <h1>This is course Application</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}
export default Header;