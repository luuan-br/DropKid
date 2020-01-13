import React from 'react'
import {FlatList} from 'react-native'

import DropCardChildrens from '../../components/DropCardChildrens'

export default function ChildrensList({data}) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <DropCardChildrens item={item} />}
      keyExtractor={(_, index) => `${index}`}
    />
  )
}
