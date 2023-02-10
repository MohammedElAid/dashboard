import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, } from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid} from '../data/dummy'; 

import { Header } from '../components';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true};
  return (
   
    <div className='m-2 md:m-10 p-2 md:p-10'>
      <Header category='Page' title='Orders' />
      <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowPaging={true}
      allowSorting={true}
      allowExcelExport
      allowPdfExport
      contextMenuItems={contextMenuItems}
      editSettings={editing}
      pageSettings={{pageSize:10}}
      >
        <ColumnsDirective>
        {ordersGrid.map((item,index)=>(
        <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Resize ,Page, Sort, Filter, ContextMenu, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders
