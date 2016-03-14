import React from 'react'
import { render } from 'react-dom'
import Pre from '../Pre.jsx'
import { Props, Prop } from '../Props.jsx'
import Percentage from 'c/percentage/index.jsx'

const config = { 
      data : 80,
      outterColor : '#b3e5fc',
      innerColor : '#fff',
      textColor : '#fff'
    }

// export default () => {
//   render(<Percentage config={config} />, document.getElementById('demo'))
// }

export default React.createClass({
  render() {
    return (
      <div>
        <h1>环比图</h1>
        <Pre>
{`import Percentage from 'bfd-ui/lib/Percentage'

const App = React.createClass({
  render() {
    return <Percentage config={config}></Percentage>
  }
})`}
        </Pre>

        <Percentage config={config}></Percentage>
        
        <Props>
          <Prop>
            <Pre>
{`说明：config.data为百分比数值，类型为int。`}
            </Pre>
          </Prop>
        </Props>
      </div>
    )
  }
})