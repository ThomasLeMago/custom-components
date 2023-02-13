import { useState } from "react"
import { Select, SelectOption } from "./Select"
import { Badge } from "./Badge"
import "./style.css";
import { Breadcrumb } from "./Breadcrumb";

const options = [
  { label: "First", value: 1},
  { label: "Second", value: 2},
  { label: "Third", value: 3},
  { label: "Fourth", value: 4}  
]

const paths = [
  {value: "Home", index: 0},
  {value: "Library", index: 1},
  {value: "Data", index: 2},
]

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])
  
  return (
    <>
      <Select options={options} value={value2} onChange={o => setValue2(o)}/>
      <br />
      <Select multiple options={options} value={value1} onChange={o => setValue1(o)}/>
      <br />
      <div className="content">
        <p>Hello</p>
        <Badge value="new"/>
      </div>
      <br />
      <Breadcrumb paths={paths} />
    </>
  )
}

export default App
