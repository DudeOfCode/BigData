import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
          <footer>
    {/* <div class="log"> */}
      {/* <img src="" alt="" /> */}
    {/* </div>  */}
    <div>
      
      <ul>
        <li> <h4 class="foot">Product</h4></li>
        <li class="fl"><Link to='/'>Overview</Link></li>
        <li class="fl"><Link to='*'>Pricing</Link></li>
    
        <li class="fl"><Link to='*'>Integrations</Link></li>
      </ul>

    </div>
    <div>
    
      <ul>
        <li> <h4 class="foot">Company</h4></li>
        <li class="fl"><Link to='/'>About</Link></li>
        <li class="fl"><Link to='*'>Integrations</Link></li>
        <li class="fl"><Link to='*'>Careers</Link></li>
      </ul>

    </div>
    <div>

      <ul>
        <li><h4 class="foot">Connect</h4></li>
        <li class="fl"><Link to='*'>Integrations</Link></li>
        <li class="fl"><Link to='*'>LinkendIn</Link></li>
      </ul>
    </div>
  </footer>

    </div>
  )
}

export default Footer