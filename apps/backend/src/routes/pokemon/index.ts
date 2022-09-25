import { PokemonController } from "@controllers/index"
import { Router } from "express"

const setup = () => {
    const router = Router()

    router.get('', PokemonController.get)

    return router
}

export default setup