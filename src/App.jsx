import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import StateForm from './components/StateForm/StateForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/simpleForm'
// const handleSignUp = (data) => {
//   // e.preventDefault()
//   console.log(data.email)
// }
// const handleUpdate = (data) => {
//   console.log(data.pass)
// }
function App() {
//   // let title = ;
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm title={'sign up'} submitButton={'submit'} handleSubmit={handleSignUp}></ReusableForm>
      <ReusableForm title={'update form'} handleSubmit={handleUpdate}></ReusableForm> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
