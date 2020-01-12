import React from 'react'
import {createAppContainer} from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import {Transition} from 'react-native-reanimated'

import PhoneConfig from './screens/PhoneConfig'
import MessageConfig from './screens/MessageConfig'
import ValidationConfig from './screens/ValidationConfig'
import Home from './screens/Home'
import RegisterRoutes from './screens/RegisterRoutes'
import StartedRoute from './screens/StartedRoute'
import RegisterChildren from './screens/RegisterChildren'

const mainNavigation = createAnimatedSwitchNavigator(
  {
    PhoneConfig,
    MessageConfig,
    ValidationConfig,
    Home,
    RegisterRoutes,
    StartedRoute,
    RegisterChildren,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out type="fade" durationMs={200} interpolation="easeOut" />
        <Transition.In type="fade" durationMs={400} />
      </Transition.Together>
    ),
  },
)

export default createAppContainer(mainNavigation)
