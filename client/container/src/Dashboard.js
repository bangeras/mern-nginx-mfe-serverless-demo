import React, {lazy, Suspense} from 'react'
import {Link} from 'react-router-dom'

const ComponentA = lazy(() => import("MFE1/ComponentA"));
const ComponentB = lazy(() => import("MFE1/ComponentB"));

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <Suspense fallback={<span>Loading...</span>}>
        <ComponentA /> 
        <ComponentB/>     
      </Suspense>
    </div>
  )
}

export default Dashboard