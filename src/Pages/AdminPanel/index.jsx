import React from 'react'
import { Link } from 'react-router-dom'


const AdminPanel = () => {
  return (
    <>
    
    <Link>
    <button to="/categories">
        News Categories
    </button>
    </Link>
    <Link>
    <button to="/locations">
        News Locations
    </button>
    </Link>
    
    </>
  )
}

export default AdminPanel