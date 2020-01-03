const express = require("express");
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {
    
    if(req.body.params !== undefined ){
        const {entries} = req.body.params;                
        templateData()
            .then(data => {
                mappedEntries = entries.map((item) => {
                item.cab = '"' + item.cab + '"';
                item.isFinishedEnd = '"' + item.isFinishedEnd + '"';
                item.hingeSide = '"' + item.hingeSide + '"';
                delete item._key;
                
                let line = (Object.values(item)).join(",");                                
                return template + "[Cabinets]\n" + line + '\n';
                });
                return mappedEntries.join(",");
            })
            .then(entries =>{
                return createFile(entries);
            })
            .then(file => {
                return res.status(200).json({success : true, message: "File created successfully", file})
            })
            .catch(message => {
                return res.status(200).json({success : false, message})
            });
        


        
        
    } else {
        res.status(200).json({
            success : false,
            message : "Invalid Request"
        })
    }
});

const createFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile('./data/newFile22.txt', data, function(error){
            if(error){
                reject("Unable to store file")
            } else {
                resolve({file : "./data/newFile.txt"})
            }            
        });        
    })
}

const templateData = () => {
    return new Promise((resolve, reject) => {        
        fs.readFile('./data/template/template.txt', function(error, data){
            if(error){
                reject("Unable to read template file")
            } else {
                template = data + '\n';
                resolve(template);
            }
        });

    });
}

module.exports = router;