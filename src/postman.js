const fs = require('fs');
const rootDir = require('path').resolve('./');

const file = fs.readFileSync(`${rootDir}/input/postman_collection.json`);
const postmanData = JSON.parse(file);

const TEMPLATE = 
`---
title: "#{TITLE}"
---

#{CONTENTS}
`;

parsingPostmanData(postmanData.item, rootDir + '/content');
console.log(JSON.stringify(postmanData));

function parsingPostmanData(data, path = '') {
    for ( item of data ) {
        item.path = path + '/' + item.name.replace(/\s+/g,'_');
        fs.mkdirSync(item.path, { recursive: true });

        if ( item.hasOwnProperty('item') ) {
            parsingPostmanData(item.item, item.path);
        }

        jsonToMarkDown(item);
    }
}

function jsonToMarkDown(json) {
    const { name, path, request, response } = json;

    const result = TEMPLATE
        .replace('#{TITLE}', name)
        .replace('#{CONTENTS}', '');

    fs.writeFileSync(path + '/index.md', result);
}