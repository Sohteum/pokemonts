import { atom } from "recoil";

export const LoginStateAtom = atom({ 

    key: 'LoginState',
    default: false,
})

export const PokemonNameAtom = atom<string>({ 
    key: 'PokemonNameAtom',
    default: '',
})