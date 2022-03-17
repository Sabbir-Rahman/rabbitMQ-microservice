const basicController = async(req,res) => {
    const data = [
        {"name":"Md Sabbir Rahman","institute":"IUT","id":180042142,"dept":"SWE"},
        {"name":"Md Sabbir Rahman","institute":"IUT","id":180042142,"dept":"SWE"},
        {"name":"Md Sabbir Rahman","institute":"IUT","id":180042142,"dept":"SWE"},
        {"name":"Md Sabbir Rahman","institute":"IUT","id":180042142,"dept":"SWE"}
    ]

    return res.status(200).json(data)
}

module.exports = {basicController}