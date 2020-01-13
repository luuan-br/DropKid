import React from 'react'
import {FlatList} from 'react-native'

import DropCard from '../../components/DropCard'

export default function ActionList({data}) {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <DropCard item={item} />}
      keyExtractor={(_, index) => `${index}`}
    />
  )
}
