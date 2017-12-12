var React = require('react');
import Style from 'style-it';
export default class About extends React.Component {
 
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
    <head><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"/>
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"/>
           <link rel="stylesheet" href="css/style.css"/>
           <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
           <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </head>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">Penn WiCS</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
          <li class="nav-item">
              <a class="nav-link active" href="/browse">Browse</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="/create">Create Profile</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
    
    <h1 class="create">About Us</h1>
    <h6 class="contact_desc">
      WiCS Mentorship hopes you find this directory useful for personal, academic, and professional purposes!<br/>
      If you have any questions or concerns about this site, or if you want to join us in our efforts to strengthen <br/>
      the community of women* studying CS here at Penn, please contact any member of WiCS Mentorship below.
    </h6>

    <div class="row">
      <div class="col-lg-4">
        <img src="https://cdn.glitch.com/e5b0b29d-5438-46a2-aa1b-064264d5a64a%2FSneha%20pro%20pic.JPG?1503263267297"
             style={{borderRadius: '50%', width: '40%', margin: 'auto', display: 'block'}}/>
        <h3>
          Sneha Rampalli
        </h3>
        <h6 class="email">
          sneharam@seas.upenn.edu
        </h6>
      </div>
      <div class="col-lg-4">
        <img src="https://cdn.glitch.com/e5b0b29d-5438-46a2-aa1b-064264d5a64a%2FElena.jpg?1503263590971"
             style={{borderRadius: '50%', width: '40%', margin: 'auto', display: 'block'}}/>
        <h3>
          Elena Tomlinson
        </h3>
        <h6 class="email">
          elenatom@sas.upenn.edu
        </h6>
      </div>
       <div class="col-lg-4">
        <img src="https://cdn.glitch.com/e5b0b29d-5438-46a2-aa1b-064264d5a64a%2FAbha.jpg?1503273190336"
             style={{borderRadius: '50%', width: '40%', margin: 'auto', display: 'block'}}/>
        <h3>
          Abha Vedula
        </h3>
        <h6 class="email">
          abhaved@seas.upenn.edu
         </h6>
      </div>
    </div>
    <br/>
    <div class="row">
       <div class="col-lg-4">
        <img src="https://cdn.glitch.com/e5b0b29d-5438-46a2-aa1b-064264d5a64a%2FKaren.jpg?1503273186388" 
        style={{borderRadius: '50%', width: '40%', margin: 'auto', display: 'block'}} />
        <h3>
          Karen Her
        </h3>
        <h6 class="email">
          karenher@seas.upenn.edu
         </h6>
      </div>
       <div class="col-lg-4">
        <img src="https://cdn.glitch.com/e5b0b29d-5438-46a2-aa1b-064264d5a64a%2FLissa.jpg?1503273178700"
             style={{borderRadius: '50%', width: '40%', margin: 'auto', display: 'block'}}/>
        <h3>
          Lissa Villani
        </h3>
        <h6 class="email">
          evillani@seas.upenn.edu
         </h6>
      </div>
    </div>

    <hr/>
    <h3>&copy; WiCS Mentorship</h3>
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"></script>
    </div></Style>
   )
  }
 }