
import * as React from 'react'
import * as container from 'src/jscommon/components/loginComponent/loginComponentContainer'
import MainMenu from './MainMenu';

type ThisProps = 
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps

type ComponentState = {} & {
  username:string
  password:string
}


// TODO: Change to React.FC and remove all react components. 
class DemoComponent extends React.Component<ThisProps, ComponentState> {
  constructor (props:ThisProps) {
    super (props)
    this.state = {
      password: "",
      username: ""
    }
    this.onUsernameChanged = this.onUsernameChanged.bind(this)
    this.onPasswordChanged = this.onPasswordChanged.bind(this)
    this.onSubmitPressed = this.onSubmitPressed.bind(this)
  }


  public render () {
  return (
    <>
      <MainMenu />
      <div id='authenticated'>
        <aside id="sidebar"> 
          This is a sidebar
        </aside>
      
        <div className="appcontent">
        <section className="blade listings is-primary">
          <div className="blade-title" >
            Blade-title
          </div>
          <div className="blade-body pomodoros" >
            Blade-body
            <div className="pomodoro-items">
              <div className="list-item" key="1">
                Do the thing, 
                Did the thing,
                <br />
                Button
              </div>
            </div>
            <div className="pomodoro-items">
              <div className="list-item" key="1">
                Do the thing, 
                Did the thing,
                <br />
                Button
              </div>
            </div>

          </div>
        </section>
        <section className="blade details"  >

          <div className="blade-title" >
            Blade-title
          </div>
          <div className="blade-body" >   
            Blade-body       
            <div className="box">              
              Blade body | box
            </div>      
          </div>

          <div className="blade-title" >
            Blade-title
          </div>
          <div className="blade-actionbar" >
            <button>action bar</button>
            <button>go!</button>
            <button>go!</button>
            <button>go!</button>
            <button>go!</button>
            <button>go!</button>
            <button>go!</button>
          </div>

          <div className="blade-body" >          
            Blade-body
            <div className="box" >
              Blade-body | box
            </div>
          </div>
        </section>
        </div>
      </div>
      <aside id="statusbar">
          (1) | (9) | (7)
      </aside>
    </>)
  }

  private onUsernameChanged (event: React.SyntheticEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({ ...this.state, username: event.currentTarget.value })    
  }

  private onPasswordChanged (event: React.SyntheticEvent<HTMLInputElement>) {
    event.preventDefault()
    this.setState({ ...this.state, password: event.currentTarget.value })    
  }

  private onSubmitPressed (event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault()
    this.props.login!({
      password: this.state.password,
      username: this.state.username
    });

  
  }
}  

export default container.connectContainer(DemoComponent)