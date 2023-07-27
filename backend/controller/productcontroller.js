const { Op } = require('sequelize');
const J_product = require('../model/productmodel');


exports.addproduct = async (req, res) => {
    console.log("this is req", req.body);
    try {
        const { Product_name, Product_price, Product_category, userId } = req.body
        const productcheck = await J_product.findOne({ where: { Product_name } });
        if (!productcheck) {
            const p1 = await J_product.create({ Product_name, Product_price, Product_category, userId })
            return res.json({ success: true, msg: "Product added succesfully", p1 })
        }
        return res.json({ success: false, msg: "Product already exits" })

    } catch (error) {
        console.log(error)
    }



}

exports.getallproduct = async (req, res) => {
    const fa = await J_product.findAll({
        where: {
            userId: req.params.id
        }
    })
    res.json(fa);

}

exports.getbyid = async (req, res) => {
    try {

        const { item } = await req.query;
        console.log(item)
        const fo = await J_product.findOne({
            where: { Product_name: { [Op.like]: `%${item}%` } }

        });
        await res.json(fo)

    }
    catch (error) {
        console.error(error)
        res.status(404).json({ message: "error" })
    }
}

exports.DeleteProduct = async (req, res) => {
    try {
        const dlt = await J_product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json(dlt)
    }
    catch (error) {
        console.error(error)
        res.status(404).json({ message: "error" })
    }
}

exports.updateproduct = async (req, res) => {
    const { updatename, updateprice, updatecategory, uId } = req.body;
    try {
        const product = await J_product.update({
            Product_name: updatename,
            Product_price: updateprice,
            Product_category: updatecategory
        },
            {
                where: {
                    id: uId
                }
            }

        )
        return res.json({ success: true, msg: " update product succesfully" })
    } catch (error) {
        return res.json({ success: true, msg: " Product not exits" })

    }
}