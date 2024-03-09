"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controloller/product");
const router = (0, express_1.Router)();
router.get('/', product_1.getProducts);
router.get('/:id', product_1.getProduct);
router.delete('/:id', product_1.deleteProduct);
router.post('/', product_1.postProduct);
router.put('/:id', product_1.updateProduct);
exports.default = router;
