import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({count}) => {
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand p-2'>Restaurant</a>
            <button className='btn btn-primary'>
               <Link to='/orders' style={{color:'white',textDecoration:'none'}}>Orders</Link> <span className='badge bg-secondary'>{count}</span>
            </button>
        </nav>
    </div>
  )
}
const mapStateToProps = state => ({
    count : state.orderreducer.length
  })

export default connect(mapStateToProps)(Header);