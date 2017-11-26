var React = require('react');
import Style from 'style-it';
import ProfileCard from "./profileCard.jsx";
import _ from 'lodash';


export default class Browse extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var results = []; 
    for (var i = 0; i < _.size(this.props) - 3; i++) {
      results.push(<ProfileCard firstName={this.props[i].firstName} lastName={this.props[i].lastName}
        email={this.props[i].email} major={this.props[i].major} year={this.props[i].year} schools={this.props[i].schools}
        hometown={this.props[i].hometown} coursesTaken={this.props[i].coursesTaken} coursesCurr={this.props[i].coursesCurr}
        involve={this.props[i].involve} interests={this.props[i].interests}/>);
    };
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
     <head><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="css/style.css"/>
            <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossOrigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossOrigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossOrigin="anonymous"></script>
            </head>
<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="/">Penn WiCS</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
      <li className="nav-item">
          <a className="nav-link active" href="#">Browse</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="/create">Create Profile</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="/about">About Us</a>
      </li>
    </ul>
  </div>
</nav>
    
<h1 class="create">Browse</h1>
{results}
<hr/>
<h3>&copy; WiCS Mentorship</h3>

<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"></script>
    </div></Style>
   )
  }
 }

