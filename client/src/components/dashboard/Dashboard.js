import React from 'react';
import Story1 from './Story1.jpg';
import Story2 from './Story2.jpg';
import Story3 from './Story3.jpg';
import Story4 from './Story4.jpg';
import Story5 from './Story5.jpg';
import Story6 from './Story6.jpg';
import Story7 from './Story7.jpg';
import Story8 from './Story8.jpg';
import Story9 from './Story9.jpg';

import {Link} from 'react-router-dom';


const Dashboard = () =>{
    return(
        <div>
            <div className="story1"><Link to="/Story1"><img src={Story1} id="image"/></Link></div>
            <div className="story1"><Link to="/Story2"><img src={Story2} id="image"/></Link></div>
            <div className="story1"><Link to="/Story3"><img src={Story3} id="image"/></Link></div>
            <div className="story1"><Link to="/Story4"><img src={Story4} id="image"/></Link></div>
            <div className="story1"><Link to="/Story5"><img src={Story5} id="image"/></Link></div>
            <div className="story1"><Link to="/Story6"><img src={Story6} id="image"/></Link></div>
            <div className="story1"><Link to="/Story7"><img src={Story7} id="image"/></Link></div>
            <div className="story1"><Link to="/Story8"><img src={Story8} id="image"/></Link></div>
            <div className="story1"><Link to="/Story9"><img src={Story9} id="image"/></Link></div>
            
            </div>
    )
}

export default Dashboard;
