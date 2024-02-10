import store from "@axel669/json-storage"
import {writable} from "svelte/store"

const local = store(localStorage)

const theme = writable(local.theme ?? "dark")

theme.subscribe(
    (newValue) => {
        local.theme = newValue
    }
)

export default theme
