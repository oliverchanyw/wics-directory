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
    for (var i = 0; i < _.size(this.props) - 3; i+=2) {
      if(i + 1 == _.size(this.props) - 3) {
        results.push(
          <div>
            <div class="row">
              <div class="col-lg-1">
              </div>
              <div class="col-lg-4">
                <ProfileCard firstName={this.props[i].firstName} lastName={this.props[i].lastName} major={this.props[i].major} 
                year={this.props[i].year} schools={this.props[i].schools}
            hometown={this.props[i].hometown}/>
            <div class="col-lg-6">
              <a href={"mailto:"+this.props[i].email} class="btn btn-secondary btn-lg"><i class="fa fa-google-plus fa-fw"></i>Contact Me</a>
            </div>
            <p>
            <div class="col-lg-6">
              <a class="btn btn-secondary" data-toggle="collapse" href={"#collapseExample"+i} aria-expanded="false" aria-controls="collapseExample">
                Learn More
              </a>
            </div>
            </p>
            <div class="collapse" id={"collapseExample"+i}>
              <div class="card card-block">
                <strong>Courses Taken</strong>: {this.props[i].coursesTaken}<br/>
                <strong>Courses Curr</strong>: {this.props[i].coursesCurr}<br/>
                <strong>Involvement on Campus</strong>: {this.props[i].involve}<br/>
                <strong>Interests</strong>: {this.props[i].interests}<br/>
              </div>
            </div>
              </div>
              <div class="col-lg-2">
              </div>
              <div class="col-lg-1">
              </div>
            </div>
            <br/>
          </div>
        );      
      } else {
        results.push(
          <div>
            <div class="row">
              <div class="col-lg-1">
              </div>
              <div class="col-lg-4">
                <ProfileCard firstName={this.props[i].firstName} lastName={this.props[i].lastName}
            email={this.props[i].email} major={this.props[i].major} year={this.props[i].year} schools={this.props[i].schools}
            hometown={this.props[i].hometown}/>
            <div class="col-lg-6">
              <a href={"mailto:"+this.props[i].email} class="btn btn-secondary btn-lg"><i class="fa fa-google-plus fa-fw"></i>Contact Me</a>
            </div>
            <p>
            <div class="col-lg-6">
              <a class="btn btn-secondary" data-toggle="collapse" href={"#collapseExample"+i} aria-expanded="false" aria-controls="collapseExample">
                Learn More
              </a>
            </div>
            </p>
            <div class="collapse" id={"collapseExample"+i}>
              <div class="card card-block">
                <strong>Courses Taken: </strong> {this.props[i].coursesTaken}<br/>
                <strong>Courses Curr: </strong> {this.props[i].coursesCurr}<br/>
                <strong>Involvement on Campus: </strong> {this.props[i].involve}<br/>
                <strong>Interests: </strong> {this.props[i].interests}<br/>
              </div>
            </div>
              </div>
              <div class="col-lg-2">
              </div>
              <div class="col-lg-4">
                <ProfileCard firstName={this.props[i+1].firstName} lastName={this.props[i+1].lastName}
            email={this.props[i+1].email} major={this.props[i+1].major} year={this.props[i+1].year} schools={this.props[i+1].schools}
            hometown={this.props[i+1].hometown}/>
            <div class="col-lg-6">
              <a href={"mailto:"+this.props[i].email} class="btn btn-secondary btn-lg"><i class="fa fa-google-plus fa-fw"></i>Contact Me</a>
            </div>
            <p>
            <div class="col-lg-6">
              <a class="btn btn-secondary" data-toggle="collapse" href={"#collapseExample"+(i+1)} aria-expanded="false" aria-controls="collapseExample">
                Learn More
              </a>
            </div>
            </p>
            <div class="collapse" id={"collapseExample"+(i+1)}>
              <div class="card card-block">
                <strong>Courses Taken</strong>: {this.props[i+1].coursesTaken}<br/>
                <strong>Courses Curr</strong>: {this.props[i+1].coursesCurr}<br/>
                <strong>Involvement on Campus</strong>: {this.props[i+1].involve}<br/>
                <strong>Interests</strong>: {this.props[i+1].interests}<br/>
              </div>
            </div>
              </div>
              <div class="col-lg-1">
              </div>
            </div>
            <br/>
          </div>
        );
      }      
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

          .col-lg-4 {
            background-color: #EFA499;
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

