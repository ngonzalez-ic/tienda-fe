import React from 'react'
import { Section, Notification, Button } from 'react-bulma-components'

const Notificate = (props) => {
  return (
    <Section>
      <Notification>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a href='/'>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
        <Button remove />
      </Notification>
    </Section>

  )
}
export default Notificate
