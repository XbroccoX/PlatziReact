import React from 'react';
import confLogo from '../images/badge-header.svg';
import '../styles/Badge.css';


class Badge extends React.Component{
   render(){//es un metodo que define el resultado que voy a ver en pantalla
         return (
         <div className='badge'>
            <div className='badge_header'>
               <img src={confLogo} alt='Logo de la conferencia'></img>
            </div>

            <div className='badge_section-name'>
               <img className='badge_avatar' src={this.props.avatarUrl} alt="Avatar" />
               <h1>{this.props.firstName} <br />{this.props.lastName} </h1>
            </div>
            <div className='badge_section-info'>
               <h3>{this.props.profession}</h3>
               <div>@{this.props.twitter}</div>
            </div>
            
            <div className='badge_footer'>
                  <div>#{this.props.hashtag}</div>
               </div> 
         </div>
         )
   }
}

export default Badge;