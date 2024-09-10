import { RecoilRoot } from "recoil"
import Form from "./components/Form"
import Component from "./components/Component"

function App() {
  return(
    <RecoilRoot>
      <div className="container">
      <Form/>
      <Component />
      </div>
    </RecoilRoot>
  )
}

export default App
