import { atom } from "recoil";

export const LoginStateAtom = atom<boolean>({ 

    key: 'LoginState',
    default: false
})