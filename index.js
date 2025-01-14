const Button = props => {
  //  Write your code here.
  const {name} = props
  return <button className='message'>{name}</button>
}

const element = (
  //  Write your code here.
  <div className='background'>
    <h1 className='heading'>Social Buttons</h1>
    <div>
      <Button className='button1' name='Like' />
      <Button className='button2' name='Comment' />
      <Button className='button3' name='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
