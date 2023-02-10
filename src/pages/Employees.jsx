import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective,Page, Search, Toolbar, ExcelExport, PdfExport, Edit, Inject, } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid} from '../data/dummy'; 
import { Header } from '../components';


const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10'>
      <Header category='Page' title='Employees' />
      <GridComponent
      id='gridcomp'
      dataSource={employeesData}
      allowPaging={true}
      allowSorting={true}
      toolbar={['Search']}
      width='auto'

      
      
      >
        <ColumnsDirective>
        {employeesGrid.map((item,index)=>(
        <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Page,Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees
