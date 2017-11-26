var React = require('react');
import AlertBox from './alert.jsx';

export default class Form extends React.Component {
  constructor(props) {
   super(props);
   this.register = this.register.bind(this);
   this.state = {
    showAlert: false,
    }
  };
  register(e){
    var firstName = this.name.firstName.value.trim();
    var lastName = this.name.lastName.value.trim();
    var email = this.name.email.value.trim();
    var major = this.name.major.value.trim();
    var year = this.name.email.value.trim();
    var schools = [];
		$.each($("input[name='school']:checked"), function(){
		schools.push($(this).val());
		});
    var hometown = this.name.hometown.value.trim();
    var coursesTaken = this.name.coursesTaken.value.trim();
    var coursesCurr = this.name.coursesCurr.value.trim();
    var involve = this.name.involve.value.trim();
    var interests = this.name.interests.value.trim();
    
    if (!firstName || !lastName || !email || !major || !year || !schools || !hometown || !coursesTaken || !coursesCurr
    || !involve || !interests) {
      this.setState({showAlert: true});
      return;
    }
    this.name.firstName.value = '';
    this.name.lastName.value = '';
    this.name.email.value = '';
    this.name.major.value = '';
    this.name.year.value = '';
    this.name.schools = [];
    this.name.hometown.value = '';
    this.name.coursesTaken.value = '';
    this.name.coursesCurr.value = '';
    this.name.involve.value = '';
    this.name.interests.value = ''; 
  	}
  render() {
  const formStyle = {
	  width: '75%',
	  display: 'block',
	  margin: 'auto',
	  textAlign: 'center',
	  letterSpacing: '1.2px',
	  backgroundColor: '#EFC4BD',
    color: 'black',
	  paddingRight: '20px',
	  paddingTop: '10px',
	  paddingBottom: '10px',
	 };

	const labelStyle = {
		textAlign: 'left',
		marginLeft: '20px'
	};
	const fontStyle = {
		fontFamily: 'Oswald',
		textTransform: 'uppercase',
	};
  const hr = {
    marginLeft: '2em',
    marginRight: '2em',
    backgroundColor: 'white',
  }
  return(
      <div>
        <form style={formStyle} onSubmit={this.register} method="post">
          {this.state.showAlert ? <AlertBox type="danger">Fill it out</AlertBox> : null}
          <div className="form-group" style={labelStyle}>
            <label>First Name: </label>
            <input type="text" className="form-control" placeholder="First Name" name="firstName" required/>
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>Last Name: </label>
            <input type="text" className="form-control" placeholder="Last Name" name="lastName" required/>
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>School Email: </label>
            <input type="email" className="form-control" placeholder="Email" name="email" required/>
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>School: </label><br/>
            <input type="checkbox" name="school" value="Engineering"/> Engineering   
            <input type="checkbox" name="school" value="Wharton" style={labelStyle}/>     Wharton    
            <input type="checkbox" name="school" value="Arts & Sciences" style={labelStyle}/>     Arts &amp; Sciences   
            <input type="checkbox" name="school" value="Nursing" style={labelStyle}/>     Nursing
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>Major: </label>
            <input type="text" className="form-control" placeholder="Major" name="major" required/>
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>Year: </label>
            <input type="number" className="form-control" placeholder="Year" name="year" required/>
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>Hometown: </label>
            <input type="text" className="form-control" placeholder="Hometown" name="hometown" required/>
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>CIS Courses Taken: </label>
            <input type="text" className="form-control" placeholder="CIS Courses Taken" name="coursesTaken" required/>
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>CIS Courses Currently In: </label>
            <input type="text" className="form-control" placeholder="CIS Courses Currently In" name="coursesCurr" required/>
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>Involvement on Campus: </label>
            <input type="text" className="form-control" placeholder="Involvement on Campus" name="involve" required/>
          </div>
          <hr style={hr}/>
          <div className="form-group" style={labelStyle}>
            <label>Interests: </label>
            <input type="text" className="form-control" placeholder="Interests" name="interests" required/>
          </div>
          <input type="submit" className="btn btn-secondary btn-lg active" style={fontStyle} value="Submit" />
        </form>
      </div>
    );
  }
};
