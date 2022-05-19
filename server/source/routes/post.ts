/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/post';
const router = express.Router();

router.get('/wallet/nfts/:wallet', controller.getERC721);
router.get('/wallet/balance/:wallet',controller.getBalance);
router.get('/wallet/transactions/:wallet',controller.getTransactions);


export = router;