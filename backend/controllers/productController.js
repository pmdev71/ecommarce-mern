exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This router will show all product in database.'
    })
}