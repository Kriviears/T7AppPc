import React from 'react'

const TekkenContext = React.createContext({
    characters: [],
    currentCharacter: {},
    setCharacters: () => {},
    characterSelect: () => {},
    setCurrentCharacter: () => {},
    getMoves: () =>{}
})

export default TekkenContext;