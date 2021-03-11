import { useEffect } from 'react'
import { notification } from 'antd'
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

import Counter from '@/components/Counter'

function Setting() {
  // console.log('test')

  useEffect(() => {
    notification.info({
      message: '[Setting] mounted'
    })

    return () => {
      notification.error({
        message: '[Setting] unmounted'
      })
    }
  }, [])

  useActivate(() => {
    notification.success({
      message: '[Setting] activated'
    })
  })
  useUnactivate(() => {
    notification.warning({
      message: '[Setting] unactivated'
    })
  })
  return (
    <div>
      <h1>Setting</h1>
      <Counter />
    </div>
  )
}

export default () => (
  <KeepAlive name="/setting" saveScrollPosition="screen">
    <Setting />
  </KeepAlive>
)
