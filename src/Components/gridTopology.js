import React, { Component } from 'react'
import {DataTable,TableHeader} from 'react-mdl';

export class gridTopology extends Component {
    render() {
        return (
            <div>
                <DataTable
                    selectable
                    shadow={0}
                    rowKeyColumn="id"
                    rows={[
                        {id: 1001, material: 'Acrylic (Transparent)', value: 25, price: 2.90},
                        {id: 1002, material: 'Plywood (Birch)', value: 50, price: 1.25},
                        {id: 1003, material: 'Laminate (Gold on Blue)', value: 10, price: 2.35}
                    ]}
                >
                    <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                    <TableHeader numeric name="value" tooltip="Number of materials">Quantity</TableHeader>
                    <TableHeader numeric name="price"  tooltip="Price pet unit">Price</TableHeader>
                 </DataTable>
            </div>
        )
    }
}

export default gridTopology
