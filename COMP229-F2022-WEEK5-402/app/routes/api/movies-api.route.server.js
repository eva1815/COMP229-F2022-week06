import { Router } from "express";
import { GetList, Add, Edit, Delete, Get } from "../../controllers/api/movies-api.controller.server.js";


const router = Router();

//Rest ApI Verbs
router.get('/list', GetList);
router.get('/:id', Get);
router.post('/add', Add);
router.put('/edit/:id',Edit);
router.delete('/delete/:id', Delete);

export default router;