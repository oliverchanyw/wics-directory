var React = require('react');
import Style from 'style-it';
export default class AlertBox extends React.Component {
 
  render () {
    return (
      <Style>
        {`
          body {
            text-transform: uppercase;
            font-family: 'Oswald', 'sans-serif';
            letter-spacing: 1.2px;
          }
          h1 {
            color: #EFA499;
            text-align: center;
            font-size: 85px;
            padding-top: 150px;
            padding-bottom: 100px;
          }
          hr {
            margin-left: 10em;
            margin-right: 10em;
          }
          nav {
            font-size: 20px;
          }
          h3 {
            text-align: center;
            padding-top: 10px;
          }
          .create {
            font-size: 50px;
            padding-top: 20px;
            padding-bottom: 30px;
          }
          .contact_desc {
            text-align: center;
            display: block;
            margin: 0 auto;
            letter-spacing: 1.2px;
            line-height: 200%;
            padding-top: 10px;
            padding-bottom: 60px;
          }
          .email {
            text-align: center;
            display: block;
            margin: 0 auto;
          }
          .left {
            background-color: #EFADA2;
            width: 75%;
            display: block;
            margin: auto;
          }
          .profile-card {
            color: white;
            text-align: center;
          }
          a {
            text-align: center;
            display: block;
            margin: auto;
            color: #EFA499;
            font-size: 20px;
          }
          .disclaimer-star {
              cursor: pointer;
          }
          .disclaimer{
            display: none;
            width: 50%;
            margin-left: auto;
            margin-right: auto;
            color: #EFA499;
          }
          #description {
            margin-top: -20px;
          }
        `}
      <div>
      <div className={"alert alert-"+ this.props.type}>{this.props.children}</div>
      </div></Style>
    )
  }
}