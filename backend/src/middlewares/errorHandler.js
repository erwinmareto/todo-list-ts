const errorHandlder = (err, req, res, next) => {
    console.log(err);

    if (err.name === "NotFound") {
        res.status(404).json({message: "Error Not Found"})
    }
    else if (err.name === "Unauthorized"){
        res.status(401).json({message: "Error Unauthorized"})
    }
    else if (err.name === "Unauthenticated"){
        res.status(401).json({message: "Error Unauthenticated"})
    }
    else if (err.name === "InvalidCred"){
        res.status(400).json({message: "Invalid email or password"})
    }
    else if (err.name === "UniqueName"){
        res.status(400).json({message: "Username already exist"})
    }
    else {
        res.status(500).json({message: "Server Error"})
    }
}

module.exports = errorHandlder;