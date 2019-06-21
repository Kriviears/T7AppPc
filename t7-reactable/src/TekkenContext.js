import React from 'react'

const TekkenContext = React.createContext({
    characters: [],
    currentCharacter: '',
    characterSelect: () => {}
})

export default TekkenContext;