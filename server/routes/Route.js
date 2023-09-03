import express from 'express' ;
const router = express.Router() ;

import { adduserindb , getalluser, edituserdetails, deluser , getUserById} from '../Controller/user-controller.js';

router.post('/add' , adduserindb) ;
router.get('/all', getalluser) ;
router.get('/:id', getUserById);
router.put('/edit/:id' , edituserdetails)
router.delete('/delete/:id' , deluser)

export default router ;