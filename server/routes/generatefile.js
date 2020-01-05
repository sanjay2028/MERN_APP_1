const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/', (req, res) => {
    
    if(req.body.params !== undefined ){
        const {entries} = req.body.params;                      
        templateData(1)
            .then(data => {
                templateData(2).then(template2 => {

                    mappedEntries = entries.map((item) => {
                        item.cab = '"' + item.cab + '"';
                        item.isFinishedEnd = '"' + item.isFinishedEnd + '"';
                        item.hingeSide = '"' + item.hingeSide + '"';

                        delete item._key;                        
                        
                        let line = (Object.values(item)).join(",");                                                        
                        return template2 + "[Cabinets]\n" + line + '\n\n';
                    });
                    
                    return data + mappedEntries.join(",");                    

                }).then(entries =>{
                    return createFile(entries);
                }).then(fileData => {                                        
                    console.log("Created and SEnt", fileData);
                    return res.status(200).json({success : true, message: "File created successfully", filePath: fileData.filePath})
                }).catch(e =>{
                    return (e);
                });
            }).catch(message => {
                return res.status(200).json({success : false, message});
            });
        
    } else {
        res.status(200).json({
            success : false,
            message : "Invalid Request"
        })
    }
});

const createFile = (data) => {
    console.log("reached Here createFile");
    const dirName = path.join(__dirname, '../public/downloads/');    
    const fileName = Date.now() + ".ord";
    const fullFilePath = dirName + fileName;
    
    return new Promise((resolve, reject) => {
        fs.appendFile(fullFilePath, data, function(error){
            if(error){
                console.log("File creation error");
                reject("Unable to store file")
            } else {
                console.log("File created");
                resolve({filePath : fileName})
            }            
        });        
    })
}

const templateData = (template = 1) => {
    const templateName = template == 1? "template.txt" : "template_2.txt";
    return new Promise((resolve, reject) => {        
        try{
            fs.readFile(`./data/template/${templateName}`, function(error, data){
                if(error){
                    reject("Unable to read template file")
                } else {
                    template = data + '\n';
                    resolve(template);
                }
            });
        } catch(e){
            reject("Unable to read template file");
        }
    });
}

module.exports = router;