import { ComponentTypes } from "./ComponentTypes"
import { User } from "./user"

export interface Component {
    id: number
    name: string
    author: User
    version: string
    type: ComponentTypes;
    updated_at: Date
    created_at: Date
}